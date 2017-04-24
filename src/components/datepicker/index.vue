<template>
  <div class="v-datepicker"
       :style="{'width': width + 'px','min-width':range ? '210px' : '140px'}"
       v-clickoutside="closePopup">   
    <input readonly
          class="v-input"
          :value="text"
          :placeholder="innerPlaceholder"
          ref="input"
          @click="togglePopup"
          @mousedown="$event.preventDefault()">
    <i class="fa v-input__icon" 
      :class="showCloseIcon ? 'fa-close' : 'fa-calendar'" 
      @mouseenter="hoverIcon"
      @mouseleave="hoverIcon"
      @click="clickIcon" ></i>
    <div class="v-datepicker-popup"
         :class="{'v-range':range}"
         v-show="showPopup">
      <template v-if="!range">
        <v-calendar v-model="currentValue" :show="showPopup"></v-calendar>
      </template>
      <template v-else>
        <div class="v-datepicker-top">
          <a v-for="range in ranges" @click="selectRange(range)">{{range.text}}</a>
        </div>
        <v-calendar style="width:50%"  v-model="currentValue[0]" :end-at="currentValue[1]" :show="showPopup"></v-calendar>
        <v-calendar style="width:50%"  v-model="currentValue[1]" :start-at="currentValue[0]" :show="showPopup"></v-calendar>
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
      showPopup: true,
      showCloseIcon: false,
      currentValue: this.value,
      ranges: [],
    }
  },
  watch: {
    value: {
      handler(val) {
        if (!this.range) {
          this.currentValue = this.isValidDate(val) ? val : undefined
        } else {
          this.currentValue = this.isValidRange(val) ? val : [undefined, undefined]
        }
      },
      immediate: true,
    },
    currentValue(val) {
      if ((!this.range && val) || (this.range && val[0] && val[1])) {
        this.$emit('input', val)
      }
    },
  },
  computed: {
    innerPlaceholder() {
      return this.placeholder ? this.placeholder : (this.range ? '请选择日期范围' : '请选择日期')
    },
    text() {
      if (!this.range && this.currentValue) {
        return this.stringify(this.currentValue)
      }
      if (this.range && this.currentValue[0] && this.currentValue[1]) {
        return this.stringify(this.currentValue[0]) + ' ~ ' + this.stringify(this.currentValue[1])
      }
      return ''
    },
  },
  created() {
    this.initRanges()
  },
  methods: {
    closePopup() {
      this.showPopup = false
    },
    togglePopup() {
      if (this.showPopup) {
        this.$refs.input.blur()
        this.showPopup = false
      } else {
        this.$refs.input.focus()
        this.showPopup = true
      }
    },
    hoverIcon(e) {
      if (e.type === 'mouseenter' && this.text) {
        this.showCloseIcon = true
      }
      if (e.type === 'mouseleave') {
        this.showCloseIcon = false
      }
    },
    clickIcon() {
      if (this.showCloseIcon) {
        this.$emit('input', '')
      } else {
        this.togglePopup()
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
    selectRange(range) {
      this.$emit('input', [range.start, range.end])
    },
    initRanges() {
      const time = new Date()
      time.setMonth(time.getMonth() + 1, 0) // 切换到本月最后一天
      this.ranges.push({
        text: '今天',
        start: new Date(),
        end: new Date(),
      }, {
        text: '最近一周',
        start: new Date(Date.now() - 3600 * 1000 * 24 * 7),
        end: new Date(),
      }, {
        text: '今后一周',
        start: new Date(),
        end: new Date(Date.now() + 3600 * 1000 * 24 * 7),
      }, {
        text: '本月',
        start: new Date(time.getFullYear(), time.getMonth(), 1),
        end: time,
      }, {
        text: '最近一个月',
        start: new Date(Date.now() - 3600 * 1000 * 24 * 30),
        end: new Date(),
      }, {
        text: '最近三个月',
        start: new Date(Date.now() - 3600 * 1000 * 24 * 90),
        end: new Date()
      })
    },
  },
}
</script>


<style scoped>
.v-datepicker {
  position: relative;
  display: inline-block;
  color: #48576a;
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
  padding: 6px 30px 6px 10px;
  font-size: 14px/1.4;
  color: #555 #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.v-input__icon{
  position: absolute 0 0 * *;
  width: 30px;
  height: 100%;
  color:#888;
  text-align:center;
}
.v-datepicker-top{
  margin: 0 12px;
  line-height:34px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &>a{
    white-space:nowrap;
    cursor:pointer;
  }
  &>a:hover{
    color: #1284e7;
  }
  &>a::after{
    content:'|';
    margin: 0 10px;
    color:#48576a;
  }
}
</style>
