import Vue from 'vue'
import router from './router'
import store from './store'

import './server/mock.js'

import 'css/reset.css'
import 'css/index.less'

/*自定义全局组件*/
Vue.component('v-dropdown',require('components/v-dropdown.vue'))
Vue.component('v-dropmenu',require('components/v-dropmenu.vue'))
Vue.component('v-tag-input',require('components/v-tag-input.vue'))
Vue.component('v-page',require('components/v-page.vue'))
Vue.component('v-dialog',require('components/v-dialog.vue'))


new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
