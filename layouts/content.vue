<template>
  <v-content>
    <!-- content layout -->
    <v-container fluid pa-0>
      <v-layout class="contents" row wrap>
        <!-- flex1 -->
        <v-flex xs4 md4 lg2>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest2"></ad-box>
          <ad-box :advert="boxObjectForTest3"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
        </v-flex>

        <!-- flex2 -->
        <v-flex xs4 md4 lg2>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest2"></ad-box>
          <ad-box :advert="boxObjectForTest3"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
        </v-flex>

        <!-- flex3 -->
        <v-flex xs4 md4 lg2>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest2"></ad-box>
          <ad-box :advert="boxObjectForTest3"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
        </v-flex>

        <!-- flex4 -->
        <v-flex xs4 md4 lg2>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest2"></ad-box>
          <ad-box :advert="boxObjectForTest3"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
        </v-flex>

        <!-- flex5 -->
        <v-flex xs4 md4 lg2>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest2"></ad-box>
          <ad-box :advert="boxObjectForTest3"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
        </v-flex>

        <!-- flex6 -->
        <v-flex xs4 md4 lg2>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest2"></ad-box>
          <ad-box :advert="boxObjectForTest3"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
          <ad-box :advert="boxObjectForTest1"></ad-box>
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
  </v-content>
</template>

<script>
import AdBox from '~/components/AdBox.vue';

export default {
  components: { AdBox },
  props: {
    dayMode: Boolean,
  },
  data() {
    return {
      boxObjectForTest1: {
        id: '1',
        type: '1',
        title: "This is a adBox's title",
        alt: "This is a adBox's description",
        src: 'image/type1.png',
      },
      boxObjectForTest2: {
        id: '1',
        type: '2',
        title: "This is a adBox's title",
        alt: "This is a adBox's description",
        src: 'image/type2.png',
      },
      boxObjectForTest3: {
        id: '1',
        type: '3',
        title: "This is a adBox's title",
        alt: "This is a adBox's description",
        src: 'image/type3.png',
      },
    };
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
