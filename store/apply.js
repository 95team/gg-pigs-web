const state = () => ({
  posterType: '',
  posterWidth: '',
  posterHeight: '',
  startedDate: '',
  finishedDate: '',
});

const getters = {
  getPosterType(state) {
    return state.posterType;
  },
  getPosterWidth(state) {
    return state.posterWidth;
  },
  getPosterHeight(state) {
    return state.posterHeight;
  },
  getStartedDate(state) {
    return state.startedDate;
  },
  getFinishedDate(state) {
    return state.finishedDate;
  },
};

const mutations = {
  addApplyInfo(state, payload) {
    state.posterType = payload.posterType;
    state.posterWidth = payload.posterWidth;
    state.posterHeight = payload.posterHeight;
    state.startedDate = payload.startedDate;
    state.finishedDate = payload.finishedDate;
  },
};

export default {
  state,
  getters,
  mutations,
};
