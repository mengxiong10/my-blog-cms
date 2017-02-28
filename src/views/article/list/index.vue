<template>
  <div class="article-section-wrap clearfix">
    <div class="article-left-section">
      <article-list-controller class="list-controller"></article-list-controller>
      <article-list class="list" :articles="articles" :cur-index="curIndex"></article-list>
      <div class="page"></div>
    </div>
    <div class="article-right-section">
      <article-detail-controller class="detail-controller"></article-detail-controller>
      <template v-if="articles.length">
        <article-detail class="detail" :article = "articles[curIndex]"></article-detail>
      </template>
    </div>
  </div>
</template>

<script>
import ArticleList from './article-list.vue'
import ArticleDetail from './article-detail.vue'
import ArticleListController from './article-list-controller.vue'
import ArticleDetailController from './article-detail-controller.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name:'article',
  components:{ArticleList,ArticleDetail,ArticleListController,ArticleDetailController},
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
  display: flex;
  flex-flow:column;
}
.list-controller,.page,.detail-controller{
  flex:none;
  height: 50px;
  padding:12px 0;
  border-bottom: 1px solid @border-bg;
}
.detail-controller{
  margin:0 25px;
}
.list,.detail{
  flex:auto;
  overflow: auto;
}
.sort{
  float: right;
  margin-right: 20px;
}
</style>
