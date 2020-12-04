import axios from 'axios';
import { baseApiUrl } from './index.js';

function requestVerificationMail(payload) {
  return axios.post(`${baseApiUrl}/verification-mails`, payload, {
    timeout: 10000,
  });
}

export { requestVerificationMail };
