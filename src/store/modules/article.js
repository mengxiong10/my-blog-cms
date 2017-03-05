/*article*/
import api from 'src/api'
import {merge} from 'src/server/utils'

export default {
  state:{
    articleList:[],
    articleIndex:0,
    totalPage:0,
    params:{page:1,perPage:10,sort:'created_at',order:'desc',tag:''}
  },
  mutations:{
    SET_ARTICLE_LIST (state,article) {
      state.articleList = article.list
      state.totalPage = article.total
    },
    SET_CURRENT_ARTICLE(state,article) {
      state.articleIndex = article.index
    },
    SET_PARAMS(state,param){
      merge(state.params,param)
    }
  },
  actions:{
    getArticleList ({state,commit,dispatch}){
      return api.getArticleList(state.params).then(res => {
        var list = res.data.data || []
        var total = Math.ceil(res.data.total / state.params.perPage)
        commit('SET_ARTICLE_LIST',{list,total})
        //默认选中第一篇文章
        if (list.length) {
          dispatch('selectArticle',0)
        }
      })
    },
    selectArticle ({state,commit},index) {
      //选中当前文章
      var article = state.articleList[index]
      commit('SET_CURRENT_ARTICLE',{index})
    },
    selectParam({commit,dispatch},param){
      commit('SET_PARAMS',param)
      dispatch('getArticleList')
    }
  }
}
