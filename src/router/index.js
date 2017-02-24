import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home.vue'
import Article from 'components/article'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {path:'article/list',name:'articleList',component:Article},
        {path:'article/add',name:'articleAdd',component:require('components/article/article-add.vue')}
      ]
    }
  ]
})
