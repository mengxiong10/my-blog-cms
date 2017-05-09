<template>
  <div class="tags-container clearfix">
    <div class="tags" v-for="(item, index) in value">
      <span>{{item}}</span>
      <span class="del" title="删除" @click="del(index)">&times;</span>
    </div>
    <input class="tags-input" type="text" placeholder="按 Enter 创建"
    v-model="text"
    @keydown.enter="add(text)"
    @keydown.delete="del(-1)">
  </div>
</template>

<script>
export default {
  name: 'VTagInput',
  props: {
    value: Array
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    del (index) {
      if (index === -1 && this.text !== '') {
        return
      }
      this.value.splice(index, 1)
    },
    add (text) {
      if (text !== '') {
        this.value.push(text)
        this.text = ''
      }
    }
  }
}
</script>

<style scoped>
.tags-container{
  padding: 3px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1);
}
.tags{
  float: left;
  padding: .5em .8em;
  padding-right: 2em;
  margin:3px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  background-color: #5bc0de;
  text-align: center;
  white-space: nowrap;
  border-radius: .4em;
}
.del{
  position: absolute;
  font-size: 16px;
  margin-left: .5em;
  margin-top: -1px;
  cursor: pointer;
}
.tags-input{
  display: block;
  max-width: 100%;
  height: 24px;
  margin:3px;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  border:0;
  outline: 0;
}
</style>
