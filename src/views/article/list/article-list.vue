<template>
  <ul>
    <li class="list-group-item"
        v-for="(article,index) in articles"
        :class="{'active':currentArticle._id === article._id}"
        @click="selectArticle(article)">
      <h4 class="u-truncate">{{article.title}}</h4>
      <span>{{article.created_at | date}}</span>
      <span title="访问量">{{article.visit_count}}</span>
      <span>{{article.status ? '已发布' : '草稿'}}</span>
      <span>{{article.tags.map(v => v.name).join()}}</span>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'articleList',
  props: {
    articles: Array,
    currentArticle: Object
  },
  methods: mapActions(['selectArticle'])
}
</script>

<style scoped>
@import 'varible.css';
.list-group-item{
  height: 68px;
  padding:10px 20px;
  border-bottom:var(--border-default);
  &:hover{
    background:color(var(--color-silver) tint(40%)) ;
  }
  &.active{
    background: var(--color-silver);
  }
  & span{
    line-height: 2;
    margin-right: 30px;
  }
  & span:last-of-type{
    float: right;
    margin-right: 0;
  }
}

</style>
