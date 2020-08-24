<template>
  <v-app-bar flat dense>
    <v-container fluid pa-0>
      <v-layout align-center>
        <v-flex>
          <div class="pangoLogo">
            <v-img v-if="!this.$vuetify.theme.dark" :src="pangoLogoDay"></v-img>
            <v-img v-else :src="pangoLogoNight"></v-img>
          </div>
        </v-flex>
        <v-flex d-flex justify-end>
          <div class="clickArea nightDayMargin">
            <v-btn text block @click="nightDayHandler">
              <v-img v-if="!this.$vuetify.theme.dark" :src="day" class="iconArea"></v-img>
              <v-img v-else :src="night" class="iconArea"></v-img>
            </v-btn>
          </div>
          <div class="clickArea userInfoMargin">
            <v-btn text block>
              <v-img v-if="!this.$vuetify.theme.dark" :src="userInfoDay" class="iconArea"></v-img>
              <v-img v-else :src="userInfoNight" class="iconArea"></v-img>
            </v-btn>
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
      pangoLogoDay: require('../static/image/pangoLogoDay.png'),
      pangoLogoNight: require('../static/image/pangoLogoNight.png'),
      day: require('../static/icon/day.svg'),
      night: require('../static/icon/night.svg'),
      userInfoDay: require('../static/icon/userInfoDay.svg'),
      userInfoNight: require('../static/icon/userInfoNight.svg'),
    };
  },
  methods: {
    nightDayHandler(self) {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
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
}

.clickArea {
  width: 48px;
  height: 48px;
  position: relative;
}

.v-btn {
  height: 48px !important;
  padding: 0px !important;
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
  }
  .userInfoMargin {
    margin-right: 2px;
  }
}
</style>
