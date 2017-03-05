<template>
  <ul>
    <li class="list-group-item"
        v-for="(article,index) in articles"
        :class="{'active':curIndex === index}"
        @click="selectArticle(index)">
      <h4 class="text-overflow">{{article.title}}</h4>
      <span>{{article.created_at | date}}</span>
      <span title="访问量">{{article.visit_count}}</span>
      <span>{{article.status ? '已发布' : '草稿'}}</span>
      <span>{{article.tags.map(v => v.name).join()}}</span>
    </li>
  </ul>
</template>

<script>
import {mapActions} from 'vuex'
import Vue from 'vue'
export default {
  name:'articleList',
  props:{
    articles:Array,
    curIndex:Number
  },
  methods:mapActions(['selectArticle'])
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.list-group-item{
  height: 68px;
  padding:10px 20px;
  border-bottom:1px solid @border-bg;
  color:#5A738E;
  &:hover{
    background: @gray;
  }
  span{
    line-height: 2;
    margin-right: 30px;
  }
  span:last-of-type{
    float: right;
    margin-right: 0;
  }
}
.active{
  background: #eee;
}

</style>
