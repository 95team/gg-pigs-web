export const state = function() {
  return {
    posterType: '',
    startedDate: '',
    imgHeight: '',
    posterUrl: null,
    isShowApply: false,
  };
};

export const mutations = {
  SEND_INFORMATION(state, payload) {
    state.posterType = payload.posterType;
    state.startedDate = payload.startedDate;
    state.finishedDate = payload.finishedDate;
  },
  PREVIEW_POSTER(state, payload) {
    if (state.posterUrl) {
      URL.revokeObjectURL(state.posterUrl);
    }
    const posterImage = payload.target.files[0];
    state.posterUrl = URL.createObjectURL(posterImage);
  },
  FETCH_IMG_HEIGHT(state) {
    if (state.posterType === 'R1') {
      state.imgHeight = '250px';
    } else if (state.posterType === 'R2') {
      state.imgHeight = '516px';
    } else if (state.posterType === 'R3') {
      state.imgHeight = '782px';
    }
  },
  SHOW_APPLICATION(state) {
    state.isShowApply = !state.isShowApply;
  },
};
