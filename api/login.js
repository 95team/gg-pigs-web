import axios from 'axios';
import { baseApiUrl } from './index.js';

function loginApi(payload) {
  return axios.post(`${baseApiUrl}/api/v1/login`, payload, {
    timeout: 10000,
    withCredentials: true,
  });
}

export { loginApi };
