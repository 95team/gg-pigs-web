<template>
  <!-- content layout -->
  <v-container fluid pa-0 ma-0>
    <v-layout row wrap>
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
  </v-container>
</template>

<script>
import AdBox from '~/components/AdBox.vue';

export default {
  components: { AdBox },
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

<style>
.layout {
  margin-left: 0px;
  margin-right: 0px;
}

@media all and (max-width: 960px) {
  .container {
    max-width: 932px !important;
  }
}
@media all and (min-width: 961px) and (max-width: 1264px) {
  .container {
    max-width: 932px !important;
  }
}
@media all and (min-width: 1265px) {
  .container {
    max-width: 1880px !important;
  }
}
</style>
