<template>
  <ul class="menu">
    <li class="dropmenu-list" v-for="option in opts" @click="selectValue(option)">
      <i class="fa fa-check" v-show="value === option.value"></i>
      {{option.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props:['value','options'],
  computed:{
    opts () {
      return this.options.map(v => {
        if (typeof v !== 'object' || v === null) {
          return {name:v,value:v}
        }else{
          return v
        }
      })
    }
  },
  methods:{
    selectValue (option) {
      this.$emit('input',option.value)
    }
  }
}
</script>


<style lang="less" scoped>
.menu{
  min-width: 100px;
  max-width: 200px;
  max-height: 300px;
  padding:5px 0;
  overflow-y: auto;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.dropmenu-list{
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
</style>
