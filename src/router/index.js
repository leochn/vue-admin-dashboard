import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Layout from "../views/layout/layout.vue";
import Index from '../views/index/index.vue'
import Err401 from '../views/err/401.vue'
import Err404 from '../views/err/404.vue'
import Org from '../views/org/index.vue'
import Users from '../views/org/users.vue'
import Orguser from '../views/org/orguser.vue'

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
		name: '401',
		component: Err401
	},
	{
		path: '/index',
		name:'首页',
		component: Layout,
	},
	{
		path: '/',
		name:'错误页面',
		component: Layout,
		children: [
			{ path: '/err/401', name: 'err401', component: Err401 },
			{ path: '/err/404', name: 'err404', component: Err404 }
		]
	},
	{
		path: '/',
		name:'组织管理',
		component: Layout,
		children: [
			{ path: '/org/index', name: '组织信息', component: Org },
			{ path: '/org/users', name: '用户信息', component: Users },
			{ path: '/org/orguser', name: '用户组织设置', component: Orguser },
		]
	}
	// ,
	// { path: '*', redirect: '/401', hidden: true }
]

const router = new Router({
	//mode: 'history', //切换路径模式，变成history模式
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});


export default router
