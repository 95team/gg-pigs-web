<template>
  <!-- container -->
  <v-container fluid text-right>
    <!-- layout1 -->
    <v-layout class="divider">
      <v-flex>
        <v-divider :class="[dayMode ? 'border-light3' : 'border-dark2']" />
      </v-flex>
    </v-layout>

    <!-- layout2 -->
    <v-layout class="content">
      <v-flex :class="[dayMode ? 'text-light2' : ' text-dark3']">
        <span class="text">
          &copy; {{ new Date().getFullYear() }} Pigs95team, All rights reserved
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
    }),
  },
};
</script>

<style scoped>
/* Viewport: ~ sm */
@media all and (max-width: 959px) {
  .container {
    max-width: 900px;
    max-height: 56px;
    height: 56px;

    padding-left: 30px;
    padding-right: 30px;

    font-size: 10px;
  }
  .divider {
    margin-bottom: 16px;
  }
  .content .text {
    margin-right: 12px;
  }
}

/* Viewport: md */
@media all and (min-width: 960px) and (max-width: 1263px) {
  .container {
    max-width: 932px;
    max-height: 108px;
    height: 108px;

    font-size: 18px;
  }
  .divider {
    margin-bottom: 32px;
  }
  .content .text {
    margin-right: 32px;
  }
}

/* Viewport: lg ~ */
@media all and (min-width: 1264px) {
  .container {
    max-width: 1880px;
    max-height: 108px;
    height: 108px;

    padding-left: 88px;
    padding-right: 88px;

    font-size: 18px;
  }
  .divider {
    margin-bottom: 32px;
  }
  .content .text {
    margin-right: 32px;
  }
}
</style>
