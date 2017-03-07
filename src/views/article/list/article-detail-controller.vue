<template>
  <div>
    <button type="button" class="btn btn-text" @click="updateStatus">{{statusText}}</button>
    <i class="fa fa-edit fa-2x fa-pull-right" title="编辑" @click="edit"></i>
    <i class="fa fa-trash-o fa-2x fa-pull-right" title="删除" @click="del"></i>
  </div>
</template>

<script>
import api from 'src/api'
import {mapActions} from 'vuex'
export default {
  name:'articleDetailController',
  props:{
    article:Object
  },
  computed:{
    statusText () {
      return this.article.status ? '撤回' : '发布'
    }
  },
  methods:{
    ...mapActions(['delCurrentArticle','updateArticleStatus']),
    del () {
      if (window.confirm('确认删除吗')) {
        api.delArticle(this.article._id).then(res => {
          this.delCurrentArticle()
        })
      }
    },
    edit () {
      this.$router.push({name:'articleEdit',params:{id:this.article._id}})
    },
    updateStatus () {
      api.updateArticleStatus(this.article._id,this.article.status ^ 1).then(res => {
        this.updateArticleStatus(res.data.status)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.fa-trash-o{
  margin-right: 12px;
  margin-top:-1px;
}
.fa{
  cursor: pointer;
}
</style>

