import axios from 'axios';
import { baseApiUrl } from './index.js';

export default class {
  getPosterRequestList() {
    return axios.get(`${baseApiUrl}/api/v1/poster-requests`);
  }

  getPosterRequestListV2(payload) {
    return axios.get(`${baseApiUrl}/api/v2/poster-requests`, { params: payload });
  }
}
