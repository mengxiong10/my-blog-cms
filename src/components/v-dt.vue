<template>
  <div class="date-picker"
       @focus="activate()"
       @blur="deactivate()">
    <input readonly>
    <div class="date-picker-popup">
      <table>
        <tr>
          <th v-for="day in days">{{day}}</th>
        </tr>
        <tr v-for="row in date1">
          <td v-for="cell in row" >{{cell.day}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'src/server/utils.js'

export default {
  props:{
    format:{
      type:String,
      default: 'yyyy-MM-dd',
    }
  },
  data() {
    return {
      days:['日', '一', '二', '三', '四', '五', '六'],
      date1:[],
    }
  },
  created() {
    this.update(new Date())
  },
  methods: {
    getMonth(time, firstday, length) {
      return Array.apply(null, {length}).map((v, i) => {
        const day = firstday + i 
        const date = new Date(time.getFullYear(), time.getMonth(), day)
        return {
          title:formatDate(date,this.format),
          day,
          date,
        }
      })
    },
    update(time) {
      time.setMonth(time.getMonth() + 1, 0) //切换到这个月最后一天
      const curMonthLength = time.getDate()
      const curMonth = this.getMonth(time, 1, curMonthLength)
    
      time.setDate(0) // 把时间切换到上个月最后一天
      const lastMonthLength = time.getDay() + 1  // time.getDay() 0是星期天, 1是星期一 ...
      const lastMonthfirst = time.getDate() - lastMonthLength + 1
      const lastMonth = this.getMonth(time, lastMonthfirst, lastMonthLength)
      
      const nextMonthLength = 42 - lastMonthLength - curMonthLength
      const nextMonth = this.getMonth(time, 1, nextMonthLength)

      // 分割数组
      let index = 0 
      let resIndex = 0 
      const arr = lastMonth.concat(curMonth,nextMonth)
      const result = new Array(6)
      while(index < 42) {
        result[resIndex++] = arr.slice(index,index += 7)
      }
      this.date1 = result 
    }

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
  }
}
</script>


<style scoped>
  .date-picker{
    display: inline-block;
    color:#6d6d6d;
  }
  .date-picker-popup{
    font:12px/1 'MicroYahei',serif;
    & td,& th{
      width: 28px;
      height: 28px;
      text-align:center;
    }
  }
</style>