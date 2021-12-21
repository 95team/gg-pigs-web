export const state = function() {
  return {
    /** '다크모드' 관련 변수입니다. */
    isDark: false,

    /** '이미지' 관련 변수입니다. */
    logoDay: require('~/static/image/pangoLogoDay.png'),
    logoNight: require('~/static/image/pangoLogoNight.png'),
    day: require('~/static/icon/day.svg'),
    night: require('~/static/icon/night.svg'),
    userInfoDay: require('~/static/icon/userInfoDay.svg'),
    userInfoNight: require('~/static/icon/userInfoNight.svg'),
    lookupDay: require('~/static/icon/lookupDay.svg'),
    lookupNight: require('~/static/icon/lookupNight.svg'),
    ownerWebsiteLink: require('~/static/icon/owner-website-link.svg'),
    emptyPosterDefault: require('~/static/icon/empty-poster-default.svg'),
    emptyPosterHover: require('~/static/icon/empty-poster-hover.svg'),
    emptyPosterDefaultDark: require('~/static/icon/empty-poster-default-dark.svg'),
    emptyPosterHoverDark: require('~/static/icon/empty-poster-hover-dark.svg'),
  };
};

export const mutations = {
  /** '다크모드' 관련 mutation 입니다. */
  TOGGLE_THEMEMODE(state) {
    if (this.$colorMode.preference === 'light') {
      this.$colorMode.preference = 'dark';
      state.isDark = true;
    } else {
      this.$colorMode.preference = 'light';
      state.isDark = false;
    }
  },
};

export const actions = {};

export const getters = {
  /** '다크모드' 관련 getter 입니다. */
  isDark(state) {
    return state.isDark;
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
  ownerWebsiteLink(state) {
    return state.ownerWebsiteLink;
  },
  emptyPosterDefault(state) {
    return state.emptyPosterDefault;
  },
  emptyPosterHover(state) {
    return state.emptyPosterHover;
  },
  emptyPosterDefaultDark(state) {
    return state.emptyPosterDefaultDark;
  },
  emptyPosterHoverDark(state) {
    return state.emptyPosterHoverDark;
  },
};
