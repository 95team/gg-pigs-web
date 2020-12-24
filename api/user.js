import axios from 'axios';
import { baseApiUrl } from './index.js';

function getUser() {
  return axios.get(`${baseApiUrl}/api/v1/login-users`, { withCredentials: true });
}

export { getUser };
