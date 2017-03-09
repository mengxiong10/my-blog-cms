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
  getArticleList (params) {
    return axios.get('/article/list',{params})
  },
  getArticleDetail (id) {
    return axios.get(`/article/${id}`)
  },
  addArticle (article) {
    return axios.post('/article',article)
  },
  updateArticle (article){
    return axios.put(`/article/${article._id}`,article)
  },
  delArticle (id) {
    return axios.delete(`/article/${id}`)
  },
  updateArticleStatus (id, status){
    return axios.put(`/article/${id}/status/${status}`)
  },
  getTagList () {
    return axios.get('/tag/list')
  },
  addTag (body) {
    return axios.post('/tag',body)
  }
}
