import axios from 'axios'
import { getToken } from './token';
const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000
});

service.interceptors.request.use(config => {
  if(getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
  }
  return config
})

export default service
