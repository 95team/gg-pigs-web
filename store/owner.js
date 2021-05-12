export const state = function() {
  return {
    /** '로그인 사용자' 관련 변수입니다. */
    isLogin: false,
    loginUser: null,

    /** '이미지' 관련 변수입니다. */
    dashboardDay: '/icon/dashboardDay.svg',
    dashboardNight: '/icon/dashboardNight.svg',
    menuDay: '/icon/menuDay.svg',
    menuNight: '/icon/menuNight.svg',
  };
};

export const mutations = {
  /** '로그인 사용자' 관련 mutation 입니다. */
  LOGIN_SUCCESS(state, payload) {
    state.isLogin = payload.isLogin;
    state.loginUser = payload.loginUser;
  },
};

export const actions = {};

export const getters = {
  /** '로그인 사용자' 관련 getter 입니다. */
  isLogin(state) {
    return state.isLogin;
  },
  loginUser(state) {
    return state.loginUser;
  },
  ownerPath(state) {
    const admin = 'ROLE_ADMIN';
    return state.isLogin && state.loginUser
      ? state.loginUser.role === admin
        ? '/admin/lists'
        : '/owner'
      : '/owner/login';
  },

  /** '이미지' 관련 getter 입니다. */
  dashboardDay(state) {
    return state.dashboardDay;
  },
  dashboardNight(state) {
    return state.dashboardNight;
  },
  menuDay(state) {
    return state.menuDay;
  },
  menuNight(state) {
    return state.menuNight;
  },
};
