import Vue from 'vue'

const Loading = Vue.extend(require('./loading.vue'))

export default {
  bind (el, binding) {
    el.instance = new Loading({
      el: document.createElement('div'),
      data: {
        visible: !!binding.value
      }
    })
    Vue.nextTick(() => {
      const position = window.getComputedStyle(el, null).getPropertyValue('position')
      if (!position || position === 'static') {
        el.style.position = 'relative'
      }
      el.appendChild(el.instance.$el)
    })
  },
  update (el, binding) {
    if (binding.oldValue !== binding.value) {
      el.instance.visible = !!binding.value
    }
  },
  unbind (el) {
    el.removeChild(el.instance.$el)
  }
}
