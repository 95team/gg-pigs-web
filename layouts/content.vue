<template>
  <!-- Content Layout -->
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <!-- Column1 -->
      <v-flex xs12 md6 lg2>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest2"></ad-box>
        <ad-box :advert="boxObjectForTest3"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
      </v-flex>

      <!-- Column2 -->
      <v-flex xs12 md6 lg2>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest2"></ad-box>
        <ad-box :advert="boxObjectForTest3"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
      </v-flex>

      <!-- Column3 -->
      <v-flex xs12 md6 lg2>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest2"></ad-box>
        <ad-box :advert="boxObjectForTest3"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
      </v-flex>

      <!-- Column4 -->
      <v-flex xs12 md6 lg2>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest2"></ad-box>
        <ad-box :advert="boxObjectForTest3"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
      </v-flex>

      <!-- Column5 -->
      <v-flex xs12 md6 lg2>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest2"></ad-box>
        <ad-box :advert="boxObjectForTest3"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
        <ad-box :advert="boxObjectForTest1"></ad-box>
      </v-flex>

      <!-- Column6 -->
      <v-flex xs12 md6 lg2>
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

<style></style>
