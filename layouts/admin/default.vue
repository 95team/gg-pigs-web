<template>
  <v-app>
    <v-container fluid pa-0>
      <v-row no-gutters>
        <admin-header></admin-header>
      </v-row>

      <v-row no-gutters>
        <v-col cols="2">
          <admin-sidebar></admin-sidebar>
        </v-col>
        <v-col cols="10">
          <nuxt />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import AdminHeader from '~/layouts/admin/header.vue';
import AdminSidebar from '~/layouts/admin/sidebar.vue';

export default {
  components: {
    AdminHeader,
    AdminSidebar,
  },
};
</script>

<style scoped></style>
