import Vue from 'vue'

import Router from 'vue-router'

import Home from './views/home.vue'
import articleList from './views/article/list'
import articleAdd from './views/article/add'
import tagList from './views/tags'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/test',
    component:require('test.vue')
  },{
    path: '/',
    component: Home,
    children: [{
      name: 'articleList',
      path: 'article/list',
      component: articleList,
    }, {
      name: 'articleAdd',
      path: 'article/add',
      component: articleAdd,
    }, {
      name: 'articleEdit',
      path: 'article/:id/update',
      component: articleAdd,
    }, {
      name: 'tagList',
      path: 'tag/list',
      component: tagList,
    }],
  }],
})
