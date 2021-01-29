import axios from 'axios';
import { baseApiUrl } from './index.js';

export default class {
  getPosterList() {
    return axios.get(`${baseApiUrl}/api/v1/posters`);
  }

  getPosterListV2(payload) {
    return axios.get(`${baseApiUrl}/api/v2/posters`, { params: payload });
  }
}

function getPoster(posterId) {
  return axios.get(`${baseApiUrl}/api/v1/posters/${posterId}`);
}

export { getPoster };
