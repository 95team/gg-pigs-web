export const state = function() {
  return {
    /** '다크모드' 관련 변수입니다. */
    dayMode: true,

    /** '이미지' 관련 변수입니다. */
    logoDay: require('~/static/image/pangoLogoDay.png'),
    logoNight: require('~/static/image/pangoLogoNight.png'),
    day: require('~/static/icon/day.svg'),
    night: require('~/static/icon/night.svg'),
    userInfoDay: require('~/static/icon/userInfoDay.svg'),
    userInfoNight: require('~/static/icon/userInfoNight.svg'),
    lookupDay: require('~/static/icon/lookupDay.svg'),
    lookupNight: require('~/static/icon/lookupNight.svg'),
    link: require('~/static/icon/link.svg'),
  };
};

export const mutations = {
  /** '다크모드' 관련 mutation 입니다. */
  TOGGLE_DAYMODE(state) {
    state.dayMode = !state.dayMode;
  },
};

export const actions = {};

export const getters = {
  /** '다크모드' 관련 getter 입니다. */
  dayMode(state) {
    return state.dayMode;
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
  link(state) {
    return state.link;
  },
};
