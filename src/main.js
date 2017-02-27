import Vue from 'vue'
import router from './router'
import store from './store'

import './mock.js'

import 'css/reset.css'
import 'css/index.less'


new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
