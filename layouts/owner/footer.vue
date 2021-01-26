<template>
  <v-container fluid pa-0 class="notoSansFont">
    <v-row no-gutters align="center" class="content fz18 text-light2" style="height: 108px;">
      <v-spacer></v-spacer>
      <v-col cols="auto mr32">
        &copy; {{ new Date().getFullYear() }} PangGo, Inc. All rights reserved
      </v-col>
      <v-col cols="auto mr32"> 개인정보 처리방침 </v-col>
      <v-col cols="auto mr32"> 이용 약관 </v-col>
      <v-col cols="auto"> 사이트맵 </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.container {
  border-top: solid 1px var(--light3);
}
.content {
  margin: 0 18.3%;
}
</style>
