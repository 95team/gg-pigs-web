<template>
  <div>
    <v-app-bar class="white" height="116" flat>
      <div class="pangoLogo" style="margin-left:88px;">
        <v-img :src="pangoLogo" width="80" height="56"></v-img>
      </div>
      <v-spacer></v-spacer>
      <div class="clickArea mr-8">
        <v-img :src="nightDay" class="iconArea"></v-img>
      </div>
      <div class="clickArea" style="margin-right:88px;">
        <v-img :src="userInfo" class="iconArea"></v-img>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pangoLogo: require('../assets/img/+++logo_panggo@3x.png'),
      nightDay: require('../assets/icon/nightDay.svg'),
      userInfo: require('../assets/icon/userInfo.svg'),
    };
  },
};
</script>

<style scoped>
.clickArea {
  width: 48px;
  height: 48px;
  position: relative;
}
.iconArea {
  width: 36px;
  height: 36px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>

<style>
.v-toolbar__content {
  padding: 0;
}
</style>
