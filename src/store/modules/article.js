/*article*/
import api from 'src/api'
import {merge} from 'src/server/utils'

export default {
  state:{
    articleList:[],
    articleIndex:0,
    params:{page:1,perPage:10,sort:'created_at',order:'desc',tag:''}
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
    },
    setParams(state,param){
      merge(state.params,param)
    }
  },
  actions:{
    getArticleList ({state,commit,dispatch}){
      api.getArticleList(state.params).then(res => {
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
    selectParam({commit,dispatch},param){
      console.log(param)
      commit('setParams',param)
      dispatch('getArticleList')
    }
  }
}
