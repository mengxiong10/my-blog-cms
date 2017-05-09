/* tag */
import api from 'src/api'

export default {
  state: {
    tagList: []
  },
  mutations: {
    SET_TAG_LIST (state, tags) {
      state.tagList = tags
    },
    ADD_TAG (state, tag) {
      state.tagList.push(tag)
    },
    UPDATE_TAG (state, { tag, index }) {
      state.tagList.splice(index, 1, tag)
    },
    DEL_TAG (state, index) {
      state.tagList.splice(index, 1)
    }
  },
  actions: {
    getTagList ({ state, commit }) {
      if (state.tagList.length !== 0) { return }
      api.getTagList().then(res => {
        commit('SET_TAG_LIST', res.data.data)
      })
    },
    addTag ({ commit }, tag) {
      return api.addTag({ name: tag }).then(res => {
        commit('ADD_TAG', res.data.data)
      })
    },
    updateTag ({ commit }, { id, tag, index }) {
      return api.updateTag(id, { name: tag }).then(res => {
        commit('UPDATE_TAG', { tag: res.data.data, index })
      })
    },
    delTag ({ state, commit }, index) {
      const id = state.tagList[index]._id
      return api.delTag(id).then(() => {
        commit('DEL_TAG', index)
      })
    }
  }
}
