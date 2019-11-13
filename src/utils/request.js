import axios from 'axios'
import { getToken } from './token';
const service = axios.create({
  baseURL: 'https://delivery-service-back.herokuapp.com/',
  timeout: 2000
});

service.interceptors.request.use(config => {
  if(getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
  }
  return config
})

export default service
