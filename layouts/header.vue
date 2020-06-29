<template>
  <div>
    <v-app-bar class="white" height="116" flat>
      <div class="pangoLogo" style="padding-left:88px;">
        <v-img :src="pangoLogo" width="80" height="56"></v-img>
      </div>
      <v-spacer></v-spacer>
      <div class="nightDay mr-8">
        <v-img :src="nightDay" width="48" height="48"></v-img>
      </div>
      <div class="userInfo" style="padding-right:88px;">
        <v-img :src="userInfo" width="48" height="48"></v-img>
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

<style>
.v-toolbar__content {
  padding: 0;
}
</style>
