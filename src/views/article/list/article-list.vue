<template>
  <ul>
    <li class="list-group-item"
        v-for="(article,index) in articles"
        :class="{'active':curIndex === index}"
        @click="selectArticle(index)">
      <h4 class="text-overflow">{{article.title}}</h4>
      <span>{{article.created_at}}</span>
      <span>{{article.comment_count}}</span>
      <span>{{article.visit_count}}</span>
      <span>{{article.tags.join()}}</span>
    </li>
  </ul>
</template>

<script>
import {mapActions} from 'vuex'
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
  }
  span:nth-of-type(2){
    margin-left: 30px;
    &::after{
      content:' /'
    }
  }
  span:last-of-type{
    float: right;
  }
}
.active{
  background: #eee;
}

</style>
