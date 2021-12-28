<template>
  <v-container fluid>
    <v-row class="poster-area" no-gutters>
      <!-- col1 -->
      <v-col cols="4" lg="2">
        <poster-box v-for="poster in postersFirstColumn" :key="poster.id" :poster="poster" />
      </v-col>

      <!-- col2 -->
      <v-col cols="4" lg="2">
        <poster-box v-for="poster in postersSecondColumn" :key="poster.id" :poster="poster" />
      </v-col>

      <!-- col3 -->
      <v-col cols="4" lg="2">
        <poster-box v-for="poster in postersThirdColumn" :key="poster.id" :poster="poster" />
      </v-col>

      <!-- col4 -->
      <v-col cols="4" lg="2">
        <poster-box v-for="poster in postersFourthColumn" :key="poster.id" :poster="poster" />
      </v-col>

      <!-- col5 -->
      <v-col cols="4" lg="2">
        <poster-box v-for="poster in postersFifthColumn" :key="poster.id" :poster="poster" />
      </v-col>

      <!-- col6 -->
      <v-col cols="4" lg="2">
        <poster-box v-for="poster in postersSixthColumn" :key="poster.id" :poster="poster" />
      </v-col>
    </v-row>

    <!-- Pagination -->
    <v-row no-gutters align="center" justify="center" class="page-area">
      <v-col cols="auto" class="page-button" @click="prevPage()">
        <v-img
          :src="this.$colorMode.preference === 'light' ? lightPrevPage : darkPrevPage"
          class="page-icon"
        ></v-img>
      </v-col>

      <v-col cols="auto" class="page-number">
        {{ page }}
      </v-col>

      <v-col cols="auto" class="page-button" @click="nextPage()">
        <v-img
          :src="this.$colorMode.preference === 'light' ? lightNextPage : darkNextPage"
          class="page-icon"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import PosterBox from '~/components/PosterBox.vue';

export default {
  name: 'MainPage',
  layout: 'main/default',
  components: {
    PosterBox,
  },
  async fetch() {
    const params = {
      page: this.page,
      isFilteredDate: true,
      isActivated: true,
    };
    await this.$store.dispatch('poster/FETCH_LIST_V2', params);

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
      posters: 'poster/fetchPosters',
    }),
    ...mapGetters(['lightPrevPage', 'darkPrevPage', 'lightNextPage', 'darkNextPage']),
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
    this.init();
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

      for (let i = 1; i <= this.posterLayoutSize; i++) {
        if (postersLocations[i] === EMPTY) {
          const targetRow = i;
          fullPosters.push(this.makeEmptyPoster(targetRow, targetColumn, 1));
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
      const maxPage = 5;
      if (this.page < maxPage) this.page += 1;
      else this.page = maxPage;
    },
  },
};
</script>

<style scoped>
img {
  display: block;
}

.poster-area {
  margin: 0 auto;
}

.page-area {
  margin-top: 0;
  margin-bottom: 64px;
}
.page-button {
  width: 48px;
  height: 48px;

  margin: 0 48px;
  padding: 12px 17px;

  cursor: pointer;
}
.page-icon {
  width: 14px;
  height: 24px;
}
.page-number {
  width: 24px;
  height: 24px;

  font-size: 20px;
  line-height: 25px;
  color: var(--color-primary);

  padding: 0 6px;
}

@media all and (min-width: 1264px) {
  .container {
    padding: 0 26px;
  }
  .poster-area {
    max-width: 1512px;

    margin-bottom: 20px;
  }
}
@media all and (min-width: 600px) and (max-width: 1263px) {
  .container {
    padding: 0 26px;
  }
  .poster-area {
    max-width: 756px;

    margin-bottom: 20px;
  }
}
@media all and (max-width: 599px) {
  .container {
    padding: 0 2px;
  }
  .poster-area {
    max-width: 548px;

    margin-bottom: 4px;
  }
}
</style>
