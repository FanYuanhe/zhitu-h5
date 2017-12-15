// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import { Indicator, Toast, InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.prototype.axios = axios

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
    // 对响应错误做点什么
  Indicator.close();
  let errorMsg = error.response ? error.response.data.message : error.message;
  if (error.response.data.error_code === 401) {
    location.href = '#/login'
  } else {
    Toast({
      message: errorMsg,
      duration: 3000
    })
  }
  return Promise.reject(error);
});

const localData = localStorage.getItem('zt_data');
if (localData !== '' && localData) {
  const ztData = JSON.parse(localData);
  axios.defaults.headers.common['access-token'] = ztData.token;
}
// axios.defaults.headers.common['app_key'] = '34567894567';
axios.defaults.baseURL = 'http://api.zhituteam.com';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
