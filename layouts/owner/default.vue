<template>
  <v-app>
    <owner-header></owner-header>
    <nuxt />
    <owner-footer></owner-footer>
  </v-app>
</template>

<script>
import OwnerHeader from '~/layouts/owner/header.vue';
import OwnerFooter from '~/layouts/owner/footer.vue';

export default {
  name: 'LayoutsOwnerDefault',
  components: {
    OwnerHeader,
    OwnerFooter,
  },
  created() {},
};
</script>

<style></style>
