<template>
  <v-container fluid pa-0>
    <v-layout class="contents" row wrap>
      <!-- flex1 -->
      <v-flex xs4 md4 lg2>
        <poster-box v-for="poster in postersFirstColumn" :key="poster.id" :poster="poster" />
      </v-flex>

      <!-- flex2 -->
      <v-flex xs4 md4 lg2>
        <poster-box v-for="poster in postersSecondColumn" :key="poster.id" :poster="poster" />
      </v-flex>

      <!-- flex3 -->
      <v-flex xs4 md4 lg2>
        <poster-box v-for="poster in postersThirdColumn" :key="poster.id" :poster="poster" />
      </v-flex>

      <!-- flex4 -->
      <v-flex xs4 md4 lg2>
        <poster-box v-for="poster in postersFourthColumn" :key="poster.id" :poster="poster" />
      </v-flex>

      <!-- flex5 -->
      <v-flex xs4 md4 lg2>
        <poster-box v-for="poster in postersFifthColumn" :key="poster.id" :poster="poster" />
      </v-flex>

      <!-- flex6 -->
      <v-flex xs4 md4 lg2>
        <poster-box v-for="poster in postersSixthColumn" :key="poster.id" :poster="poster" />
      </v-flex>
    </v-layout>

    <!-- Pagination -->
    <v-layout class="mb64 centerAlign">
      <div class="pagination centerAlign">
        <button class="clickArea centerAlign" @click="prevPage()">
          <img
            :src="[dayMode ? 'icon/prePageDay.svg' : 'icon/prePageNight.svg']"
            class="pageIcon"
          />
        </button>

        <v-spacer></v-spacer>
        <div class="pageNum" :class="[dayMode ? 'text-light1' : 'text-light5']">{{ page }}</div>
        <v-spacer></v-spacer>

        <button class="clickArea centerAlign" @click="nextPage()">
          <img
            :src="[dayMode ? 'icon/nextPageDay.svg' : 'icon/nextPageNight.svg']"
            class="pageIcon"
          />
        </button>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import PosterBox from '~/components/PosterBox.vue';

export default {
  components: {
    PosterBox,
  },
  layout: 'main/default',
  async fetch() {
    const vm = this;
    const params = {
      page: vm.page,
      isFilteredDate: true,
      isActivated: true,
    };
    await vm.$store.dispatch('poster/FETCH_LIST_V2', params);

    this.postersFirstColumn = this.makeFullPosters(this.firstColumn);
    this.postersSecondColumn = this.makeFullPosters(this.secondColumn);
    this.postersThirdColumn = this.makeFullPosters(this.thirdColumn);
    this.postersFourthColumn = this.makeFullPosters(this.fourthColumn);
    this.postersFifthColumn = this.makeFullPosters(this.fifthColumn);
    this.postersSixthColumn = this.makeFullPosters(this.sixthColumn);
  },
  data() {
    return {
      page: 1,
      posterLayoutSize: 6,
      postersFirstColumn: [],
      postersSecondColumn: [],
      postersThirdColumn: [],
      postersFourthColumn: [],
      postersFifthColumn: [],
      postersSixthColumn: [],
    };
  },
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
      posters: 'poster/fetchPosters',
    }),
    firstColumn() {
      return String((this.page - 1) * this.posterLayoutSize + 1);
    },
    secondColumn() {
      return String((this.page - 1) * this.posterLayoutSize + 2);
    },
    thirdColumn() {
      return String((this.page - 1) * this.posterLayoutSize + 3);
    },
    fourthColumn() {
      return String((this.page - 1) * this.posterLayoutSize + 4);
    },
    fifthColumn() {
      return String((this.page - 1) * this.posterLayoutSize + 5);
    },
    sixthColumn() {
      return String((this.page - 1) * this.posterLayoutSize + 6);
    },
  },
  watch: {
    posters() {
      this.postersFirstColumn = this.makeFullPosters(this.firstColumn);
      this.postersSecondColumn = this.makeFullPosters(this.secondColumn);
      this.postersThirdColumn = this.makeFullPosters(this.thirdColumn);
      this.postersFourthColumn = this.makeFullPosters(this.fourthColumn);
      this.postersFifthColumn = this.makeFullPosters(this.fifthColumn);
      this.postersSixthColumn = this.makeFullPosters(this.sixthColumn);
    },
    page() {
      this.getPosters();
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    init() {},

    /** '포스터' 와 관련된 함수들 입니다. */
    getPosters() {
      const vm = this;
      const params = {
        page: vm.page,
        isFilteredDate: true,
        isActivated: true,
      };
      vm.$store.dispatch('poster/FETCH_LIST_V2', params);
    },

    getPostersFromColumn(targetColumn) {
      const filteredPosters = this.posters.filter(poster => poster.columnPosition === targetColumn);

      filteredPosters.sort((poster1, poster2) =>
        poster1.rowPosition > poster2.rowPosition ? 1 : -1,
      );

      return filteredPosters;
    },

    getPostersLocations(filteredPosters) {
      /**
       * 한 '열'에 대해서, 어떤 '행'에 '포스터'가 존재하는지 배열 생성하는 함수입니다. (존재: 1, 미존재: 0)
       * 양쪽의 끝 인덱스(0, layout + 1)는 사용하지 않습니다.
       * Ex1. 모든 행이 비었을 때 : [1, 0, 0, 0, 0, 0, 0, 1]
       * Ex2. 1, 2 행이 존재할 때 : [1, 1, 1, 0, 0, 0, 0, 1]
       */

      const EMPTY = 0;
      const FILLED = 1;
      const locations = Array.from({ length: this.posterLayoutSize + 2 }, () => EMPTY);

      locations[0] = FILLED;
      locations[this.posterLayoutSize + 1] = FILLED;

      for (let i = 0; i < filteredPosters.length; i++) {
        const posterType = filteredPosters[i].posterType;
        const posterRowPosition = Number(filteredPosters[i].rowPosition);

        for (let j = 0; j < Number(posterType.charAt(1)); j++) {
          locations[posterRowPosition + j] = FILLED;
        }
      }

      return locations;
    },

    makeFullPosters(targetColumn) {
      /**
       * 한 '열'에 대해서, ('포스터'가 없는) 빈 '행'의 위치에 '샘플 포스터'를 삽입하여 모든 '행'을 채우는 함수입니다.
       */
      const EMPTY = 0;
      const FILLED = 1;
      const posters = this.getPostersFromColumn(targetColumn);
      const postersLocations = this.getPostersLocations(posters);

      const fullPosters = posters;

      let emptyPosterSize = 0;
      for (let i = 1; i <= this.posterLayoutSize + 1; i++) {
        if (postersLocations[i] === EMPTY) {
          emptyPosterSize++;
        }

        if (postersLocations[i] === FILLED && emptyPosterSize >= 1) {
          const targetRow = i - emptyPosterSize;
          fullPosters.push(this.makeEmptyPoster(targetRow, targetColumn, emptyPosterSize));
          emptyPosterSize = 0;
        } else if (emptyPosterSize >= 3) {
          emptyPosterSize = 3;
          const targetRow = i + 1 - emptyPosterSize;
          fullPosters.push(this.makeEmptyPoster(targetRow, targetColumn, emptyPosterSize));
          emptyPosterSize = 0;
        }
        postersLocations[i] = FILLED;
      }

      fullPosters.sort((poster1, poster2) => (poster1.rowPosition > poster2.rowPosition ? 1 : -1));

      return fullPosters;
    },

    makeEmptyPoster(targetRow, targetColumn, emptyPosterSize) {
      const randomSeed = 10000;
      const id = randomSeed + (Date.now() % randomSeed) * Math.floor(Math.random() * randomSeed);
      targetRow = targetRow.toString();
      targetColumn = targetColumn.toString();
      emptyPosterSize = emptyPosterSize.toString();

      const emptyPoster = {
        id,
        type: 'EXAMPLE',
        size: emptyPosterSize,
        rowPosition: targetRow,
        columnPosition: targetColumn,
      };

      return emptyPoster;
    },

    /** '페이지 조작' 과 관련된 함수들 입니다. */
    prevPage() {
      const minPage = 1;
      if (this.page > minPage) this.page -= 1;
      else this.page = minPage;
    },
    nextPage() {
      const maxPage = 20;
      if (this.page < maxPage) this.page += 1;
      else this.page = maxPage;
    },
  },
};
</script>

<style scoped>
.contents {
  margin-top: 28px;
  margin-bottom: 28px;
  margin-left: 0px;
  margin-right: 0px;
}

.pagination {
  width: 250px;
  height: 48px;
}

.clickArea {
  width: 48px;
  height: 48px;
  outline: none;
}

.pageNum {
  width: 14px;
  height: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
}

.pageIcon {
  width: 18px;
  height: 36px;
}

.centerAlign {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media all and (max-width: 959px) {
  .container {
    max-width: 932px !important;
  }
}
@media all and (min-width: 960px) and (max-width: 1263px) {
  .container {
    max-width: 932px !important;
  }
}
@media all and (min-width: 1264px) {
  .container {
    max-width: 1880px !important;
  }
}
</style>
