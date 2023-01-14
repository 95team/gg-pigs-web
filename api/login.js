import axios from 'axios';

function loginApi(payload) {
  return axios.post(`/api/v1/login`, payload, {
    timeout: 10000,
    withCredentials: true,
  });
}

export { loginApi };
