import axios from 'axios';
import { baseApiUrl } from './index.js';

axios.defaults.withCredentials = true;

export default class {
  getAdvertisementList() {
    return axios.get(`${baseApiUrl}/advertisements`);
  }
}
