<template>
  <!-- container -->
  <v-container fluid text-right>
    <!-- layout1 -->
    <v-layout class="divider">
      <v-flex>
        <v-divider />
      </v-flex>
    </v-layout>

    <!-- layout2 -->
    <v-layout class="content">
      <v-flex>
        <span class="text greyish">
          &copy; {{ new Date().getFullYear() }} PangGo, Inc. All rights reserved
        </span>
        <span class="text greyish">개인정보 처리방침</span>
        <span class="text greyish">이용 약관</span>
        <span class="greyish">사이트맵</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
/* Viewport: ~ sm */
@media all and (max-width: 960px) {
  .container {
    max-width: 900px;
    max-height: 56px;
    height: 56px;

    padding-left: 30px;
    padding-right: 30px;

    font-size: 10px;
  }
  .divider {
    margin-bottom: 16px;
  }
  .content .text {
    margin-right: 12px;
  }
}

/* Viewport: md */
@media all and (min-width: 961px) and (max-width: 1264px) {
  .container {
    max-width: 932px;
    max-height: 108px;
    height: 108px;

    font-size: 18px;
  }
  .divider {
    margin-bottom: 32px;
  }
  .content .text {
    margin-right: 32px;
  }
}

/* Viewport: lg ~ */
@media all and (min-width: 1265px) {
  .container {
    max-width: 1880px;
    max-height: 108px;
    height: 108px;

    padding-left: 88px;
    padding-right: 88px;

    font-size: 18px;
  }
  .divider {
    margin-bottom: 32px;
  }
  .content .text {
    margin-right: 32px;
  }
}
</style>
