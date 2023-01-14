import axios from 'axios';

function requestVerificationMail(payload) {
  return axios.post(`/api/v1/verification-mails`, payload, {
    timeout: 10000,
  });
}

export { requestVerificationMail };
