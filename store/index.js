export const state = function() {
  return {
    /** '이미지' 관련 변수입니다. */
    // main header component
    lightMainLogo: require('~/assets/icn/light/main-logo.svg'),
    darkMainLogo: require('~/assets/icn/dark/main-logo.svg'),
    lightThemeMode: require('~/assets/icn/light/theme-mode.svg'),
    darkThemeMode: require('~/assets/icn/dark/theme-mode.svg'),
    lightApply: require('~/assets/icn/light/apply.svg'),
    darkApply: require('~/assets/icn/dark/apply.svg'),

    // poster component
    lightEmptyPoster: require('~/assets/icn/light/empty-poster.svg'),
    darkEmptyPoster: require('~/assets/icn/dark/empty-poster.svg'),
    lightEmptyPosterHover: require('~/assets/icn/light/empty-poster-hover.svg'),
    darkEmptyPosterHover: require('~/assets/icn/dark/empty-poster-hover.svg'),
    btnSiteUrl: require('~/assets/icn/btn-site-url.svg'),
    lightPrevPage: require('~/assets/icn/light/prevPage.svg'),
    darkPrevPage: require('~/assets/icn/dark/prevPage.svg'),
    lightNextPage: require('~/assets/icn/light/nextPage.svg'),
    darkNextPage: require('~/assets/icn/dark/nextPage.svg'),
  };
};

export const mutations = {
  /** '다크모드' 관련 mutation 입니다. */
  TOGGLE_THEMEMODE() {
    if (this.$colorMode.preference === 'light') {
      this.$colorMode.preference = 'dark';
    } else {
      this.$colorMode.preference = 'light';
    }
  },
};

export const actions = {};

export const getters = {
  /** '이미지' 관련 getter 입니다. */
  // main header component
  lightMainLogo(state) {
    return state.lightMainLogo;
  },
  darkMainLogo(state) {
    return state.darkMainLogo;
  },
  lightThemeMode(state) {
    return state.lightThemeMode;
  },
  darkThemeMode(state) {
    return state.darkThemeMode;
  },
  lightApply(state) {
    return state.lightApply;
  },
  darkApply(state) {
    return state.darkApply;
  },

  // poster component
  lightEmptyPoster(state) {
    return state.lightEmptyPoster;
  },
  darkEmptyPoster(state) {
    return state.darkEmptyPoster;
  },
  lightEmptyPosterHover(state) {
    return state.lightEmptyPosterHover;
  },
  darkEmptyPosterHover(state) {
    return state.darkEmptyPosterHover;
  },
  btnSiteUrl(state) {
    return state.btnSiteUrl;
  },
  lightPrevPage(state) {
    return state.lightPrevPage;
  },
  darkPrevPage(state) {
    return state.darkPrevPage;
  },
  lightNextPage(state) {
    return state.lightNextPage;
  },
  darkNextPage(state) {
    return state.darkNextPage;
  },
};
