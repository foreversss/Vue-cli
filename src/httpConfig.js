/**
*  1.axios配置  2.请求拦截器 3.接口报错统一处理
*/


import Vue from 'vue';
import { Message } from 'element-ui';
//导入axios
import axios from 'axios'
//路由
import router from './router'


//配置请求根目录
axios.defaults.baseURL = 'https://localhost:44355/api/';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// axios初始化：延迟时间，主路由地址,是否允许跨域

let instance = axios.create({
  //默认请求地址
  baseURL: axios.defaults.baseURL,
  // 设置网络超时
  timeout: 10000
  //开启跨域并携带cookie,如果接口并不接收cookie验证的话则不需要
  //withCredentials: true,
});

/**=========================设置拦截器======================== */

// 请求拦截器
instance.interceptors.request.use(config => {
  //如果请求的是登录或者注册 则不需要配置任何东西
  if (config.url == "Users/SignIn" || config.url == 'Users/Register') {

    return config;
  } else {
    //获取token
    let token = window.sessionStorage.getItem("token");


    //验证是否有值 如果没有则是token过期 或者没有登录
    if (token) {
      //配置 token 验证
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  }
}, error => {


  // 请求错误时
  return Promise.reject(error);
});


// 响应拦截器
instance.interceptors.response.use(response => {
  //响应数据
  const res = response.data;
  let resData = null;

  console.log(response.status);
  if (response.status === 200) {
    if (typeof res === "string") {
      resData = JSON.parse(res);
    } else {
      resData = res;
    }
    return resData;
  }
}, error => {

  if (error.response.status) {

    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。                
      case 401:
        Message.error({
          message: "请先登录!",
          duration: 1000
        });
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;

      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面                
      case 403:
        Message.error({
          message: "登录超时,请重新登录！",
          duration: 1000
        });
        // 清除token
        window.sessionStorage.removeItem('token');
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;

      // 404请求不存在
      case 404:
        Message.error
          ({
            message: "网络请求不存在",
            duration: 1000
          });
        break;
      // 其他错误，直接抛出错误提示
      default:
        Message.error({
          message: error.response.data.message,
          duration: 1500
        });
    }
    return Promise.reject(error.response);
  }
});


/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}



export default instance;






