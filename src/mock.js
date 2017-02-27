
import Mock from 'mockjs'

Mock.mock(/\/article\/list/,{
  "data|10":[{
    "id":"@id",
    "title":"@ctitle",
    "created_at":"@datetime",
    "comment_count|1-200":1,
    "visit_count|1-200":1,
    "tags|1-2":["@cword(2)"]
  }],
  "total|10-100":10
})

Mock.mock(/\/article\/detail/,{
  "data":{
    "id":"@id",
    "title":"@ctitle",
    "content":"@cparagraph(250)",
    "created_at":"@datetime",
    "comment_count|1-200":1,
    "visit_count|1-200":1,
    "tags|1-2":["@word(2)"]
  }
})


