<template>
  <div class="v-datepicker"
       @focus="activate()"
       @blur="deactivate()">
    <input readonly :value="text">
    <div class="v-datepicker-popup">
      <div class="v-datepicker-header">
        <button type="button">&laquo;</button>
        <button type="button">&lsaquo;</button>
        <button type="button">&rsaquo;</button>
        <button type="button">&raquo;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="day in days">{{day}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in date1">
            <td v-for="cell in row"
                :title="cell.date"            
                :class="getClasses(cell)"
                @click="selectDate(cell)">{{cell.day}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'src/server/utils.js'

export default {
  props: {
    format: {
      type: String,
      default: 'yyyy-MM-dd',
    },
    value: null,
  },
  data() {
    return {
      days: ['日', '一', '二', '三', '四', '五', '六'],
      date1: [],
    }
  },
  computed: {
    text() {
      return this.isValidDate(this.value) ? this.stringify(this.value) : ''
    },
  },
  created() {
    this.update(new Date())
  },
  methods: {
    stringify(date) {
      return formatDate(date, this.format)
    },
    isValidDate(date) {
      return !!new Date(date).getTime()
    },
    getMonth(time, firstday, length, classes) {
      const today = new Date().setHours(0, 0, 0, 0)
      return Array.apply(null, { length }).map((v, i) => { // eslint-disable-line
        let day = firstday + i
        let type = classes
        const date = new Date(time.getFullYear(), time.getMonth(), day)
        const isToday = today === date.getTime()
        if (isToday) {
          day = '今天'
          type = 'today'
        }
        return {
          date: this.stringify(date),
          day,
          type,
        }
      })
    },
    // 更新面板选择时间
    update(time) {
      const row = 6
      const col = 7

      time.setDate(0) // 把时间切换到上个月最后一天
      const lastMonthLength = time.getDay() + 1  // time.getDay() 0是星期天, 1是星期一 ...
      const lastMonthfirst = time.getDate() - (lastMonthLength - 1)
      const lastMonth = this.getMonth(time, lastMonthfirst, lastMonthLength, 'lastMonth')

      time.setMonth(time.getMonth() + 2, 0) // 切换到这个月最后一天
      const curMonthLength = time.getDate()
      const curMonth = this.getMonth(time, 1, curMonthLength, 'curMonth')

      time.setMonth(time.getMonth() + 1)
      const nextMonthLength = (row * col) - (lastMonthLength + curMonthLength)
      const nextMonth = this.getMonth(time, 1, nextMonthLength, 'nextMonth')

      // 分割数组
      let index = 0
      let resIndex = 0
      const arr = lastMonth.concat(curMonth, nextMonth)
      const result = new Array(row)
      while (index < row * col) {
        result[resIndex++] = arr.slice(index, index += col)
      }
      this.date1 = result
    },
    getClasses(cell) {
      const classes = []
      classes.push(cell.type)

      return classes.join(' ')
    },
    selectDate(cell) {

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
  background-color: #fff;
  margin: 20px 600px;
}

.v-datepicker-popup {
  font-size: 12px / 1;
  & td,
  & th {
    width: 30px;
    height: 30px;
    text-align: center;
  }
  & td {
    cursor: pointer;
    &:hover {
      background-color: #eaf8fe;
    }
  }
}

.lastMonth,
.nextMonth {
  color: #ccc;
}

.today {
  color: #20a0ff;
}

.v-datepicker-header {
  &>button {
    background: transparent;
    border: 0;
    outline: none;
    font-size: 16px;
    cursor: pointer;
  }
}

</style>
