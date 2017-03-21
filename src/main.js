import Vue from 'vue'
import router from './router'
import store from './store'
import './server/filter.js'

import './server/mock.js'

import './css/reset.css'
import './css/index.less'
// import ElDatePicker from 'element-datepicker'
// Vue.use(ElDatePicker)


/* 自定义全局组件*/
Vue.component('v-dropdown', require('components/v-dropdown.vue'))
Vue.component('v-dropmenu', require('components/v-dropmenu.vue'))
Vue.component('v-tag-input', require('components/v-tag-input.vue'))
Vue.component('v-page', require('components/v-page.vue'))
Vue.component('v-dialog', require('components/v-dialog.vue'))

/* eslint-disable */


new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>',
})
