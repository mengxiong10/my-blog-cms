<template>
  <div class="dropdown">
    <span>
      <slot></slot>
      <i class="fa fa-angle-down fa-lg"></i>
    </span>
    <ul class="dropdown-menu" v-for="opt in opts">
      <li v-for="option in opt" @click="selectValue(option)">
        <i class="fa fa-check" v-show="value === (option.value || option.name)"></i>
        {{option.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    value:[String,Number,Array],
    options:{
      type:Array,
      default:function () {
        return []
      }
    }
  },
  computed:{
    opts () {
      var arr = [],options = []
      this.options.forEach(v => {
        if (Array.isArray(v)) {
          options.push(v)
        }else{
          arr.push(v)
        }
      })
      options.push(arr)
      return options
    }
  },
  methods:{
    selectValue (option) {
      this.$emit('input',option.value || option.name)
    }
  }
}
</script>

<style lang="less" scoped>
.dropdown{
  position: relative;
  display: inline-block;
}
.dropdown-menu{
  position: absolute;
  right: 0;
  min-width: 160px;
  padding: 5px 0;
  margin-top: 2px;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  >li{
    display: block;
    cursor: pointer;
    padding: 3px 30px;
    line-height: 20/14;
    color: #333;
    white-space: nowrap;
    &:hover{
      background: #f5f5f5;
    }
  }
  .fa-check{
    position: absolute;
    margin-left: -20px;
    color:#337AB7;
    line-height: inherit;
  }
}
</style>
