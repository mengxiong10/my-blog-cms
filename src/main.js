import Vue from 'vue'
import router from './router'
import store from './store'

import { formatDate } from './server/utils'

import loading from './directives/loading/index'
import clickoutside from './directives/clickoutside'

import VButton from './components/v-button.vue'
import VDropdown from './components/v-dropdown.vue'
import VDropmenu from './components/v-dropmenu.vue'
import VTagInput from './components/v-tag-input.vue'
import VPage from './components/v-page.vue'
import VDialog from './components/v-dialog.vue'

import './css/index.css'
import './server/mock.js'

/* 全局过滤器*/
Vue.filter('date', formatDate)

/* 自定义全局指令 */
Vue.directive('loading', loading)
Vue.directive('clickoutside', clickoutside)

/* 自定义全局组件*/
const components = { VButton, VDropdown, VDropmenu, VTagInput, VPage, VDialog }
Object.keys(components).forEach((name) => {
  Vue.component(name, components[name])
})

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  store,
  render(h) {
    return h('router-view')
  },
})

