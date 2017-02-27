import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {path:'article/list',name:'articleList',component:require('components/article/list')},
        {path:'article/add',name:'articleAdd',component:require('components/article/add')}
      ]
    }
  ]
})
