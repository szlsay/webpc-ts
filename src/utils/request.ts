import axios from 'axios'
import { getToken } from './ls'
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    const token = getToken().token
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

request.interceptors.response.use(
  (res) => res,
  (e) => {
    return Promise.reject(e)
  }
)

export default request
