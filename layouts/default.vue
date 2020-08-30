<template>
  <v-app dark>
    <!-- Header -->
    <header-layout />

    <!-- Content -->
    <content-layout />

    <!-- Footer -->
    <footer-layout />
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
};
</script>
