/*tag*/
import api from 'src/api'

export default {
  state:{
    tagList:[]
  },
  mutations:{
    SET_TAG_LIST (state,tags) {
      state.tagList = tags
    },
    ADD_TAG (state,tag){
      state.tagList.push(tag)
    }
  },
  actions:{
    getTagList ({state,commit}){
      if (state.tagList.length !== 0) {return}
      return api.getTagList().then(res => {
        commit('SET_TAG_LIST',res.data.data)
      })
    },
    addTag ({commit},tag) {
      return api.addTag({name:tag}).then(res => {
        commit('ADD_TAG',res.data.data)
      })
    }
  }
}
