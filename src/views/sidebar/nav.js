export default [{
  name: '文章管理',
  icon: 'fa-file-text',
  children: [{
    name: '文章列表',
    path: { name: 'articleList' },
  }, {
    name: '添加文章',
    path: { name: 'articleAdd' },
  }],
}, {
  name: '标签列表',
  icon: 'fa-tags',
  path: { name: 'tagList' },
}]
