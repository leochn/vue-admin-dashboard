
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
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式


Vue.config.productionTip = false

Vue.prototype.$http = axios

//使用element-ui
Vue.use(ElementUI)

//路由开始之前的操作
router.beforeEach((route, redirect, next) => {
  NProgress.start(); // 开启Progress
  next()

  
  // if (state.device.isMobile && state.sidebar.opened) {
  //   store.commit(TOGGLE_SIDEBAR, false);
  // }
  // if (!auth.loggedIn() && route.path !== '/login') {
  //   next({
  //     path: '/login',
  //     query: { redirect: route.fullPath }
  //   })
  // } else {
  //   next()
  // }
})

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
