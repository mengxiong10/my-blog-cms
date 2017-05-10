/* eslint-disable */
import Mock from 'mockjs'

Mock.mock(/\/article\/list/, {
  "data|10": [{
    "_id": "@id",
    "title": "@ctitle",
    "content": "@cparagraph(250)",
    "created_at": "@datetime",
    "comment_count|1-200": 1,
    "visit_count|1-200": 1,
    "status|1": [0, 1],
    "tags|1-2": [{ name: "@word(2)" }]
  }],
  "total": 200
})

Mock.mock(/\/article\/\d+/, {
  "data": {
    "_id": "@id",
    "title": "@ctitle",
    "content": "@cparagraph(250)",
    "created_at": "@datetime",
    "comment_count|1-200": 1,
    "visit_count|1-200": 1,
    "status|1": [0, 1],
    "tags|1-2": [{ name: "@word(2)" }]
  }
})

Mock.mock(/\/article/, 'post', 'ok')
Mock.mock(/\/article\/\d+/, 'put', 'ok')
Mock.mock(/\/article\/\d+/, 'delete', 'ok')

Mock.mock(/\/tag\/list/, {
  "data|6": [{
    "_id": "@id",
    "name": "@cword(2)"
  }]
})

Mock.mock(/\/tag/, 'post', (options) => {
  let data = JSON.parse(options.body)
  data._id = Mock.mock('@id')
  return { data }
})

Mock.mock(/\/tag\/\d+/, 'delete', 'ok')

Mock.mock(/\/tag\/\d+/, 'put', (options) => ({ data: JSON.parse(options.body) }))

Mock.mock(/\/admin\/login/, 'post', 'ok')
Mock.mock(/\/admin\/logout/, 'post', 'ok')
