export const state = function() {
  return {
    isLogin: false,
    loginUser: null,
  };
};

export const mutations = {
  LOGIN_SUCCESS(state, payload) {
    state.isLogin = payload.isLogin;
    state.loginUser = payload.loginUser;
  },
};

export const actions = {};

export const getters = {
  isLogin(state) {
    return state.isLogin;
  },
  loginUser(state) {
    return state.loginUser;
  },
};
