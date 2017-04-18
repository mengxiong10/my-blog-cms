<template>
  <div class="v-datepicker"
       @focus="activate()"
       @blur="deactivate()">
    <input readonly :value="text" @click="show = !show">
    <div class="v-datepicker-popup" v-show="show">
      <template v-if="!range">
        <v-calendar v-model="currentValue" :show="show"></v-calendar>
      </template>
      <template v-else>
        <v-calendar v-model="currentValue[0]" :show="show" :range="true" :end-at="currentValue[1]"></v-calendar>
        <v-calendar v-model="currentValue[1]" :show="show" :range="true" :start-at="currentValue[0]"></v-calendar>
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
    value: null,
  },
  data() {
    return {
      show: true,
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
    // activate() {
    //   if (this.show) return
    //   this.show = true
    //   if (this.searchable) {
    //     this.search = ''
    //     this.$els.search.focus()
    //   } else {
    //     this.$el.focus()
    //   }
    //   this.$emit('open')
    // },
    // deactivate() {
    //   if (!this.show) return
    //   this.show = false
    //   if (this.searchable) {
    //     this.$els.search.blur()
    //     this.search = ''
    //   } else {
    //     this.$el.blur()
    //   }
    // },
  },
}
</script>


<style scoped>

.v-datepicker {
  display: inline-block;
  color: #48576a;
  margin: 20px;
}
.v-datepicker-popup {
  border: 1px solid #d9d9d9;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

</style>
