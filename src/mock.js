var Mock = require('mockjs')

Mock.mock('\/article\/list',{
  "data|10":[{
    "id":"@id",
    "title":"@ctitle",
    "created_at":"@datatime",
    "comment_count|1-200":1,
    "visit_count|1-200":1,
    "tags|1-2":["@cword(2)"]
  }],
  "total|10-100":10
})

Mock.mock('\/article\/\d+',{
  "data":{
    "id":"@id",
    "title":"@ctitle",
    "content":"@@cparagraph",
    "created_at":"@datatime",
    "comment_count|1-200":1,
    "visit_count|1-200":1,
    "tags|1-2":["@cword(2)"]
  }
})
