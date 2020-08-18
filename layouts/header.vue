<template>
  <div>
    <v-app-bar class="white" height="116px" flat>
      <div class="pangoLogo" style="margin-left:88px;">
        <v-img :src="pangoLogo" width="80px" height="56px"></v-img>
      </div>
      <v-spacer></v-spacer>
      <div class="clickArea mr-8">
        <img :src="nightDay" class="iconArea" />
      </div>
      <div class="clickArea" style="margin-right:88px;">
        <img :src="userInfo" class="iconArea" />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pangoLogo: require('../static/img/pangoLogo.png'),
      nightDay: require('../static/icon/nightDay.svg'),
      userInfo: require('../static/icon/userInfo.svg'),
    };
  },
};
</script>

<style scoped>
.v-toolbar__content {
  padding: 0;
}
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
