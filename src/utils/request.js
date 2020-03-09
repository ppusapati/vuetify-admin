import axios from 'axios';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import store from '@/store';
import router from '@/router/index';
import errorCode from '@/const/errorCode';

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
  showSpinner: false
});

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    NProgress.start(); // start progress bar
    const isToken = (config.headers || {}).isToken === false;
    const token = store.getters.token;
    if (token && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + token;// token
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    NProgress.done();
    const res = response.data;

    const status = Number(res.status) || 200;
    const message = res.data.msg || errorCode[status] || errorCode['default'];
    if (status === 401) {
      store.dispatch('user/logout').then(() => {
        router.push({ path: '/login' });
      });
      return;
    }

    if (status !== 200 || res.data.code === 1) {
      // Message({
      //   message: message,
      //   type: 'error'
      // });
      return Promise.reject(new Error(message));
    }

    return res;
  },
  error => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default service;
