/* article */
import api from 'src/api'
import { merge } from 'src/server/utils'

export default {
  state: {
    articleList: [],
    currentArticle: {},
    totalPage: 0,
    params: { page: 1, perPage: 10, sort: 'created_at', order: 'desc', tag: '', status: '' }
  },
  mutations: {
    SET_ARTICLE_LIST (state, article) {
      state.articleList = article.list
      state.totalPage = article.total
    },
    SET_CURRENT_ARTICLE (state, article) {
      state.currentArticle = article
    },
    SET_PARAMS (state, param) {
      merge(state.params, param)
    },
    UPDATE_ARTICLE_STATUS (state, status) {
      state.currentArticle.status = status
    },
    DELETE_ARTICLE (state) {
      state.currentArticle = {}
    }
  },
  actions: {
    getArticleList ({ state, commit, dispatch }) {
      return api.getArticleList(state.params).then((res) => {
        const list = res.data.data || []
        const total = Math.ceil(res.data.total / state.params.perPage)
        commit('SET_ARTICLE_LIST', { list, total })
        // 默认选中第一篇文章
        if (list.length && state.currentArticle._id === undefined) {
          dispatch('selectArticle', list[0])
        }
      })
    },
    delCurrentArticle ({ state, commit, dispatch }) {
      const id = state.currentArticle._id
      return api.delArticle(id).then(() => {
        commit('DELETE_ARTICLE')
        dispatch('getArticleList')
      })
    },
    // 选中当前文章
    selectArticle ({ state, commit }, article) {
      commit('SET_CURRENT_ARTICLE', article)
    },
    selectParam ({ commit, dispatch }, param) {
      commit('SET_PARAMS', param)
      dispatch('getArticleList')
    },
    updateArticleStatus ({ state, commit }) {
      const id = state.currentArticle._id
      const status = state.currentArticle.status ^ 1
      return api.updateArticleStatus(id, status).then((res) => {
        commit('UPDATE_ARTICLE_STATUS', res.data.status)
      })
    }
  }
}
