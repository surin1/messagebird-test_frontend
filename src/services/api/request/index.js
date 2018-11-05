import axios from 'axios';
import { apiUrl } from '../../../config';

const makeRequest = (method, url, data, contentType = 'application/json', params = {}) => {
  return axios({
    url, method, data,
		baseURL: apiUrl,
    params: params,
    timeout: 3000
  })
}

export default makeRequest;
