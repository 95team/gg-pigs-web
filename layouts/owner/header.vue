<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="logo-area">
      <v-row no-gutters align="center">
        <div>
          <img src="~/static/image/pangoLogoDay.png" alt="광고돼지" width="200px" height="66px" />
        </div>
        <v-spacer></v-spacer>
        <div>
          <button type="button" class="click-area" style="float: left; margin-right: 32px">
            <v-img :src="day" class="icon-area"></v-img>
          </button>
          <button type="button" class="click-area">
            <v-img :src="close" class="icon-area"></v-img>
          </button>
        </div>
      </v-row>
    </div>

    <div class="menu-area">
      <v-tabs height="100px" color="black" slider-color="black" align-with-title>
        <v-tab class="tab-item" :ripple="false" replace to="/ownerApply1">광고 신청</v-tab>
        <v-tab class="tab-item" :ripple="false" replace :to="ownerPath">광고 조회</v-tab>
        <v-tab class="tab-item" disabled>문의하기</v-tab>
      </v-tabs>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { getLoginUser } from '~/api/user.js';

export default {
  data() {
    return {
      menus: [{ title: '광고 신청' }, { title: '광고 조회' }, { title: '문의하기' }],
      pangoLogoDay: require('~/static/image/pangoLogoDay.png'),
      day: require('~/static/icon/day.svg'),
      night: require('~/static/icon/night.svg'),
      close: require('~/static/icon/close.svg'),
    };
  },
  computed: {
    ...mapGetters({
      isLogin: 'isLogin',
      loginUser: 'loginUser',
    }),
    ownerPath() {
      return this.isLogin && this.loginUser ? '/owner' : '/owner/login';
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    init() {
      const vm = this;
      vm.checkLogin();
    },
    checkLogin() {
      /**
       * [Note]
       * 1. '로그인 상태((isLogin)', '로그인 한 사용자 정보(loginUser)' 를 기준으로 로그인 상태를 체크합니다.
       * 2. 로그인이 되어 있지 않다면, 로그인 상태를 판별할 수 있는 API를 호출하여 로그인 상태를 갱신합니다.
       */

      const vm = this;

      if (!vm.isLogin || vm.loginUser) {
        getLoginUser()
          .then(response => {
            if (response.data.data) {
              const payload = {
                isLogin: true,
                loginUser: response.data.data,
              };
              vm.$store.commit('LOGIN_SUCCESS', payload);
            }
          })
          .catch(() => {});
      }
    },
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
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
}
.logo-area {
  display: flex;
  height: 130px;
  border-bottom: solid 1px var(--light3);
  margin: 0 18.3%;
}
.menu-area {
  display: flex;
  min-height: 100px;
  margin: 0 18.3%;
}
.click-area {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
}
.icon-area {
  width: 36px;
  height: 36px;
  position: absolute;
}
.tab-item {
  margin-right: 1.7%;

  width: 176px;
  height: 100px;

  font: normal normal normal 24px NotoSansCJKkr;

  letter-spacing: normal;
  color: var(--black);
}
</style>
