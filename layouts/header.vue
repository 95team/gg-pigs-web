<template>
  <v-flex py-lg-9 py-md-9>
    <v-app-bar flat height="48px" class="white">
      <v-container fluid pa-0>
        <v-layout align-center>
          <v-flex ml-lg-11 pl-lg-11 ml-md-8 ml-sm-4>
            <div class="pangoLogo">
              <v-img :src="pangoLogo"></v-img>
            </div>
          </v-flex>
          <v-flex d-flex justify-end mr-lg-11 pr-lg-10 mr-md-7 mr-sm-1>
            <v-flex d-flex justify-end mr-lg-8 mr-md-4>
              <div class="clickArea">
                <v-img :src="nightDay" class="iconArea"></v-img>
              </div>
            </v-flex>
            <div class="clickArea">
              <v-img :src="userInfo" class="iconArea"></v-img>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      pangoLogo: require('../static/image/pangoLogo.png'),
      nightDay: require('../static/icon/nightDay.svg'),
      userInfo: require('../static/icon/userInfo.svg'),
    };
  },
};
</script>

<style scoped>
.pangoLogo {
  width: 80px;
  height: 56px;
}
.clickArea {
  width: 48px;
  height: 48px;
  position: relative;
}
.iconArea {
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12.5%;
  left: 12.5%;
  margin: auto;
}
@media all and (max-width: 959px) {
  .pangoLogo {
    width: 38px;
    height: 26px;
  }
  .iconArea {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 25%;
    left: 25%;
    margin: auto;
  }
}
@media all and (max-width: 599px) {
  .container {
    max-width: 568px !important;
  }
}
@media all and (min-width: 600px) and(max-width: 1263px) {
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

<style>
.v-toolbar__content {
  padding: 0;
}
</style>
