import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
	meta:{
		auth:false
	},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
	meta:{
		auth:false
	},
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/reg',
    name: 'reg',
	meta:{
		auth:false
	},
    component: () => import(/* webpackChunkName: "about" */ '../components/Reg.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
	meta:{
		auth:true
	},
    component: () => import(/* webpackChunkName: "about" */ '../components/Detail.vue')
  }
]




const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next)=>{
	if (to.meta.auth){
		if(localStorage.getItem('token')){
			next()
		}
		else{
			next({
				path:'/login'
			})
		}
	}else{
		next();
	}
	
})

export default router
