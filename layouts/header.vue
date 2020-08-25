<template>
  <v-app-bar flat dense class="white">
    <v-container fluid pa-0>
      <v-layout align-center>
        <v-flex>
          <div class="pangoLogo">
            <v-img :src="pangoLogo"></v-img>
          </div>
        </v-flex>
        <v-flex d-flex justify-end>
          <div class="clickArea nightDayMargin">
            <v-img :src="nightDay" class="iconArea"></v-img>
          </div>
          <div class="clickArea userInfoMargin">
            <v-img :src="userInfo" class="iconArea"></v-img>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app-bar>
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
.v-app-bar {
  height: 116px !important;
  padding-top: 26px;
}

.pangoLogo {
  width: 80px;
  height: 56px;
}

.iconArea {
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12.5%;
  left: 12.5%;
  margin: auto;
}

.clickArea {
  width: 48px;
  height: 48px;
  position: relative;
}

@media all and (min-width: 1264px) {
  .container {
    max-width: 1880px !important;
  }
  .pangoLogo {
    margin-left: 72px;
  }
  .nightDayMargin {
    margin-right: 32px;
  }
  .userInfoMargin {
    margin-right: 66px;
  }
}

@media all and (min-width: 960px) and (max-width: 1263px) {
  .container {
    max-width: 932px !important;
  }
  .pangoLogo {
    margin-left: 32px;
  }
  .nightDayMargin {
    margin-right: 16px;
  }
  .userInfoMargin {
    margin-right: 26px;
  }
}

@media all and (max-width: 959px) {
  .v-app-bar {
    height: 48px !important;
    padding-top: 0px;
  }
  .pangoLogo {
    width: 38px;
    height: 26px;
    margin-left: 14px;
  }
  .iconArea {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 25%;
    left: 25%;
    margin: auto;
  }
  .userInfoMargin {
    margin-right: 2px;
  }
}
</style>
