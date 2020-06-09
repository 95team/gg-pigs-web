<template>
  <v-footer :fixed="fixed" class="mb2-5 background-white">
    <v-col class="text-center" cols="12">
      <hr />
    </v-col>
    <v-col class="text-right" cols="12">
      <span class="greyish mr1">
        &copy; {{ new Date().getFullYear() }} PangGo, Inc. All rights reserved
      </span>
      <span class="greyish mr1">개인정보 처리방침</span>
      <span class="greyish mr1">이용 약관</span>
      <span class="greyish mr1">사이트맵</span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
    };
  },
};
</script>

<style></style>
