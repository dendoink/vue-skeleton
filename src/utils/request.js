import axios from 'axios'
import store from '@/store'
import {getToken} from '@/utils/auth'
import {StorageModel} from '../model';
import {CheckSum, Nonce, CurTime, AppKey} from './checkSum'
const process = require('process');

// import router from "../router" create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor (添加请求拦截器)
service
  .interceptors
  .request
  .use(config => {
    // 请求发送之前的处理
    if (store.getters.token) {
      // 让每个请求携带token-- ['Authorization']为自定义key
      config.headers['Authorization'] = getToken()
    }
    //
    return config
  }, error => {
    // 请求错误时的处理
    Promise.reject(error)
  })

// response interceptor
service
  .interceptors
  .response
  .use(response => response, error => {
    // Message({   message: error.message,   type: 'error',   duration: 5 * 1000 })
    return Promise.reject(error)
  })

const getApiUrl = (url) => {
  console.log(process.env.NODE_ENV);
  debugger;
  if (process.env.NODE_ENV === 'production') {
    return 'https://xxx.xxx.xxx.xx' + url
  }
  return url
}
export const request = option => {
  return new Promise((resolve) => {
    service(option).then(result => {
      resolve(result.data)
    }).catch(e => {
      e.errcode = e.response.status
      resolve(e);
    });
  });
};

export const createApi = (url, data, method = 'post', checkSum = true) => {
  // 判断是否需要 checksum 鉴权
  let checkSumParams = checkSum
    ? {
      AppKey,
      Nonce,
      CurTime,
      CheckSum
    }
    : {}
  let param = {
    url: getApiUrl(url),
    data,
    method,
    headers: {
      'Authorization': StorageModel.getAuthorization(),
      ...checkSumParams
    }
  };
  return request(param);
};

export default service
