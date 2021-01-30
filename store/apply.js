export const state = function() {
  return {
    posterType: '',
    startedDate: '',
  };
};

export const mutations = {
  SEND_INFORMATION(state, payload) {
    state.posterType = payload.posterType;
    state.startedDate = payload.startedDate;
    state.finishedDate = payload.finishedDate;
  },
};
