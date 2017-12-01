// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import { Button, Indicator, Toast } from 'mint-ui'
Vue.prototype.axios = axios
Vue.use(Button)
Vue.use(Indicator)
Vue.use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
