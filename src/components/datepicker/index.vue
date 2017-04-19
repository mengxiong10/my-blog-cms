<template>
  <div class="v-datepicker"
       :style="{'width': width + 'px'}"
       v-clickoutside="closePopup">   
    <input readonly
          class="v-input"
          :value="text"
          :placeholder="innerPlaceholder"
          ref="input"
          @click="togglePopup"
          @mousedown="$event.preventDefault()">
    <div class="v-datepicker-popup"
         :class="{'v-range':range}"
         v-show="show">
      <template v-if="!range">
        <v-calendar v-model="currentValue" :show="show"></v-calendar>
      </template>
      <template v-else>
        <v-calendar style="width:50%"  v-model="currentValue[0]" :show="show" :range="true" :end-at="currentValue[1]"></v-calendar>
        <v-calendar style="width:50%"  v-model="currentValue[1]" :show="show" :range="true" :start-at="currentValue[0]"></v-calendar>
      </template>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'src/server/utils.js'
import VCalendar from './v-calendar.vue'

export default {
  components: { VCalendar },
  props: {
    format: {
      type: String,
      default: 'yyyy-MM-dd',
    },
    range: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: 210,
    },
    palceholder: String,
    value: null,
  },
  data() {
    return {
      show: true,
      innerPlaceholder: this.placeholder ? this.placeholder : (this.range ? '请选择日期范围' : '请选择日期'),
      currentValue: null,
    }
  },
  watch: {
    currentValue(val) {
      if ((!this.range && this.isValidDate(val))
        ||
        (this.range && this.isValidRange(val))) {
        this.$emit('input', val)
      }
    },
    value: {
      handler(val) {
        if (!this.range) {
          this.currentValue = this.isValidDate(val) ? val : null
        } else {
          this.currentValue = this.isValidRange(val) ? val : [null, null]
        }
      },
      immediate: true,
    },
  },
  computed: {
    text() {
      if (!this.range) {
        return this.isValidDate(this.value) ? this.stringify(this.value) : ''
      }
      return this.isValidRange(this.value)
        ? (this.stringify(this.value[0]) + ' ~ ' + this.stringify(this.value[1]))
        : ''
    },
  },
  methods: {
    closePopup() {
      this.show = false
    },
    togglePopup() {
      if (this.show) {
        this.$refs.input.blur()
        this.show = false
      } else {
        this.$refs.input.focus()
        this.show = true
      }
    },
    stringify(date) {
      return formatDate(date, this.format)
    },
    isValidDate(date) {
      return !!new Date(date).getTime()
    },
    isValidRange(date) {
      return Array.isArray(date) &&
        date.length === 2 &&
        this.isValidDate(date[0]) &&
        this.isValidDate(date[1])
    },
  },
}
</script>


<style scoped>
.v-datepicker {
  position: relative;
  display: inline-block;
  color: #48576a;
  width: 220px;
  margin: 20px;
}
.v-datepicker-popup {
  position: absolute;
  min-width: 234px;
  margin-top:1px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
}
.v-range{
  min-width: 468px;
}
.v-input{
  display: inline-block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px/1.4;
  color: #555 #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  &:focus{
    border-color:#20a0ff;
  }
}
</style>
