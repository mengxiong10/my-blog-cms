import Vue from 'vue'
import router from './router'
import store from './store'

import { formatDate } from './server/utils'

import loading from './directives/loading/index'
import clickoutside from './directives/clickoutside'

import './css/index.css'
import './server/mock.js'

/* 全局过滤器 */
Vue.filter('date', formatDate)

/* 自定义全局指令 */
Vue.directive('loading', loading)
Vue.directive('clickoutside', clickoutside)

/* 自定义全局组件 */
const components = require.context('./components', false, /\.vue$/)
components.keys().forEach(key => Vue.component(components(key).name, components(key)))

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  store,
  render (h) {
    return h('router-view')
  }
})
