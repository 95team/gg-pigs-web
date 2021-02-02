export const state = function() {
  return {
    /** '다크모드' 관련 변수입니다. */
    dayMode: true,

    /** '로그인 사용자' 관련 변수입니다. */
    isLogin: false,
    loginUser: null,

    /** '이미지' 관련 변수입니다. */
    logoDay: require('~/static/image/pangoLogoDay.png'),
    logoNight: require('~/static/image/pangologoNight.png'),
    day: require('~/static/icon/day.svg'),
    night: require('~/static/icon/night.svg'),
    userInfoDay: require('~/static/icon/userInfoDay.svg'),
    userInfoNight: require('~/static/icon/userInfoNight.svg'),
    lookupDay: require('~/static/icon/lookupDay.svg'),
    lookupNight: require('~/static/icon/lookupNight.svg'),
  };
};

export const mutations = {
  /** '다크모드' 관련 mutation 입니다. */
  TOGGLE_DAYMODE(state) {
    state.dayMode = !state.dayMode;
  },

  /** '로그인 사용자' 관련 mutation 입니다. */
  LOGIN_SUCCESS(state, payload) {
    state.isLogin = payload.isLogin;
    state.loginUser = payload.loginUser;
  },
};

export const actions = {};

export const getters = {
  /** '다크모드' 관련 getter 입니다. */
  dayMode(state) {
    return state.dayMode;
  },

  /** '로그인 사용자' 관련 getter 입니다. */
  isLogin(state) {
    return state.isLogin;
  },
  loginUser(state) {
    return state.loginUser;
  },

  /** '이미지' 관련 getter 입니다. */
  logoDay(state) {
    return state.logoDay;
  },
  logoNight(state) {
    return state.logoNight;
  },
  day(state) {
    return state.day;
  },
  night(state) {
    return state.night;
  },
  userInfoDay(state) {
    return state.userInfoDay;
  },
  userInfoNight(state) {
    return state.userInfoNight;
  },
  lookupDay(state) {
    return state.lookupDay;
  },
  lookupNight(state) {
    return state.lookupNight;
  },
};
