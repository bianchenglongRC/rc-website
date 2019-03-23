import Vue from 'vue'
import Router from 'vue-router'
import app from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'app',
      redirect: '/app'
    },
    {
      path: '/app',
      component: resolve => require(['../view/index'], resolve),
    },
  ]
})
