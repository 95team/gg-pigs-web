import axios from 'axios';
import { internalApiUrl } from './index.js';

export default class {
  getPosterList() {
    return axios.get(`/api/v1/posters`);
  }

  getPosterListV2(payload) {
    return axios.get(`/api/v2/posters`, { params: payload });
  }

  getPosterListV2Internal(payload) {
    return axios.get(`${internalApiUrl}/api/v2/posters`, { params: payload });
  }
}

function getPoster(posterId) {
  return axios.get(`/api/v1/posters/${posterId}`);
}

export { getPoster };
