<template>
  <v-app :class="[dayMode ? 'background-light5' : 'background-dark1']">
    <main-header />
    <nuxt />
    <main-footer />
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import MainHeader from '~/layouts/main/header.vue';
import MainFooter from '~/layouts/main/footer.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
    }),
  },
  methods: {
    ...mapMutations({
      toggleDayMode: 'TOGGLE_DAYMODE',
    }),
  },
};
</script>
