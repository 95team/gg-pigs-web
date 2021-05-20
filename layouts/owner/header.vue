<template>
  <v-container fluid pa-0>
    <v-row no-gutters justify="center" align="center" class="header-area">
      <v-col cols="auto" class="nav-bar-area">
        <div class="btn-area">
          <div class="icon-area">
            <img :src="[dayMode ? menuDay : menuNight]" alt="메뉴" />
          </div>
        </div>
      </v-col>

      <v-col cols="auto" style="margin-right: 60px" align="center" class="logo-area">
        <nuxt-link :to="{ name: 'index' }">
          <img :src="[dayMode ? logoDay : logoNight]" alt="광고돼지" />
        </nuxt-link>
      </v-col>

      <v-col class="menu-area">
        <v-tabs hide-slider background-color="transparent" active-class="active-tab">
          <v-tab
            :ripple="false"
            replace
            :to="ownerPath"
            :style="{ color: [dayMode ? 'var(--grey-7)' : 'var(--grey-4)'] }"
          >
            광고 조회
          </v-tab>
          <v-tab
            :ripple="false"
            replace
            to="/apply/step1"
            :style="{ color: [dayMode ? 'var(--grey-7)' : 'var(--grey-4)'] }"
            disabled
          >
            광고 신청
          </v-tab>
          <v-tab
            :ripple="false"
            disabled
            :style="{ color: [dayMode ? 'var(--grey-7)' : 'var(--grey-4)'] }"
          >
            문의하기
          </v-tab>
        </v-tabs>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="auto" class="service-area">
        <div class="btn-area">
          <div class="icon-area">
            <img :src="[dayMode ? day : night]" alt="다크모드" @click="toggleDayMode" />
          </div>
        </div>
        <div class="space-area"></div>
        <div class="btn-area">
          <div class="icon-area">
            <nuxt-link :to="{ name: 'index' }">
              <img :src="[dayMode ? dashboardDay : dashboardNight]" alt="대시보드" />
            </nuxt-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getLoginUser } from '~/api/user.js';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['dayMode', 'logoDay', 'logoNight', 'day', 'night']),
    ...mapGetters({
      dashboardDay: 'owner/dashboardDay',
      dashboardNight: 'owner/dashboardNight',
      menuDay: 'owner/menuDay',
      menuNight: 'owner/menuNight',
      ownerPath: 'owner/ownerPath',
    }),
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
              vm.$store.commit('owner/LOGIN_SUCCESS', payload);
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
img {
  display: block;
  width: 100%;
  cursor: pointer;
}

.container {
  border-bottom: solid 1px var(--grey-3);
}

.header-area {
  margin: 0 auto;
}

.service-area {
  display: flex;
}

.btn-area {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media all and (min-width: 1264px) {
  .header-area {
    max-width: 1200px;
    height: 80px;
  }

  .nav-bar-area {
    display: none;
  }

  .logo-area {
    width: 96px;
  }

  .btn-area {
    width: 32px;
    height: 32px;
  }

  .icon-area {
    width: 24px;
  }

  .space-area {
    width: 24px;
  }

  .v-tab {
    font: 18px 'Spoqa Han Sans Neo', sans-serif;
  }

  .active-tab {
    font-weight: bold;
  }
}

@media all and (min-width: 600px) and (max-width: 1263px) {
  .header-area {
    max-width: 770px;
    height: 60px;
  }

  .nav-bar-area {
    margin-right: 12px;
  }

  .logo-area {
    width: 62px;
  }

  .menu-area {
    display: none;
  }

  .btn-area {
    width: 48px;
    height: 48px;
  }

  .icon-area {
    width: 18px;
  }
}

@media all and (max-width: 599px) {
  .header-area {
    max-width: 562px;
    height: 60px;
  }

  .logo-area {
    width: 62px;
  }

  .menu-area {
    display: none;
  }

  .btn-area {
    width: 48px;
    height: 48px;
  }

  .icon-area {
    width: 18px;
  }
}
</style>
