export const state = () => {
  return {
    isShowSignIn: false,
    isShowSignUp: false,
  };
};

export const mutations = {
  TOGGLE_SIGNIN(state) {
    state.isShowSignIn = !state.isShowSignIn;
  },
  TOGGLE_SIGNUP(state) {
    state.isShowSignUp = !state.isShowSignUp;
  },
};
