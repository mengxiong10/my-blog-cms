<template>
  <div class="dropdown"
       tabindex="0"
       @focus="activate()"
       @blur="deactivate()">
    <span>
      <slot></slot>
      <i class="fa fa-angle-down fa-lg"></i>
    </span>
    <div class="dropdown-menu" v-show="show" @click="hide" :style="{[position]:0}">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDropdown',
  props: {
    // 选择菜单选项后关闭
    hideOnClick: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'right'
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    activate () {
      if (this.show) return
      this.show = true
      this.$el.focus()
    },
    deactivate () {
      if (!this.show) return
      this.show = false
      this.$el.blur()
    },
    hide () {
      if (this.hideOnClick) {
        this.deactivate()
      }
    }
  }
}
</script>

<style scoped>
.dropdown{
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;
  padding:5px;
}
.dropdown-menu{
  position: absolute;
  margin-top: 7px;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  z-index: 100;
}
</style>
