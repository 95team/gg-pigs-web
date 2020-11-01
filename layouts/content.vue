<template>
  <v-content>
    <!-- content layout -->
    <v-container fluid pa-0>
      <v-layout class="contents" row wrap>
        <!-- flex1 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="advert in advertisementsFirstColumn" :key="advert.id" :advert="advert" />
        </v-flex>

        <!-- flex2 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="advert in advertisementsSecondColumn" :key="advert.id" :advert="advert" />
        </v-flex>

        <!-- flex3 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="advert in advertisementsThirdColumn" :key="advert.id" :advert="advert" />
        </v-flex>

        <!-- flex4 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="advert in advertisementsFourthColumn" :key="advert.id" :advert="advert" />
        </v-flex>

        <!-- flex5 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="advert in advertisementsFifthColumn" :key="advert.id" :advert="advert" />
        </v-flex>

        <!-- flex6 -->
        <v-flex xs4 md4 lg2>
          <ad-box v-for="advert in advertisementsSixthColumn" :key="advert.id" :advert="advert" />
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
          <div class="pageNum" :class="[dayMode ? 'text-black' : 'text-white']">1</div>
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
  </v-content>
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
      advertLayoutSize: 6,
      advertisementsFirstColumn: [],
      advertisementsSecondColumn: [],
      advertisementsThirdColumn: [],
      advertisementsFourthColumn: [],
      advertisementsFifthColumn: [],
      advertisementsSixthColumn: [],
    };
  },
  computed: {
    ...mapGetters({
      advertisements: 'advertisements/fetchAdvertisements',
    }),
  },
  watch: {
    advertisements() {
      this.advertisementsFirstColumn = this.makeFilledAdvertsTargetColumn('1');
      this.advertisementsSecondColumn = this.makeFilledAdvertsTargetColumn('2');
      this.advertisementsThirdColumn = this.makeFilledAdvertsTargetColumn('3');
      this.advertisementsFourthColumn = this.makeFilledAdvertsTargetColumn('4');
      this.advertisementsFifthColumn = this.makeFilledAdvertsTargetColumn('5');
      this.advertisementsSixthColumn = this.makeFilledAdvertsTargetColumn('6');
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    init() {
      const vm = this;
      vm.$store.dispatch('advertisements/FETCH_LIST');
    },

    getAdvertsFromColumn(targetColumn) {
      const filteredAdverts = this.advertisements.filter(
        advert => advert.columnPosition === targetColumn,
      );
      filteredAdverts.sort((advert1, advert2) =>
        advert1.rowPosition > advert2.rowPosition ? 1 : -1,
      );

      return filteredAdverts;
    },

    getAdvertsLocations(filteredAdverts) {
      const EMPTY = 0;
      const FILLED = 1;
      const advertsLocations = Array.from({ length: this.advertLayoutSize + 2 }, () => EMPTY);
      advertsLocations[0] = FILLED;
      advertsLocations[this.advertLayoutSize + 1] = FILLED;

      for (let i = 0; i < filteredAdverts.length; i++) {
        const advertType = filteredAdverts[i].advertisementType;
        const advertRowPosition = Number(filteredAdverts[i].rowPosition);

        for (let j = 0; j < Number(advertType.charAt(1)); j++) {
          advertsLocations[advertRowPosition + j] = FILLED;
        }
      }

      return advertsLocations;
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
      const EMPTY = 0;
      const FILLED = 1;
      const filledAdverts = this.getAdvertsFromColumn(targetColumn);
      const advertsLocations = this.getAdvertsLocations(filledAdverts);

      let emptyAdvertSize = 0;
      for (let i = 1; i <= this.advertLayoutSize + 1; i++) {
        if (advertsLocations[i] === EMPTY) {
          emptyAdvertSize++;
        }

        if (advertsLocations[i] === FILLED && emptyAdvertSize >= 1) {
          const targetRow = i - emptyAdvertSize;
          filledAdverts.push(this.makeEmptyAdvert(targetRow, targetColumn, emptyAdvertSize));
          emptyAdvertSize = 0;
        } else if (emptyAdvertSize >= 3) {
          emptyAdvertSize = 3;
          const targetRow = i + 1 - emptyAdvertSize;
          filledAdverts.push(this.makeEmptyAdvert(targetRow, targetColumn, emptyAdvertSize));
          emptyAdvertSize = 0;
        }
        advertsLocations[i] = FILLED;
      }

      filledAdverts.sort((advert1, advert2) =>
        advert1.rowPosition > advert2.rowPosition ? 1 : -1,
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
