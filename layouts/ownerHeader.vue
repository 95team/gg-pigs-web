<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="logoArea">
      <v-row no-gutters align="center">
        <div>
          <img src="../static/image/pangoLogoDay.png" alt="광고돼지" width="200px" height="66px" />
        </div>
        <v-spacer></v-spacer>
        <div>
          <button type="button" class="clickArea" style="float: left; margin-right: 32px">
            <v-img :src="day" class="iconArea"></v-img>
          </button>
          <button type="button" class="clickArea">
            <v-img :src="close" class="iconArea"></v-img>
          </button>
        </div>
      </v-row>
    </div>

    <div class="menuArea">
      <v-row no-gutters align="end">
        <nuxt-link to="/ownerApply1">
          <button class="menu selected">
            광고 신청
          </button>
        </nuxt-link>
        <button class="menu text-light2">광고 조회</button>
        <button class="menu text-light2">문의하기</button>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pangoLogoDay: require('../static/image/pangoLogoDay.png'),
      day: require('../static/icon/day.svg'),
      night: require('../static/icon/night.svg'),
      close: require('../static/icon/close.svg'),
    };
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
}
.logoArea {
  display: flex;
  height: 130px;
  border-bottom: solid 1px var(--light3);
  margin: 0 18.3%;
}
.menuArea {
  display: flex;
  min-height: 100px;
  margin: 0 18.3%;
}
.clickArea {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
}
.iconArea {
  width: 36px;
  height: 36px;
  position: absolute;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 100px;
  font-size: 24px;
  margin-right: 1.7%;
}
.selected {
  border-bottom: solid 4px var(--light1);
}
</style>
