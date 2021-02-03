<template>
  <v-container fluid pa-0 class="noto-sans-font">
    <v-row>
      <v-divider :class="[dayMode ? 'border-light3' : 'border-dark2']" />
    </v-row>

    <v-row
      no-gutters
      align="center"
      justify="end"
      class="footer-height contents"
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
.noto-sans-font {
  font-family: 'Noto Sans KR', sans-serif;
}

/* Viewport: lg ~ */
@media all and (min-width: 1264px) {
  .contents {
    max-width: 1880px;
    margin: auto;
    padding-right: var(--spacing-xl);
    font-size: 18px;
  }
  .footer-height {
    height: 108px;
  }
}

/* Viewport: md */
@media all and (min-width: 960px) and (max-width: 1263px) {
  .contents {
    max-width: 932px;
    margin: auto;
    padding-right: var(--spacing-lg);
    font-size: 18px;
  }
  .footer-height {
    height: 108px;
  }
}

/* Viewport: ~ sm */
@media all and (max-width: 959px) {
  .contents {
    max-width: 932px;
    margin: auto;
    padding-right: var(--spacing-md);
    font-size: 10px;
  }
  .footer-height {
    height: 56px;
  }
}
</style>
