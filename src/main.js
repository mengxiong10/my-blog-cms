import Vue from 'vue'
import router from './router'

import 'css/reset.css'
import 'css/index.less'


new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
