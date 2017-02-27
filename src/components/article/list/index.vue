<template>
  <div class="article-section-wrap clearfix">
    <div class="article-left-section">
      <div class="list-controller"></div>
      <article-list class="list" :articles="articles" :cur-index="curIndex"></article-list>
      <div class="page"></div>
    </div>
    <div class="article-right-section">
      <div class="detail-controller"></div>
      <template v-if="articles.length">
        <article-detail :article = "articles[curIndex]"></article-detail>
      </template>
    </div>
  </div>
</template>

<script>
import ArticleList from './article-list.vue'
import ArticleDetail from './article-detail.vue'
import {mapState, mapActions} from 'vuex'
import api from 'src/api'

export default {
  name:'article',
  components:{ArticleList,ArticleDetail},
  data () {
    return {

    }
  },
  computed:mapState({
    articles : ({article}) => article.articleList,
    curIndex : ({article}) => article.articleIndex
  }),
  methods:mapActions([
    'getArticleList'
  ]),
  created () {
    this.getArticleList()
  }
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
@import '~css/mixins.less';
.article-section-wrap{
  display: flex;
  height: 100%;
      background: #fff;
}
.article-left-section{
  flex:1;
  display: flex;
  flex-flow:column;
  min-width: 400px;
  border-right: 1px solid @border-bg;
}
.article-right-section{
  flex:2;
  overflow: auto;
}
.list-controller,.page{
  flex:0 0 50px;
  border-bottom: 1px solid @border-bg;
}
.list{
  flex:auto;
  overflow: auto;
}
</style>
