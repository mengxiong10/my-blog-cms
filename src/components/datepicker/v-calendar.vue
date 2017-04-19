<template>
  <div class="v-calendar">
    <div class="v-calendar-header">
      <i class="v-calendar__prev-icon" @click="changeYear(-1)">&laquo;</i>
      <i class="v-calendar__prev-icon" @click="changeMonth(-1)">&lsaquo;</i>
      <span>{{now.getFullYear() + '年'}}</span>
      <span>{{now.getMonth() + 1 + '月'}}</span>
      <i class="v-calendar__next-icon" @click="changeYear(1)">&raquo;</i>
      <i class="v-calendar__next-icon" @click="changeMonth(1)" >&rsaquo;</i>   
    </div>
    <div class="v-calendar-content">
      <table class="v-calendar-table">
        <thead>
          <tr>
            <th v-for="day in days">{{day}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in dates">
            <td v-for="cell in row"
                :title="cell.title"
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
    startAt: null,
    endAt: null,
    value: null,
    show: Boolean,
    range: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd',
    },
  },
  data() {
    return {
      days: ['日', '一', '二', '三', '四', '五', '六'],
      dates: [],
      now: this.value ? new Date(this.value) : new Date(),
    }
  },
  created() {
    this.update(new Date())
  },
  computed: {

  },
  watch: {
    show(val) {
      if (val) {
        this.now = this.value ? new Date(this.value) : new Date()
      }
    },
    now(val) {
      this.update(val)
    },
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
          type += ' today'
        }
        return {
          title: this.stringify(date),
          date,
          day,
          type,
        }
      })
    },
    // 更新面板选择时间
    update(now) {
      const row = 6
      const col = 7
      const time = new Date(now)

      time.setDate(0) // 把时间切换到上个月最后一天
      const lastMonthLength = time.getDay() + 1  // time.getDay() 0是星期天, 1是星期一 ...
      const lastMonthfirst = time.getDate() - (lastMonthLength - 1)
      const lastMonth = this.getMonth(time, lastMonthfirst, lastMonthLength, 'lastMonth')

      time.setMonth(time.getMonth() + 2, 0) // 切换到这个月最后一天
      const curMonthLength = time.getDate()
      const curMonth = this.getMonth(time, 1, curMonthLength, 'curMonth')

      time.setMonth(time.getMonth() + 1, 1)
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
      this.dates = result
    },
    getClasses(cell) {
      const classes = []
      const currentDate = new Date(this.value)
      currentDate.setHours(0, 0, 0, 0)
      const cellTime = cell.date.getTime()
      const curTime = currentDate.getTime()
      classes.push(cell.type)
      if (this.range) {
        if ((this.startAt && cellTime < this.startAt.getTime()) ||
          (this.endAt && cellTime > this.endAt.getTime())) {
          classes.push('disabled')
        } else if (curTime > 0) {
          if ((this.startAt &&
             cellTime >= this.startAt.getTime() &&
             cellTime <= curTime)
             ||
             (this.endAt &&
              cellTime <= this.endAt.getTime() &&
              cellTime >= curTime)) {
            classes.push('inrange')
          }
        }
      }
      if (curTime === cellTime) {
        classes.push('current')
      }
      return classes.join(' ')
    },
    changeYear(flag) {
      const now = new Date(this.now)
      now.setDate(1)
      now.setFullYear(now.getFullYear() + flag)
      this.now = now
    },
    changeMonth(flag) {
      const now = new Date(this.now)
      now.setDate(1)
      now.setMonth(now.getMonth() + flag)
      this.now = now
    },
    selectDate(cell) {
      const classes = this.getClasses(cell)
      if (classes.indexOf('disabled') !== -1) {
        return
      }
      this.now = cell.date
      this.$emit('input', cell.date)
    },
  },
}

</script>

<style scoped>
.v-calendar{
  float: left;
  padding: 12px;
  &:nth-child(2) {
    border-left:1px solid #e4e4e4;
  }
}

.v-calendar-header {
  line-height: 34px;
  text-align: center;
}
.v-calendar__prev-icon, .v-calendar__next-icon{
    font-style: normal;
    font-size: 20px;
    padding:0 6px;
    cursor: pointer;
}
.v-calendar__prev-icon {
  float: left;
}
.v-calendar__next-icon {
  float: right;
}
.v-calendar-content{
  /*width:210px;*/
}
.v-calendar-table {
  width: 100%;
  table-layout: fixed;
  font-size: 12px;
  & td,
  & th {
    width: 30px;
    height: 30px;
    text-align: center;
  }
  & td {
    cursor: pointer;
    &:hover,&.inrange{
      background-color: #eaf8fe;
    }
    &.current{
      color: #fff #1284e7;
    }
    &.disabled {
      cursor: not-allowed;
      color: #ccc #f3f3f3;
    }
  }
}

.lastMonth,
.nextMonth {
  color: #ddd;
}

.today {
  color: #20a0ff;
}


</style>

