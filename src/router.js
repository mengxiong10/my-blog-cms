import Vue from 'vue'

import Router from 'vue-router'

import Container from './views/container.vue'
import articleList from './views/article/list'
import articleAdd from './views/article/add'
import tagList from './views/tags'
import Login from './views/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/test',
    component: require('./components/v-dt.vue'),
  }, {
    name: 'login',
    path: '/login',
    component: Login,
  }, {
    path: '/cms',
    component: Container,
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
  }, {
    path: '*',
    redirect: '/login',
  }],
})
