<template>
  <div>
    <v-dropdown class="controller">
      <span>排序</span>
      <v-dropmenu slot="dropdown" :options="sortOptions" v-model="sort"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="orderOptions" v-model="order"></v-dropmenu>
    </v-dropdown>
    <v-dropdown class="controller" :hide-on-click="true">
      <span>筛选</span>
      <v-dropmenu slot="dropdown" :options="tagOptions" v-model="tag"></v-dropmenu>
    </v-dropdown>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import api from 'src/api'

const setComputed = function (keys,get,set) {
  const res = {}
  console.log(keys)
  keys.forEach(key => {
    res[key] = {
      get () {
        return get[key]
      },
      set (val) {
        set({key:val})
      }
    }
  })
  console.log(res)
  return res
}

export default {
  data () {
    return {
      orderOptions:[
        {name:'升序',value:'asc'},
        {name:'降序',value:'desc'}
      ],
      sortOptions:[
        {name:'创建时间',value:'created_at'},
        {name:'更新时间',value:'updated_at'},
        {name:'标题',value:'title'}
      ],
      tagOptions:[{name:'全部',value:''}]
    }
  },
  computed:{
    // ...setComputed(['order','sort','tag'],this.$store.state.article.params,this.selectParam)
    order:{
      get () {
        return this.$store.state.article.params.order
      },
      set (val) {
        this.selectParam({order:val})
      }
    },
    sort:{
      get () {
        return this.$store.state.article.params.sort
      },
      set (val) {
        this.selectParam({sort:val})
      }
    },
    tag:{
      get () {
        return this.$store.state.article.params.tag
      },
      set (val) {
        this.selectParam({tag:val})
      }
    },
  },
  methods:mapActions(['selectParam']),
  created () {
    api.getTagList().then(res => {
      res.data.data.forEach(v => this.tagOptions.push({name:v.name,value:v.id}))
    })
  }

}
</script>

<style lang="less" scoped>
.controller{
  float: right;
  margin-right: 20px;
}
</style>
