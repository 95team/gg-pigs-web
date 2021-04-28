<template>
  <!-- <v-container fluid pa-0 class="notoSansFont">
    <v-row no-gutters align="center" class="content">
      <v-col cols="auto" class="mr64">
        <nuxt-link to="/">
          <v-img :src="pangoLogoDay" max-height="66px" max-width="200px"></v-img>
        </nuxt-link>
      </v-col>

      <v-col cols="auto">
        <v-tabs height="122px" color="black" slider-color="var(--primary2)">
          <v-tab class="tab-item" :ripple="false" replace to="/apply/step1">광고 신청</v-tab>
          <v-tab class="tab-item" :ripple="false" replace :to="ownerPath">광고 조회</v-tab>
          <v-tab class="tab-item" disabled>문의하기</v-tab>
        </v-tabs>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="auto" class="mr32">
        <v-btn text max-width="48px" min-width="36px" height="48px" :ripple="false">
          <v-img :src="day" max-height="36px" max-width="36px"></v-img>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn text max-width="48px" min-width="36px" height="48px" :ripple="false">
          <v-img :src="close" max-height="36px" max-width="36px"></v-img>
        </v-btn>
      </v-col>
    </v-row>
  </v-container> -->
  <v-app-bar
    flat
    :style="{
      backgroundColor: [dayMode ? 'white' : 'var(--grey-9)'],
    }"
    justify="center"
  >
    <v-row justify="center">
      <div class="header">
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <img :src="[dayMode ? logoDay : logoNight]" alt="광고돼지" class="logo" />
          </v-col>
          <v-col cols="auto" offset="1">
            <v-tabs hide-slider :color="tabsColor" background-color="transparent">
              <v-tab v-for="menu in menus" :key="menu">
                {{ menu.title }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="auto" class="icons">
            <v-btn text plain :ripple="false" @click="toggleDayMode">
              <img :src="[dayMode ? day : night]" alt="다크모드" />
            </v-btn>
            <v-btn text plain :ripple="false">
              <img :src="[dayMode ? dashboardDefault : dashboardDark]" alt="포스터" />
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getLoginUser } from '~/api/user.js';

export default {
  data() {
    return {
      menus: [{ title: '광고 신청' }, { title: '광고 조회' }, { title: '문의하기' }],
      logoDay: '/image/pangoLogoDay.png',
      logoNight: '/image/pangoLogoNight.png',
      day: '/icon/day.svg',
      night: '/icon/night.svg',
      close: require('~/static/icon/close.svg'),
      dashboardDefault: '/icon/dashboardDefault.svg',
      dashboardDark: '/icon/dashboardDark.svg',
    };
  },
  computed: {
    ...mapGetters(['isLogin', 'loginUser', 'dayMode']),
    ownerPath() {
      const admin = 'ROLE_ADMIN';
      return this.isLogin && this.loginUser
        ? this.loginUser.role === admin
          ? '/admin/lists'
          : '/owner'
        : '/owner/login';
    },
    pangoLogoDay() {
      return this.LogoDay;
    },

    tabsColor() {
      return this.dayMode ? 'var(--grey-9)' : 'var(--grey-0)';
    },

    tabColor() {
      return this.dayMode ? 'var(--grey-7)' : 'var(--grey-4)';
    },

    tabsBackgroundColor() {
      return this.dayMode ? 'white' : 'var(--grey-9)';
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
    ...mapMutations({
      toggleDayMode: 'TOGGLE_DAYMODE',
    }),
  },
};
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid var(--grey-3);
}

.header {
  width: 78vw;
}

.logo {
  width: 96px;
  height: 29px;
}

.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}

.container {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
}

.content {
  margin: 0 18.3%;
}

.tab-item {
  font-size: 18px;
  font-weight: bold;

  width: 148px;

  letter-spacing: normal;
}

.icons {
  margin-left: auto;
}
</style>
