export default [{
  name:'文章管理',
  open:true,
  children:[{
    name:'文章列表',
    path:{name:'articleList'}
  },{
    name:'添加文章',
    path:'/article/add'
  }]
},{
  name:'标签管理',
  open:false,
  children:[{
    name:'标签列表',
    path:{name:'tagList'}
  }]
}]
