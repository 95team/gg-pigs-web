<template>
  <div>
    <owner-header></owner-header>
    <nuxt />
    <owner-footer></owner-footer>
  </div>
</template>

<script>
import OwnerHeader from '~/components/OwnerHeader.vue';
import OwnerFooter from '~/components/OwnerFooter.vue';

export default {
  name: 'OwnerDefault',
  components: {
    OwnerHeader,
    OwnerFooter,
  },
  created() {},
};
</script>

<style>
body {
  font-family: 'Spoqa Han Sans Neo', sans-serif;
}
</style>
