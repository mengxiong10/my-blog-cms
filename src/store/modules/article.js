/*article*/
import api from 'src/api'

export default {
  state:{
    articleList:[],
    articleIndex:0
  },
  mutations:{
    setArticleList (state,arr) {
      state.articleList = arr
    },
    setCurArticle(state,article) {
      state.articleIndex = article.index
      if (article.article) {
        state.articleList.splice(state.articleIndex,1,article.article)
      }
    }
  },
  actions:{
    getArticleList ({commit,dispatch},params){
      api.getArticleList(params).then(res => {
        var data = res.data.data || []
        commit('setArticleList',data)
        //默认选中第一篇文章
        if (data.length) {
          dispatch('selectArticle',0)
        }
      })
    },
    selectArticle ({state,commit},index) {
      //选中当前文章
      var article = state.articleList[index]
      commit('setCurArticle',{index})
      //缓存content
      if (!article.content) {
        api.getArticleDetail(article.id).then(res => {
          commit('setCurArticle',{index,article:res.data.data})
        })
      }
    },
  }
}
