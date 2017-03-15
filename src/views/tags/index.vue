<template>
  <div class="tag-list-section">
    <h3 class="tag-title">标签</h3>
    <ul class="tag-list">
      <li class="tag" v-for="(tag,index) in tagList" @click="edit(tag,index)">
        <span>{{tag.name}}</span>
        <i class="fa fa-times" title="删除" @click.stop="del(index)"></i>
      </li>
      <li class="tag" @click="showAdd">
        <i class="fa fa-plus"></i>
        添加
      </li>
    </ul>
    <add-tag :tag="currentTag" :index="currentIndex" ref="tagForm"></add-tag>
  </div>
</template>

<script>
import AddTag from './add.vue'
import {mapState, mapActions} from 'vuex'
export default {
  name:'tagList',
  components:{AddTag},
  data () {
    return {
      currentTag:null,
      currentIndex:-1
    }
  },
  computed:mapState({tagList: ({tag}) => tag.tagList}),
  methods:{
    edit (tag,index) {
      this.currentTag = tag
      this.currentIndex = index 
      this.$refs.tagForm.show()
    },
    showAdd () {
      this.currentTag = null 
      this.currentIndex = -1
      this.$refs.tagForm.show()
    },
    del (index) {
      this.delTag(index)
    },
    ...mapActions(['getTagList','delTag'])
  },
  created(){
    this.getTagList()
  }
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
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
  border:1px solid @border-bg;
  border-radius: 4px;
}
.fa-times:hover{
  color:@red;
}
.tag{
  display: inline-block;
  min-width: 60px;
  text-align: center;
  padding:.2em .5em;
  margin:.5em;
  border:1px solid @border-bg;
  border-radius: 10px;
  color:#333;
  cursor: pointer;
}
</style>