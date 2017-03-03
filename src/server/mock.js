
import Mock from 'mockjs'

Mock.mock(/\/article\/list/,{
  "data|10":[{
    "id":"@id",
    "title":"@ctitle",
    "content":"@cparagraph(250)",
    "created_at":"@datetime",
    "comment_count|1-200":1,
    "visit_count|1-200":1,
    "tags|1-2":["@word(2)"]
  }],
  "total":200
})

Mock.mock(/\/tag\/list/,{
  "data|6":[{
    "id":"@id",
    "name":"@cword(2)"
  }]
})
