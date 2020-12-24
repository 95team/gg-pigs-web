<template>
  <!-- dayMode -->
  <v-app :class="[dayMode ? 'background-light5' : 'background-dark1']">
    <!-- Header -->
    <header-layout :day-mode="dayMode" @update="nightDayUpdate" />

    <!-- Content -->
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
      <v-layout class="pages centerAlign">
        <div class="page centerAlign">
          <button class="clickArea centerAlign">
            <img
              :src="[dayMode ? 'icon/prePageDay.svg' : 'icon/prePageNight.svg']"
              class="pageIcon"
            />
          </button>
          <v-spacer></v-spacer>
          <div class="pageNum" :class="[dayMode ? 'text-light1' : 'text-light5']">1</div>
          <v-spacer></v-spacer>
          <button class="clickArea centerAlign">
            <img
              :src="[dayMode ? 'icon/nextPageDay.svg' : 'icon/nextPageNight.svg']"
              class="pageIcon"
            />
          </button>
        </div>
      </v-layout>
    </v-container>

    <!-- Footer -->
    <footer-layout :day-mode="dayMode" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderLayout from '~/layouts/header.vue';
import FooterLayout from '~/layouts/footer.vue';
import PosterBox from '~/components/PosterBox.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    PosterBox,
  },
  data() {
    return {
      posterLayoutSize: 6,
      postersFirstColumn: [],
      postersSecondColumn: [],
      postersThirdColumn: [],
      postersFourthColumn: [],
      postersFifthColumn: [],
      postersSixthColumn: [],
      dayMode: true,
    };
  },
  computed: {
    ...mapGetters({
      posters: 'poster/fetchPosters',
    }),
  },
  watch: {
    posters() {
      this.postersFirstColumn = this.makeFilledPostersTargetColumn('1');
      this.postersSecondColumn = this.makeFilledPostersTargetColumn('2');
      this.postersThirdColumn = this.makeFilledPostersTargetColumn('3');
      this.postersFourthColumn = this.makeFilledPostersTargetColumn('4');
      this.postersFifthColumn = this.makeFilledPostersTargetColumn('5');
      this.postersSixthColumn = this.makeFilledPostersTargetColumn('6');
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    init() {
      const vm = this;
      vm.$store.dispatch('poster/FETCH_LIST');
    },

    getPostersFromColumn(targetColumn) {
      const filteredPosters = this.posters.filter(poster => poster.columnPosition === targetColumn);
      filteredPosters.sort((poster1, poster2) =>
        poster1.rowPosition > poster2.rowPosition ? 1 : -1,
      );

      return filteredPosters;
    },

    getPostersLocations(filteredPosters) {
      const EMPTY = 0;
      const FILLED = 1;
      const postersLocations = Array.from({ length: this.posterLayoutSize + 2 }, () => EMPTY);
      postersLocations[0] = FILLED;
      postersLocations[this.posterLayoutSize + 1] = FILLED;

      for (let i = 0; i < filteredPosters.length; i++) {
        const posterType = filteredPosters[i].posterType;
        const posterRowPosition = Number(filteredPosters[i].rowPosition);

        for (let j = 0; j < Number(posterType.charAt(1)); j++) {
          postersLocations[posterRowPosition + j] = FILLED;
        }
      }

      return postersLocations;
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

    makeFilledPostersTargetColumn(targetColumn) {
      // 한 '열'에 대해서, ('포스터'가 없는) 빈 '행'의 위치에 '샘플 포스터'를 삽입하여 모든 '행'을 채우는 함수
      const EMPTY = 0;
      const FILLED = 1;
      const filledPosters = this.getPostersFromColumn(targetColumn);
      const postersLocations = this.getPostersLocations(filledPosters);

      let emptyPosterSize = 0;
      for (let i = 1; i <= this.posterLayoutSize + 1; i++) {
        if (postersLocations[i] === EMPTY) {
          emptyPosterSize++;
        }

        if (postersLocations[i] === FILLED && emptyPosterSize >= 1) {
          const targetRow = i - emptyPosterSize;
          filledPosters.push(this.makeEmptyPoster(targetRow, targetColumn, emptyPosterSize));
          emptyPosterSize = 0;
        } else if (emptyPosterSize >= 3) {
          emptyPosterSize = 3;
          const targetRow = i + 1 - emptyPosterSize;
          filledPosters.push(this.makeEmptyPoster(targetRow, targetColumn, emptyPosterSize));
          emptyPosterSize = 0;
        }
        postersLocations[i] = FILLED;
      }

      filledPosters.sort((poster1, poster2) =>
        poster1.rowPosition > poster2.rowPosition ? 1 : -1,
      );

      return filledPosters;
    },
    nightDayUpdate() {
      if (this.dayMode) {
        this.dayMode = false;
      } else {
        this.dayMode = true;
      }
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

.pages {
  margin-bottom: 64px;
}

.page {
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
