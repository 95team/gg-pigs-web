<template>
  <v-footer :fixed="isFooterFixed" class="pa-0 mb-11 background-white">
    <v-col class="text-center" cols="12" style="padding-left:88px; padding-right:88px">
      <v-divider />
    </v-col>
    <v-col class="text-right" cols="12">
      <span class="greyish mr-8">
        &copy; {{ new Date().getFullYear() }} PangGo, Inc. All rights reserved
      </span>
      <span class="greyish mr-8">개인정보 처리방침</span>
      <span class="greyish mr-8">이용 약관</span>
      <span class="greyish" style="margin-right:88px">사이트맵</span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      isFooterFixed: false,
    };
  },
};
</script>

<style></style>
