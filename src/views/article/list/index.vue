<template>
  <div class="article-section-wrap clearfix">
    <div class="article-left-section">
      <article-list-controller class="list-controller" :tag-options="tagList" @del="getArticleList"></article-list-controller>
      <article-list class="list" :articles="articles" :current-article="currentArticle"></article-list>
      <v-page v-if="totalPage > 0" class="page" :total="totalPage" v-model="currentPage"></v-page>
    </div>
    <div class="article-right-section">
      <template v-if="currentArticle">
        <article-detail-controller class="detail-controller" :article = "currentArticle"></article-detail-controller>
        <article-detail class="detail" :article = "currentArticle"></article-detail>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ArticleList from './article-list.vue'
import ArticleDetail from './article-detail.vue'
import ArticleListController from './article-list-controller.vue'
import ArticleDetailController from './article-detail-controller.vue'

export default {
  name: 'article',
  components: { ArticleList, ArticleDetail, ArticleListController, ArticleDetailController },
  computed: {
    currentPage: {
      get () {
        return this.$store.state.article.params.page
      },
      set (page) {
        this.selectParam({ page })
      }
    },
    ...mapState({
      totalPage: ({ article }) => article.totalPage,
      articles: ({ article }) => article.articleList,
      currentArticle: ({ article }) => article.currentArticle,
      tagList: ({ tag }) => tag.tagList
    })
  },
  methods: mapActions(['getArticleList', 'selectParam', 'getTagList']),
  created () {
    this.getArticleList()
    this.getTagList()
  }
}
</script>

<style scoped>
@import 'varible.css';
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
  border-right: var(--border-default);
}
.article-right-section{
  flex:2;
  display: flex;
  flex-flow:column;
}
.list-controller,.detail-controller{
  flex:none;
  height: 50px;
  border-bottom: var(--border-default);
}
.page{
  padding:20px 0;
}
.detail-controller{
  padding:12px 0;
  margin:0 25px;
}
.list,.detail{
  overflow: auto;
}
.list{
  height: 680px;
}
.sort{
  float: right;
  margin-right: 20px;
}
</style>
