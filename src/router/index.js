import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/register', component: Register }

]

const router = new VueRouter({
  routes
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 表示要去哪个页码
  // from 表示从哪个页码跳转过来的
  // next 是一个函数  表示放行   next有两种用法   其中 第一种 next() 第二种 next('/home') 强制跳转

  //判断是否是去登录页面
  if (to.path === '/login' || to.path === '/register') return next();

  //如果不是去登录页面那么就要获取token  如果有token 就放行 没有就强制跳转到登录页面
  const tokenstr = window.sessionStorage.getItem('token');
  if (!tokenstr) return next('/login');
  next();
});



export default router
