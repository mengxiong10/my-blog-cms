<template>
  <div>
    <button type="button" class="btn btn-text" @click="updateArticleStatus">{{statusText}}</button>
    <i class="fa fa-edit fa-2x fa-pull-right" title="编辑" @click="edit"></i>
    <i class="fa fa-trash-o fa-2x fa-pull-right" title="删除" @click="del"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'articleDetailController',
  props: {
    article: Object,
  },
  computed: {
    statusText() {
      return this.article.status ? '撤回' : '发布'
    },
  },
  methods: {
    edit() {
      this.$router.push({ name: 'articleEdit', params: { id: this.article._id } })
    },
    del() {
      this.$modal.confirm('确认删除这篇文章吗?').then(this.delCurrentArticle, () => {})
    },
    ...mapActions(['delCurrentArticle', 'updateArticleStatus']),
    
  },
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

