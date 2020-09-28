<template>
  <v-app>
    <owner-header></owner-header>
    <nuxt />
    <owner-footer></owner-footer>
  </v-app>
</template>

<script>
import OwnerHeader from '~/layouts/ownerHeader.vue';
import OwnerFooter from '~/layouts/ownerFooter.vue';

export default {
  components: {
    OwnerHeader,
    OwnerFooter,
  },
};
</script>

<style></style>
