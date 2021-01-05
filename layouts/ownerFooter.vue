<template>
  <v-container fluid pa-0 class="notoSansFont text-light2">
    <div class="content">
      <span style="margin-right: var(--spacing-lg)">
        &copy; {{ new Date().getFullYear() }} PangGo, Inc. All rights reserved
      </span>
      <span style="margin-right: var(--spacing-lg)">
        개인정보 처리방침
      </span>
      <span style="margin-right: var(--spacing-lg)">
        이용 약관
      </span>
      <span>
        사이트맵
      </span>
    </div>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 108px;
  margin: 0 18.3%;
}
</style>
