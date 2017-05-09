<template>
  <div class="tag-list-section">
    <h3 class="tag-title">标签</h3>
    <ul class="tag-list">
      <li class="tag" v-for="(tag,index) in tagList" @click="edit(tag,index)">
        <span>{{tag.name}}</span>
        <i class="fa fa-times" title="删除" @click.stop="del(index)"></i>
      </li>
      <li class="tag" @click="add">
        <i class="fa fa-plus"></i>
        添加
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'tagList',
  computed: mapState({ tagList: ({ tag }) => tag.tagList }),
  methods: {
    edit (tag, index) {
      this.$modal.prompt({title: '修改标签', text: tag.name}).then((data) => {
        return this.updateTag({ id: tag._id, tag: data, index })
      }, () => {})
    },
    add () {
      this.$modal.prompt({title: '添加标签'}).then((data) => {
        return this.addTag(data)
      }, () => {})
    },
    del (index) {
      this.delTag(index)
    },
    ...mapActions(['getTagList', 'delTag', 'addTag', 'updateTag'])
  },
  created () {
    this.getTagList()
  }
}
</script>

<style scoped>
@import 'varible.css';
.tag-list-section{
  padding:10px 20px;
}
.tag-title{
  margin-top: .5em;
  margin-bottom: 1em;
}
.tag-list{
  padding:1em;
  background: #fff;
  border:var(--border-default);
  border-radius: 4px;
}
.fa-times:hover{
  color:var(--color-red);
}
.tag{
  display: inline-block;
  min-width: 60px;
  text-align: center;
  padding:.2em .5em;
  margin:.5em;
  border:var(--border-default);
  border-radius: 10px;
  color:#333;
  cursor: pointer;
}
</style>
