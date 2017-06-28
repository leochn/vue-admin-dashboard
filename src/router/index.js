import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Layout from "../views/layout/layout.vue";
import Index from '../views/index/index.vue'
import Err401 from '../views/err/401.vue'

Vue.use(Router)

//使用AMD方式加载
// component: resolve => require(['pages/home'], resolve),

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/401',
		name: 'err401',
		component: Err401
	},
	{
		path: '/',
		component: Layout,
		children: [
			{ path: '/index', name: 'index', component: Index },
		]
	},
	{ path: '*', redirect: '/401', hidden: true }
]

const router = new Router({
	//mode: 'history', //切换路径模式，变成history模式
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});


export default router
