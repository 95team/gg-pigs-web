import axios from 'axios';
import { baseApiUrl } from './index.js';

function requestVerificationMail(payload) {
  return axios.post(`${baseApiUrl}/verification-mails`, payload);
}

export { requestVerificationMail };
