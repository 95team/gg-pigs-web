import Advertisement from '~/api/advertisement.js';

const advertisement = new Advertisement('advertisement');

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
    const response = await advertisement.getAdvertisementList();
    context.commit('SET_LIST', response.data.data);
  },
};

export const getters = {
  fetchAdvertisements(state) {
    return state.list;
  },
};
