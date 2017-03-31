<template>
  <input :type="type" class="input" @input="change">
</template>

<script>
export default {
  props:{
    value:{
      type:[String,Number]
    },
    type:{
      validator(val) {
        return ['text','number'].indexOf(val) !== -1
      }
    }
  },
  methods:{
    change(e) {
      this.$emit('input',e.target.value)
    }
  }
}
</script>


<style scoped>
.input{
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
</style>