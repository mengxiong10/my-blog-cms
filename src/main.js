import Vue from 'vue'
import router from './router'
import store from './store'

import './server/mock.js'

import 'css/reset.css'
import 'css/index.less'

/*自定义全局组件*/
Vue.component('v-dropdown',require('modules/v-dropdown.vue'))
Vue.component('v-dropmenu',require('modules/v-dropmenu.vue'))
Vue.component('v-tag-input',require('modules/v-tag-input.vue'))

new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
