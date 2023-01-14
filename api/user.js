import axios from 'axios';

function getLoginUser() {
  return axios.get(`/api/v1/login-users`, { withCredentials: true });
}

export { getLoginUser };
