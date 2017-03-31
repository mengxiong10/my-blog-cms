// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path')

module.exports = {
  'from':path.resolve(__dirname,'src/css/'),
  "plugins":{
    'postcss-import': {},
    'postcss-short':{},
    'postcss-cssnext' : {},
  }
}
