<template>
  <div class="controller-wrap">
    <v-dropdown  position="left" :hide-on-click="true">
      <i class="fa fa-flag"></i>
      <!--<span>状态</span>-->
      <v-dropmenu slot="dropdown" :options="statusOptions" v-model="status"></v-dropmenu>
    </v-dropdown>
    <v-dropdown class="u-pull-right">
      <span>排序</span>
      <v-dropmenu slot="dropdown" :options="sortOptions" v-model="sort"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="orderOptions" v-model="order"></v-dropmenu>
    </v-dropdown>
    <v-dropdown class="tag-controller u-pull-right" :hide-on-click="true">
      <span>标签</span>
      <v-dropmenu slot="dropdown" :options="[{name:'全部',_id:''}]" option-key="_id" v-model="tag"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="tagOptions" option-key="_id" v-model="tag"></v-dropmenu>
    </v-dropdown>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    tagOptions: Array
  },
  data () {
    return {
      orderOptions: [
        { name: '升序', value: 'asc' },
        { name: '降序', value: 'desc' }
      ],
      sortOptions: [
        { name: '创建时间', value: 'created_at' },
        { name: '更新时间', value: 'updated_at' },
        { name: '标题', value: 'title' }
      ],
      statusOptions: [
        { name: '全部', value: '' },
        { name: '草稿', value: 0 },
        { name: '已发布', value: 1 }
      ]
    }
  },
  computed: ((keys) => {
    const res = {}
    keys.forEach((key) => {
      res[key] = {
        get () {
          return this.$store.state.article.params[key]
        },
        set (val) {
          this.selectParam({ [key]: val })
        }
      }
    })
    return res
  })(['order', 'sort', 'tag', 'status']),
  methods: mapActions(['selectParam'])
}
</script>

<style scoped>
.controller-wrap{
  padding:12px 20px;
}
.tag-controller{
  margin-right: 20px;
}
</style>
