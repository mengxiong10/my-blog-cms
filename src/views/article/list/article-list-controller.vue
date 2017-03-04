<template>
  <div>
    <v-dropdown class="controller">
      <span>排序</span>
      <v-dropmenu slot="dropdown" :options="sortOptions" v-model="sort"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="orderOptions" v-model="order"></v-dropmenu>
    </v-dropdown>
    <v-dropdown class="controller" :hide-on-click="true">
      <span>筛选</span>
      <v-dropmenu slot="dropdown" :options="tagOptions" option-key="_id" v-model="tag"></v-dropmenu>
    </v-dropdown>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import api from 'src/api'

const setComputed = function (keys) {
  const res = {}
  keys.forEach(key => {
    res[key] = {
      get () {
        return this.$store.state.article.params[key]
      },
      set (val) {
        this.selectParam({[key]:val})
      }
    }
  })
  return res
}

export default {
  props:{
    tagOptions:Array
  },
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
      ]
    }
  },
  computed:setComputed(['order','sort','tag']),
  methods:mapActions(['selectParam']),
}
</script>

<style lang="less" scoped>
.controller{
  float: right;
  margin-right: 20px;
}
</style>
