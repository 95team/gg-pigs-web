export const state = () => ({
  posterType: '',
  startedDate: '',
});

export const mutations = {
  sendInfo(state, payload) {
    state.posterType = payload.posterType;
    state.startedDate = payload.startedDate;
    state.finishedDate = payload.finishedDate;
  },
};
