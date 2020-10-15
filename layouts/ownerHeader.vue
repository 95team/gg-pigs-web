<template>
  <v-container fluid pa-0>
    <!-- 로고 -->
    <v-layout class="logoLayout" align-center>
      <v-flex>
        <v-img :src="pangoLogoDay" class="logoArea"></v-img>
      </v-flex>
      <v-flex d-flex justify-end>
        <v-btn id="btn1" text><v-img :src="day" class="iconArea"></v-img></v-btn>
        <v-btn id="btn2" text><v-img :src="close" class="iconArea"></v-img></v-btn>
      </v-flex>
    </v-layout>

    <!-- 분할선 -->
    <v-layout>
      <v-divider class="border-white-two"></v-divider>
    </v-layout>

    <!-- 메뉴 -->
    <v-layout class="menuLayout" align-center>
      <div id="menu1" class="menu">
        <div class="menuMargin">
          광고 신청하기
        </div>
        <v-divider class="menuSelected"></v-divider>
      </div>
      <div id="menu2" class="menu text-greyish">문의하기</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pangoLogoDay: require('../static/image/pangoLogoDay.png'),
      day: require('../static/icon/day.svg'),
      close: require('../static/icon/close.svg'),
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1920px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
}
.layout {
  margin-left: 336px;
  margin-right: 336px;
}
.logoLayout {
  height: 130px;
  padding-left: 16px;
}
.menuLayout {
  height: 100px;
}
.menu {
  width: 176px;
  height: 68px;
  margin-top: 32px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  text-align: center;
}
#menu1 {
  margin-left: 16px;
}
#menu2 {
  margin-left: 32px;
}
.iconArea {
  width: 36px;
  height: 36px;
  position: absolute;
}
.v-btn {
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
}
#btn1 {
  margin-right: 32px;
}
#btn2 {
  margin-right: 16px;
}
.logoArea {
  width: 200px;
  height: 66px;
}
.v-divider {
  border: solid 1px;
}
.menuMargin {
  margin-bottom: 28px;
}
.menuSelected {
  border: solid 2px;
}
</style>
