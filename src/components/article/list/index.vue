<template>
  <div class="article-section-wrap clearfix">
    <div class="article-left-section">
      <div class="list-controller">
      </div>
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
import DropDown from 'modules/dropdown'
import {mapState, mapActions} from 'vuex'

export default {
  name:'article',
  components:{ArticleList,ArticleDetail,DropDown},
  data () {
    return {
      sort:[],
      options:[
        [{name:'升序',value:'asc'},{name:'降序',value:'desc'}],
        [{name:'创建时间',value:'created_at'},{name:'更新时间',value:'updated_at'},{name:'标题',value:'title'}]
      ]
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
  line-height: 50px;
  border-bottom: 1px solid @border-bg;
}
.list{
  flex:auto;
  overflow: auto;
}
.sort{
  float: right;
  margin-right: 20px;
}
</style>
