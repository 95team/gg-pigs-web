import axios from 'axios';
import { baseApiUrl } from './index.js';

export default class {
  getPosterRequestList() {
    return axios.get(`${baseApiUrl}/api/v1/poster-requests`);
  }

  getPosterRequestListV2(params) {
    return axios.get(`${baseApiUrl}/api/v2/poster-requests`, { params });
  }

  updatePosterRequest(itemId, payload, params) {
    return axios.put(`${baseApiUrl}/api/v1/poster-requests/${itemId}`, payload, {
      params,
      withCredentials: true,
    });
  }
}
