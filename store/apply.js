export const state = function() {
  return {
    posterType: '',
    startedDate: '',
    imgHeight: '',
    isAttached: false,
  };
};

export const mutations = {
  SEND_INFORMATION(state, payload) {
    state.posterType = payload.posterType;
    state.startedDate = payload.startedDate;
    state.finishedDate = payload.finishedDate;
  },
  PREVIEW_POSTER(state) {
    if (document.getElementById('imgFile').files[0]) {
      const oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById('imgFile').files[0]);

      oFReader.onload = function(oFREvent) {
        document.getElementById('uploadPreview').src = oFREvent.target.result;
      };
      state.isAttached = true;
    }
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
};
