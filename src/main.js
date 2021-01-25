import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
// 导入图标库
import './assets/fonts/iconfont.css'

// //导入 axios
import axios from './httpConfig.js'

// //将axios挂载到全局，在通过this.$http调用axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
