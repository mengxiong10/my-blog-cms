<template>
  <div>
    <v-button type="text" @click.native="updateArticleStatus">{{statusText}}</v-button>
    <i class="fa fa-edit fa-2x u-pull-right u-pointer" title="编辑" @click="edit"></i>
    <i class="fa fa-trash-o fa-2x u-pull-right u-pointer" title="删除" @click="del"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'articleDetailController',
  props: {
    article: Object
  },
  computed: {
    statusText () {
      return this.article.status ? '撤回' : '发布'
    }
  },
  methods: {
    edit () {
      this.$router.push({ name: 'articleEdit', params: { id: this.article._id } })
    },
    del () {
      this.$modal.confirm('确认删除这篇文章吗?').then(this.delCurrentArticle, () => {})
    },
    ...mapActions(['delCurrentArticle', 'updateArticleStatus'])
  }
}
</script>

<style scoped>
.fa-trash-o{
  margin-right: 12px;
  margin-top:-1px;
}
</style>
