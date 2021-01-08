export const state = function() {
  return { user: null };
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export const actions = {};
