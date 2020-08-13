<template>
  <v-app dark>
    <!-- Header -->
    <header-layout />

    <!-- Content -->
    <v-content>
      <content-layout />
    </v-content>

    <!-- Footer -->
    <footer-layout />
  </v-app>
</template>

<script>
import HeaderLayout from '~/layouts/header.vue';
import FooterLayout from '~/layouts/footer.vue';
import ContentLayout from '~/layouts/content.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    ContentLayout,
  },
};
</script>
