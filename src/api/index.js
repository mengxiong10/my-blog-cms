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
  getTagList () {
    return axios.get('/tag/list')
  },
  addTag (body) {
    return axios.post('/tag',body)
  }
}
