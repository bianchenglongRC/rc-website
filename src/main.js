// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import "./style/icon.min.css"
import "./style/animation.css"
import "./style/style.min.css"


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //匹配前往的路由不存在
    from.name ? next({
      name: from.name
    }) : next('/'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到首页
  } else {
    next(); //如果匹配到正确跳转
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
