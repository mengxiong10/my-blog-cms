/*article*/
import api from 'src/api'
import {merge} from 'src/server/utils'

export default {
  state:{
    articleList:[],
    articleIndex:0,
    totalPage:1,
    params:{page:1,perPage:10,sort:'created_at',order:'desc',tag:''}
  },
  mutations:{
    setArticleList (state,article) {
      state.articleList = article.list
      state.totalPage = article.total
    },
    setCurArticle(state,article) {
      state.articleIndex = article.index
    },
    setParams(state,param){
      merge(state.params,param)
    }
  },
  actions:{
    getArticleList ({state,commit,dispatch}){
      api.getArticleList(state.params).then(res => {

        var list = res.data.data || []
        var total = Math.ceil(res.data.total / state.params.perPage)
        console.log(res,total)
        commit('setArticleList',{list,total})
        //默认选中第一篇文章
        if (list.length) {
          dispatch('selectArticle',0)
        }
      })
    },
    selectArticle ({state,commit},index) {
      //选中当前文章
      var article = state.articleList[index]
      commit('setCurArticle',{index})
    },
    selectParam({commit,dispatch},param){
      commit('setParams',param)
      dispatch('getArticleList')
    }
  }
}
