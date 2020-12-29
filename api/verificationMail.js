import axios from 'axios';
import { baseApiUrl } from './index.js';

function requestVerificationMail(payload) {
  return axios.post(`${baseApiUrl}/api/v1/verification-mails`, payload, {
    timeout: 10000,
  });
}

export { requestVerificationMail };
