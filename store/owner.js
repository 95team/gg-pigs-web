export const state = function() {
  return {
    /** '네비게이션' 관련 변수입니다. */
    tabs: [
      { name: '광고 조회', url: '/owner' },
      { name: '광고 신청', url: '/apply/step1' },
      { name: '문의하기', url: '/ask' },
    ],

    /** '로그인 사용자' 관련 변수입니다. */
    isLogin: false,
    loginUser: null,

    /** '이미지' 관련 변수입니다. */
    // header
    lightMainLogo: require('~/assets/icn/light/main-logo.svg'),
    lightTheme: require('~/assets/icn/light/theme.svg'),
    lightPoster: require('~/assets/icn/light/poster.svg'),
    darkMainLogo: require('~/assets/icn/dark/main-logo.svg'),
    darkTheme: require('~/assets/icn/dark/theme.svg'),
    darkPoster: require('~/assets/icn/dark/poster.svg'),
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
  // header
  lightMainLogo(state) {
    return state.lightMainLogo;
  },
  lightTheme(state) {
    return state.lightTheme;
  },
  lightPoster(state) {
    return state.lightPoster;
  },
  darkMainLogo(state) {
    return state.darkMainLogo;
  },
  darkTheme(state) {
    return state.darkTheme;
  },
  darkPoster(state) {
    return state.darkPoster;
  },
};
