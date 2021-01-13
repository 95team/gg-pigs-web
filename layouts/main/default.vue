<template>
  <v-app :class="[dayMode ? 'background-light5' : 'background-dark1']">
    <main-header @update="toggleDayMode" />
    <nuxt />
    <main-footer @update="toggleDayMode" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
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
    toggleDayMode() {
      this.$store.commit('TOGGLE_DAYMODE');
    },
  },
};
</script>
