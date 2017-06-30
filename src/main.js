
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './styles/index.scss'; // 全局自定义的css样式
import 'normalize.css/normalize.css';// normalize.css 样式格式化
import './mock/index.js';  // 该项目所有请求使用mockjs模拟


Vue.config.productionTip = false

Vue.prototype.$http = axios

//使用element-ui
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
