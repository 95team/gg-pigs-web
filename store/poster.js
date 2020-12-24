import Poster from '~/api/poster.js';

const poster = new Poster('poster');

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
    const response = await poster.getAPosterList();
    context.commit('SET_LIST', response.data.data);
  },
  async FETCH_LIST_V2(context, payload) {
    const response = await poster.getPosterListV2(payload);
    context.commit('SET_LIST', response.data.data);
  },
};

export const getters = {
  fetchPosters(state) {
    return state.list;
  },
};
