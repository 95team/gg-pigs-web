<template>
  <v-container fluid pa-0>
    <!-- 분할선 -->
    <v-layout>
      <v-divider class="border-white-two"></v-divider>
    </v-layout>

    <!-- footer -->
    <v-layout class="content">
      <v-flex d-flex justify-end class="text-greyish">
        <span class="text rigthMargin32">
          &copy; {{ new Date().getFullYear() }} PangGo, Inc. All rights reserved
        </span>
        <span class="text rigthMargin32">개인정보 처리방침</span>
        <span class="text rigthMargin32">이용 약관</span>
        <span class="text">사이트맵</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 108px;
}
.content {
  margin-top: 32px;
  margin-left: 352px;
  margin-right: 352px;
}
.text {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
}
.rigthMargin32 {
  margin-right: 32px;
}
</style>
