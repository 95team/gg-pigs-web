import PosterRequest from '~/api/posterRequest.js';

const posterRequest = new PosterRequest('posterRequest');

export const state = function() {
  return { list: [] };
};

export const mutations = {
  SET_LIST(state, payload) {
    state.list = payload;
  },
};

export const actions = {
  async FETCH_LIST(context) {
    const response = await posterRequest.getPosterRequestList();
    context.commit('SET_LIST', response.data.data);
  },
  async FETCH_LIST_V2(context, params) {
    const response = await posterRequest.getPosterRequestListV2(params);
    context.commit('SET_LIST', response.data.data);
  },
  async UPDATE_ITEM(context, payload) {
    const itemId = payload.itemId;
    const data = payload.payload;
    const params = payload.params;
    await posterRequest.updatePosterRequest(itemId, data, params);
  },
};

export const getters = {
  fetchPosterRequests(state) {
    return state.list;
  },
};
