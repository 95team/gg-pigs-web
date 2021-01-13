export const state = function() {
  return {
    /** '다크모드' 관련 변수입니다. */
    dayMode: true,

    /** '로그인 사용자' 관련 변수입니다. */
    isLogin: false,
    loginUser: null,
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
};
