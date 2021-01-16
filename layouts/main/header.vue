<template>
  <v-container fluid pa-0>
    <v-layout align-center>
      <v-flex>
        <div class="pangoLogo">
          <nuxt-link to="/">
            <v-img v-if="dayMode" :src="pangoLogoDay"></v-img>
            <v-img v-else :src="pangoLogoNight"></v-img>
          </nuxt-link>
        </div>
      </v-flex>

      <v-flex d-flex justify-end>
        <div class="clickArea nightDayMargin">
          <v-btn text block @click="dayModeHandler">
            <v-img v-if="dayMode" :src="day" class="iconArea"></v-img>
            <v-img v-else :src="night" class="iconArea"></v-img>
          </v-btn>
        </div>
        <div class="clickArea userInfoMargin">
          <v-btn text block :to="{ name: 'apply' }">
            <v-img v-if="dayMode" :src="userInfoDay" class="iconArea"></v-img>
            <v-img v-else :src="userInfoNight" class="iconArea"></v-img>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      pangoLogoDay: require('~/static/image/pangoLogoDay.png'),
      pangoLogoNight: require('~/static/image/pangoLogoNight.png'),
      day: require('~/static/icon/day.svg'),
      night: require('~/static/icon/night.svg'),
      userInfoDay: require('~/static/icon/userInfoDay.svg'),
      userInfoNight: require('~/static/icon/userInfoNight.svg'),
    };
  },
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
    }),
  },
  methods: {
    dayModeHandler() {
      this.$emit('update');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.clickArea {
  width: 48px;
  height: 48px;
}

.v-btn {
  height: 48px !important;
  padding: 0px !important;
}

@media all and (min-width: 1264px) {
  .container {
    max-width: 1880px;
    max-height: 116px;
    height: 116px;
  }
  .pangoLogo {
    width: 170px;
    height: 56px;
    margin-left: 68px;
  }
  .iconArea {
    width: 36px;
    height: 36px;
    position: absolute;
  }
  .nightDayMargin {
    margin-right: 32px;
  }
  .userInfoMargin {
    margin-right: 62px;
  }
}

@media all and (min-width: 960px) and (max-width: 1263px) {
  .container {
    max-width: 932px;
    max-height: 116px;
    height: 116px;
  }
  .pangoLogo {
    width: 170px;
    height: 56px;
    margin-left: 32px;
  }
  .iconArea {
    width: 36px;
    height: 36px;
    position: absolute;
  }
  .nightDayMargin {
    margin-right: 16px;
  }
  .userInfoMargin {
    margin-right: 26px;
  }
}

@media all and (max-width: 959px) {
  .container {
    max-width: 932px;
    max-height: 48px;
    height: 48px;
  }
  .pangoLogo {
    width: 79px;
    height: 26px;
    margin-left: 16px;
  }
  .iconArea {
    width: 24px;
    height: 24px;
    position: absolute;
  }
  .userInfoMargin {
    margin-right: 4px;
  }
}
</style>
