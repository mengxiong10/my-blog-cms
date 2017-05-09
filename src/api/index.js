import axios from 'axios'
import router from '../router.js'

const preResData = undefined
const preResError = (err) => {
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
}
// 全局响应拦截器
axios.interceptors.response.use(preResData, preResError)
axios.defaults.baseURL = 'http://localhost:9000'
axios.defaults.withCredentials = true // cors cookie

export default {
  login (user) {
    return axios.post('/admin/login', user)
  },
  logout () {
    return axios.post('/admin/logout')
  },
  upload (fd) {
    return axios.post('/upload', fd).then((res) => {
      res.data.data = axios.defaults.baseURL + '/' + res.data.data
      return res
    })
  },
  getArticleList (params) {
    return axios.get('/article/list', { params })
  },
  getArticleDetail (id) {
    return axios.get(`/article/${id}`)
  },
  addArticle (article) {
    return axios.post('/article', article)
  },
  updateArticle (id, article) {
    return axios.put(`/article/${id}`, article)
  },
  delArticle (id) {
    return axios.delete(`/article/${id}`)
  },
  updateArticleStatus (id, status) {
    return axios.put(`/article/${id}/status/${status}`)
  },
  getTagList () {
    return axios.get('/tag/list')
  },
  addTag (tag) {
    return axios.post('/tag', tag)
  },
  updateTag (id, tag) {
    return axios.put(`/tag/${id}`, tag)
  },
  delTag (id) {
    return axios.delete(`/tag/${id}`)
  }
}
