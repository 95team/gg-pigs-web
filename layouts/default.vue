<template>
  <!-- dayMode -->
  <v-app v-if="dayMode" class="background-white">
    <!-- Header -->
    <header-layout :day-mode="dayMode" @update="nightDayUpdate" />

    <!-- Content -->
    <content-layout />

    <!-- Footer -->
    <footer-layout :day-mode="dayMode" />
  </v-app>

  <!-- nightMode -->
  <v-app v-else class="background-dark-grey">
    <header-layout :day-mode="dayMode" @update="nightDayUpdate" />
    <content-layout />
    <footer-layout :day-mode="dayMode" />
  </v-app>
</template>

<script>
import HeaderLayout from '~/layouts/header.vue';
import ContentLayout from '~/layouts/content.vue';
import FooterLayout from '~/layouts/footer.vue';

export default {
  components: {
    HeaderLayout,
    ContentLayout,
    FooterLayout,
  },
  data() {
    return {
      dayMode: true,
    };
  },
  methods: {
    nightDayUpdate() {
      if (this.dayMode) {
        this.dayMode = false;
      } else {
        this.dayMode = true;
      }
    },
  },
};
</script>
