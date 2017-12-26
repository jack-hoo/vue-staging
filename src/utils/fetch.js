import axios from 'axios';
import {getToken} from '../utils/auth';
import store from '../vuex/store'
import Vue from 'vue'
import { Message } from 'element-ui'

let baseUrl = 'http://localhost:8787';
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 10000    // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  console.log("拦截器")
  if (store.getters.token) {
    config.headers['Authorization'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error + "request拦截器"); // for debug
  Promise.reject(error);
})
// respone拦截器
service.interceptors.response.use(
  response => {
    //code为非0是抛错 可结合自己业务进行修改
    const res = response.data;
    if (res.status != 0) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000,
        showClose: true
      });
      return Promise.reject('error');
    } else {
      return res;
    }
  },
  error => {
    console.log('err' + error);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000,
      showClose: true
    });
    return Promise.reject(error);
  }
)
export default service;

