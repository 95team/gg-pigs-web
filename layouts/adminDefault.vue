<template>
  <v-app>
    <admin-header></admin-header>
    <nuxt />
  </v-app>
</template>

<script>
import adminHeader from '~/layouts/adminHeader.vue';

export default {
  components: {
    adminHeader,
  },
};
</script>

<style></style>
