<template>
  <v-container fluid>
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
          <v-col class="mr-2">
            <v-btn text height="48px" min-width="48px" @click="toggleDayMode">
              <v-img v-if="dayMode" :src="day" max-height="24px" max-width="24px"></v-img>
              <v-img v-else :src="night" max-height="24px" max-width="24px"></v-img>
            </v-btn>
          </v-col>
          <v-col class="mr-2">
            <v-btn text height="48px" min-width="48px" :to="{ name: 'apply' }">
              <v-img v-if="dayMode" :src="userInfoDay" max-height="24px" max-width="24px"></v-img>
              <v-img v-else :src="userInfoNight" max-height="24px" max-width="24px"></v-img>
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
    max-width: 1880px;
    height: 116px;
    padding: 0 60px 0 68px;
  }
  .logo {
    max-height: 56px;
    max-width: 170px;
  }
}

@media all and (min-width: 960px) and (max-width: 1263px) {
  .container {
    max-width: 932px;
    height: 116px;
    padding: 0 26px 0 32px;
  }
  .logo {
    max-height: 56px;
    max-width: 170px;
  }
}

@media all and (max-width: 959px) {
  .container {
    max-width: 932px;
    height: 54px;
    padding: 0 6px 0 16px;
  }
  .logo {
    max-height: 26px;
    max-width: 79px;
  }
}
</style>
