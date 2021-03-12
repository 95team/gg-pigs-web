<template>
  <v-container>
    <v-row no-gutters align="center">
      <v-col cols="auto">
        <nuxt-link :to="{ name: 'index' }">
          <v-img v-if="dayMode" :src="logoDay" class="logo"></v-img>
          <v-img v-else :src="logoNight" class="logo"></v-img>
        </nuxt-link>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="auto">
        <v-row no-gutters>
          <v-col class="header-icon-margin">
            <v-btn text height="36px" min-width="36px" @click="toggleDayMode">
              <v-img v-if="dayMode" :src="day" class="header-icon"></v-img>
              <v-img v-else :src="night" class="header-icon"></v-img>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn text height="36px" min-width="36px" :to="{ name: 'apply' }">
              <v-img v-if="dayMode" :src="userInfoDay" class="header-icon"></v-img>
              <v-img v-else :src="userInfoNight" class="header-icon"></v-img>
            </v-btn>
          </v-col>
          <!-- <v-col>
            <v-btn text height="48px" min-width="48px">
              <v-img v-if="dayMode" :src="lookupDay" max-height="24px" max-width="30px"></v-img>
              <v-img v-else :src="lookupNight" max-height="24px" max-width="30px"></v-img>
            </v-btn>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'logoDay',
      'logoNight',
      'day',
      'night',
      'userInfoDay',
      'userInfoNight',
      'lookupDay',
      'lookupNight',
      'dayMode',
    ]),
  },
  methods: {
    ...mapMutations({
      toggleDayMode: 'TOGGLE_DAYMODE',
    }),
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.v-btn {
  padding: 0 !important;
}

@media all and (min-width: 1264px) {
  .container {
    max-width: 1564px;
    height: 80px;
    padding: 0 32px 0 32px;
  }
  .logo {
    max-width: 100px;
  }
  .header-icon {
    max-width: 32px;
  }
  .header-icon-margin {
    margin-right: 16px;
  }
}

@media all and (min-width: 600px) and (max-width: 1263px) {
  .container {
    max-width: 808px;
    height: 60px;
    padding: 0 32px 0 32px;
  }
  .logo {
    max-width: 62px;
  }
  .header-icon {
    max-width: 20px;
  }
}

@media all and (max-width: 599px) {
  .container {
    max-width: 552px;
    height: 60px;
    padding: 0 8px 0 8px;
  }
  .logo {
    max-width: 62px;
  }
  .header-icon {
    max-width: 20px;
  }
}
</style>
