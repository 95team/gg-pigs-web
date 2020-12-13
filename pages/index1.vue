<template>
  <!-- dayMode -->
  <v-app :class="[dayMode ? 'background-light5' : 'background-dark1']">
    <!-- Header -->
    <header-layout :day-mode="dayMode" @update="nightDayUpdate" />

    <!-- Content -->
    <content-layout :day-mode="dayMode" />

    <!-- Footer -->
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

<style></style>
