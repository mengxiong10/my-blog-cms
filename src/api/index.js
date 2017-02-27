import axios from 'axios'

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
    return axios.get('/article/detail',{params:{id}})
  }
}
