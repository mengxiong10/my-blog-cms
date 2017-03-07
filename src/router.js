import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home.vue'
import articleList from './views/article/list'
import articleAdd from './views/article/add'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
      name: 'articleList',
      path: 'article/list',
      component: articleList
    },{
      name: 'articleAdd',
      path: 'article/add',
      component: articleAdd
    },{
      name: 'articleEdit',
      path: 'article/:id/update',
      component:articleAdd 
    }]
  }]
})
