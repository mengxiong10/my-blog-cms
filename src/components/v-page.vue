<!-- 分页组件 -->
<template>
  <div class="page-wrap" onselectstart = "return false">
    <button @click="--value" :disabled="value === 1">
      <i class="fa fa-chevron-left"></i>
    </button>
    <button
      v-for="page in pages"
      :class="{'active': page === value}"
      :disabled="page =='...'"
      @click="value = page"
      >{{page}}</button>
    <button @click="++value" :disabled="value === total">
      <i class="fa fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>

export default {
  props:{
    total:{
      type:Number,
      default:1
    },
    value:{
      type:Number,
      default:1
    }
  },
  watch:{
    total (val) {
      if (this.value > val) {
        this.value = val
      }
    },
    value (val) {
      this.$emit('input',val)
    }
  },
  computed:{
    pages () {
       let c = this.value
       let l = this.total
       let arr = [1,2,3,4,5,6,7,8,9,10,'...',l]
       if (l <=10) {
         return arr.slice(0, l)
       }else{
          if (c <=6) {
            return arr;
          }else{
            if (c + 5 < l) {
              return [1,'...',c-4,c-3,c-2,c-1,c,c+1,c+2,c+3,c+4,'...',l]
            }else{
              return [1,'...',l-8,l-7,l-6,l-5,l-4,l-3,l-2,l-1,l]
            }
          }
       }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.page-wrap{
  font-size: 0;
  text-align: center;
}
button{
  display: inline-block;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  margin-right: -1px;
  padding: 0 5px;
  font-size: 14px;
  color:#48576a;
  background: #fff;
  border:1px solid #d1dbe5;
  outline: 0;
  cursor: pointer;
  &:hover{
    color:@blue;
  }
  &.active{
    color:#fff;
    border:1px solid @blue;
    background: @blue;
    cursor: default;
  }
  &[disabled]{
    color:#e4e4e4;
    cursor: not-allowed;
  }
}
</style>
