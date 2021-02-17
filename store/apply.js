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
  PREVIEW_POSTER() {
    if (document.getElementById('imgFile').files[0]) {
      const oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById('imgFile').files[0]);

      oFReader.onload = function(oFREvent) {
        document.getElementById('uploadPreview').src = oFREvent.target.result;
      };
    }
  },
};
