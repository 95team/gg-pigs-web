export const state = function() {
  return {
    dayMode: true,
  };
};

export const mutations = {
  TOGGLE_DAYMODE(state) {
    state.dayMode = !state.dayMode;
  },
};

export const actions = {};

export const getters = {
  dayMode(state) {
    return state.dayMode;
  },
};
