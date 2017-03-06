import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
      name: 'articleList',
      path: 'article/list',
      component: require('../views/article/list')
    }, {
      name: 'articleAdd',
      path: 'article/add',
      component: require('../views/article/add')
    }]
  }]
})
