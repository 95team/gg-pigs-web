import axios from 'axios';

export default class {
  getPosterRequestList() {
    return axios.get(`/api/v1/poster-requests`);
  }

  getPosterRequestListV2(params) {
    return axios.get(`/api/v2/poster-requests`, { params });
  }

  updatePosterRequest(itemId, payload, params) {
    return axios.put(`/api/v1/poster-requests/${itemId}`, payload, {
      params,
      withCredentials: true,
    });
  }
}
