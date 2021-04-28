<template>
  <v-app
    :style="{
      backgroundColor: [dayMode ? 'white' : 'var(--grey-9)'],
    }"
  >
    <owner-header></owner-header>
    <nuxt />
    <owner-footer
      :style="{
        backgroundColor: [dayMode ? 'var(--grey-1)' : 'var(--grey-8)'],
      }"
    ></owner-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import OwnerHeader from '~/layouts/owner/header.vue';
import OwnerFooter from '~/layouts/owner/footer.vue';

export default {
  components: {
    OwnerHeader,
    OwnerFooter,
  },
  computed: {
    ...mapGetters(['dayMode']),
  },
};
</script>

<style></style>
