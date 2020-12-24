<template>
  <v-main>
    <!-- content layout -->
    <v-container fluid pa-0>
      <v-layout class="contents" row wrap>
        <!-- flex1 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="poster in postersFirstColumn" :key="poster.id" :poster="poster" />
        </v-flex>

        <!-- flex2 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="poster in postersSecondColumn" :key="poster.id" :poster="poster" />
        </v-flex>

        <!-- flex3 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="poster in postersThirdColumn" :key="poster.id" :poster="poster" />
        </v-flex>

        <!-- flex4 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="poster in postersFourthColumn" :key="poster.id" :poster="poster" />
        </v-flex>

        <!-- flex5 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="poster in postersFifthColumn" :key="poster.id" :poster="poster" />
        </v-flex>

        <!-- flex6 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="poster in postersSixthColumn" :key="poster.id" :poster="poster" />
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
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex';
import AdBox from '~/components/AdBox.vue';

export default {
  components: { AdBox },
  props: {
    dayMode: Boolean,
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
    };
  },
  computed: {
    ...mapGetters({
      posters: 'poster/fetchPosters',
    }),
  },
  watch: {
    posters() {
      this.postersFirstColumn = this.makeFilledAdvertsTargetColumn('1');
      this.postersSecondColumn = this.makeFilledAdvertsTargetColumn('2');
      this.postersThirdColumn = this.makeFilledAdvertsTargetColumn('3');
      this.postersFourthColumn = this.makeFilledAdvertsTargetColumn('4');
      this.postersFifthColumn = this.makeFilledAdvertsTargetColumn('5');
      this.postersSixthColumn = this.makeFilledAdvertsTargetColumn('6');
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

    getAdvertsFromColumn(targetColumn) {
      const filteredAdverts = this.posters.filter(poster => poster.columnPosition === targetColumn);
      filteredAdverts.sort((poster1, poster2) =>
        poster1.rowPosition > poster2.rowPosition ? 1 : -1,
      );

      return filteredAdverts;
    },

    getAdvertsLocations(filteredAdverts) {
      const EMPTY = 0;
      const FILLED = 1;
      const postersLocations = Array.from({ length: this.posterLayoutSize + 2 }, () => EMPTY);
      postersLocations[0] = FILLED;
      postersLocations[this.posterLayoutSize + 1] = FILLED;

      for (let i = 0; i < filteredAdverts.length; i++) {
        const posterType = filteredAdverts[i].posterType;
        const posterRowPosition = Number(filteredAdverts[i].rowPosition);

        for (let j = 0; j < Number(posterType.charAt(1)); j++) {
          postersLocations[posterRowPosition + j] = FILLED;
        }
      }

      return postersLocations;
    },

    makeEmptyAdvert(targetRow, targetColumn, emptyAdvertSize) {
      const randomSeed = 10000;
      const id = randomSeed + (Date.now() % randomSeed) * Math.floor(Math.random() * randomSeed);
      targetRow = targetRow.toString();
      targetColumn = targetColumn.toString();
      emptyAdvertSize = emptyAdvertSize.toString();

      const emptyAdvert = {
        id,
        type: 'EXAMPLE',
        size: emptyAdvertSize,
        rowPosition: targetRow,
        columnPosition: targetColumn,
      };

      return emptyAdvert;
    },

    makeFilledAdvertsTargetColumn(targetColumn) {
      // 한 '열'에 대해서, (광고가 없는) 빈 '행'의 위치에 샘플 광고를 삽입하여 모든 '행'을 채우는 함수
      const EMPTY = 0;
      const FILLED = 1;
      const filledAdverts = this.getAdvertsFromColumn(targetColumn);
      const postersLocations = this.getAdvertsLocations(filledAdverts);

      let emptyAdvertSize = 0;
      for (let i = 1; i <= this.posterLayoutSize + 1; i++) {
        if (postersLocations[i] === EMPTY) {
          emptyAdvertSize++;
        }

        if (postersLocations[i] === FILLED && emptyAdvertSize >= 1) {
          const targetRow = i - emptyAdvertSize;
          filledAdverts.push(this.makeEmptyAdvert(targetRow, targetColumn, emptyAdvertSize));
          emptyAdvertSize = 0;
        } else if (emptyAdvertSize >= 3) {
          emptyAdvertSize = 3;
          const targetRow = i + 1 - emptyAdvertSize;
          filledAdverts.push(this.makeEmptyAdvert(targetRow, targetColumn, emptyAdvertSize));
          emptyAdvertSize = 0;
        }
        postersLocations[i] = FILLED;
      }

      filledAdverts.sort((poster1, poster2) =>
        poster1.rowPosition > poster2.rowPosition ? 1 : -1,
      );

      return filledAdverts;
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
