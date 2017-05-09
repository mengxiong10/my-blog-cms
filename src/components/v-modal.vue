<template>
  <v-dialog v-model="modal.show" :title="modal.title" :showCancelButton="modal.type !=='alert'" @confirm="confirm" @cancel="cancel">
    <div class="modal-content">{{modal.content}}</div>
    <template v-if="modal.type === 'prompt'">
      <input class="form-text" :class="{'invalid':invalid}" type="text" v-model="text" @change.once="dirty = true">
      <div class="error-msg" :style="{'visibility':invalid ? 'visible' : 'hidden'}">{{errorMsg}}</div>
    </template>
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import { merge } from 'src/server/utils'
import VDialog from './v-dialog.vue'

let $root = null
const defaultOptions = {
  show: false,
  title: '提示',
  content: '',
  type: 'alert'
}
const createdModal = function (options) {
  return new Promise((resolve, reject) => {
    merge($root.modal, defaultOptions, options, { resolve, reject }, { show: true })
  })
}

export default {
  name: 'VModal',
  components: { VDialog },
  data () {
    return {
      modal: JSON.parse(JSON.stringify(defaultOptions)),
      errorMsg: '内容不能为空',
      dirty: false, // 开始检测是否为空
      text: ''
    }
  },
  computed: {
    invalid () {
      return this.text === '' && this.dirty
    }
  },
  watch: {
    'modal.show' (val) {
      if (!val) {
        this.dirty = false
        this.text = ''
      }
    }
  },
  methods: {
    confirm () {
      this.dirty = true
      if (this.modal.type === 'prompt' && this.invalid) {
        return
      }
      $root.modal.resolve(this.text)
      $root.modal.show = false
    },
    cancel () {
      $root.modal.reject()
      $root.modal.show = false
    },
    setRoot (vm) {
      $root = vm
      Vue.prototype.$modal = {
        confirm (content, title) {
          let options = { content, title }
          if (typeof content === 'object') {
            options = content
          }
          merge(options, { type: 'confirm' })
          return createdModal(options)
        },
        alert (content, title) {
          let options = { content, title }
          if (typeof content === 'object') {
            options = content
          }
          merge(options, { type: 'alert' })
          return createdModal(options).catch(() => { })
        },
        prompt (content, title, text) {
          let options = { content, title }
          if (typeof content === 'object') {
            options = content
          }
          $root.text = options.text || text || '' // 默认值
          merge(options, { type: 'prompt' })
          return createdModal(options)
        }
      }
    }
  },
  created () {
    this.setRoot(this)
  }
}
</script>

<style scoped>
.modal-content {
  margin-top: 10px;
}

.form-text {
  margin-top: 20px;
}

.invalid {
  border-color: red;
  outline: none;
}

.error-msg {
  font-size: 12px;
  color: red;
  padding-top: 2px;
}
</style>
