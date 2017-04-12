import Vue from 'vue'

const Loading = Vue.extend(require('./loading.vue'))

Vue.directive('loading', {
  bind(el, binding) {
    const scale = +el.getAttribute('scale') // 缩放比例
    el.instance = new Loading({
      el: document.createElement('div'),
      data: {
        visible: !!binding.value,
        scale: scale || 1,
      },
    })
    Vue.nextTick(() => {
      const position = window.getComputedStyle(el, null).getPropertyValue('position')
      if (!position || position === 'static') {
        el.style.position = 'relative'
      }
      el.appendChild(el.instance.$el)
    })
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.instance.visible = !!binding.value
    }
  },
  unbind(el) {
    el.removeChild(el.instance.$el)
  },
})

