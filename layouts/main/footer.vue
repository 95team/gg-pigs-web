<template>
  <v-container fluid pa-0 class="main-font">
    <v-row no-gutters>
      <v-divider :class="[dayMode ? 'border-light3' : 'border-dark2']" />
    </v-row>

    <v-row
      no-gutters
      align="center"
      justify="end"
      class="contents"
      :class="[dayMode ? 'text-light2' : 'text-dark3']"
    >
      <v-col cols="auto">
        &copy; {{ new Date().getFullYear() }} Pigs95team, Inc. All rights reserved
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['dayMode']),
  },
};
</script>

<style scoped>
.main-font {
  font-family: 'Spoqa Han Sans Neo', sans-serif;
}

/* Viewport: lg ~ */
@media all and (min-width: 1264px) {
  .contents {
    height: 124px;
    max-width: 1564px;
    margin: auto;
    padding-right: 32px;
    font-size: 14px;
  }
}

/* Viewport: md */
@media all and (min-width: 600px) and (max-width: 1263px) {
  .contents {
    height: 124px;
    max-width: 808px;
    margin: auto;
    padding-right: 32px;
    font-size: 14px;
  }
}

/* Viewport: ~ sm */
@media all and (max-width: 599px) {
  .contents {
    height: 92px;
    max-width: 552px;
    margin: auto;
    padding-right: 8px;
    font-size: 14px;
  }
}
</style>
