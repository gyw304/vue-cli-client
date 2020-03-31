import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	isAuth:false,
	user : {}
  },
  getters:{
	isAuth: state => {//通过方法访问
		return state.isAuth
	},
	user: state => {//通过方法访问
		return state.user
	}
  },
  mutations: {
	setAuth : (state,data) => {
		state.isAuth = data;
	},
	setUser : (state,data) => {
		state.user = data;
	}
  },
  actions: {	  
	setAuth({commit},data){
		commit("setAuth",data)
	},
	setUser({commit},data){
		commit("setUser",data)
	}
  },
  modules: {
  }
})
