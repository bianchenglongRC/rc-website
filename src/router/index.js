import Vue from 'vue'
import Router from 'vue-router'
import app from '@/view/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'app',
      component: resolve => require(['../view/index'], resolve),
    },
  ]
})
