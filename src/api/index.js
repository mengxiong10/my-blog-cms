import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000'

axios.interceptors.request.use(function (req) {
  return req
})

axios.interceptors.response.use(function (res) {

  return res
},function (err) {

  return Promise.reject(err)
})

export default {
  upload (fd) {
    return axios.post(`/upload`,fd).then(res => {
      res.data.data = axios.defaults.baseURL + '/' + res.data.data
      return res 
    })
  },
  getArticleList (params) {
    return axios.get(`/article/list`,{params})
  },
  getArticleDetail (id) {
    return axios.get(`/article/${id}`)
  },
  addArticle (article) {
    return axios.post(`/article`,article)
  },
  updateArticle (id,article){
    return axios.put(`/article/${id}`,article)
  },
  delArticle (id) {
    return axios.delete(`/article/${id}`)
  },
  updateArticleStatus (id, status){
    return axios.put(`/article/${id}/status/${status}`)
  },
  getTagList () {
    return axios.get(`/tag/list`)
  },
  addTag (tag) {
    return axios.post(`/tag`,tag)
  },
  updateTag (id,tag) {
    return axios.put(`/tag/${id}`,tag)
  },
  delTag (id) {
    return axios.delete(`/tag/${id}`)
  }
}
