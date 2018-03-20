import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import backIndex from '@/components/backIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/backIndex',
    	name:'backIndex',
    	component:backIndex
    }
  ]
})