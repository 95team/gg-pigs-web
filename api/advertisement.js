import axios from 'axios';
import { baseApiUrl } from './index.js';

export default class {
  getAdvertisementList() {
    return axios.get(`${baseApiUrl}/advertisements`);
  }
}
