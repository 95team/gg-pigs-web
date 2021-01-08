import axios from 'axios';
import { baseApiUrl } from './index.js';

function getLoginUser() {
  return axios.get(`${baseApiUrl}/api/v1/login-users`, { withCredentials: true });
}

export { getLoginUser };
