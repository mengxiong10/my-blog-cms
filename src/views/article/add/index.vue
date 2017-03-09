<template>
  <div class="article-add">
    <h3 class="title">{{isArticleAdd ? '新的文章' : '修改文章'}}</h3>
    <form class="form-field" @submit.prevent="saveArticle">
      <section class="title-section">
        <label>标题 * </label>
        <input type="text" class="form-text" v-model="article.title" required>
      </section>
      <tag-section class="tag-section" :tags="article.tags"></tag-section>
      <section>
        <label>正文 * </label>
        <div class="editor">
          <simple-mde v-model="article.content"></simple-mde>
        </div>
      </section>
      <template v-if="isArticleAdd">
        <button type="submit" class="btn btn-success" @mousedown="changeStatus(1)">发表</button>
        <button type="submit" class="btn btn-primary" @mousedown="changeStatus(0)">保存为草稿</button>
      </template>
      <button v-else type="submit" class="btn btn-primary">保存</button>
    </form>
  </div>
</template>

<script>
import SimpleMde from './simple-mde.vue'
import TagSection from './tag-section.vue'
import api from 'src/api'
import {mapState, mapActions} from 'vuex'

function Article() {
  this.title = ''
  this.content = ''
  this.tags = []
  this.status = 0
}

export default {
  name:'articleAdd',
  components:{SimpleMde,TagSection},
  data () {
    return {
      article:{}
    }
  },
  computed:{
    isArticleAdd () {
      return this.$route.name === 'articleAdd'
    }
  },
  watch:{
    '$route':'getArticle'
  },
  methods:{
    getArticle (){
      if (this.isArticleAdd) {
        this.article = new Article()
      }else{
        api.getArticleDetail(this.$route.params.id).then(res => {
          this.article = res.data.data
        })
      }
    },
    changeStatus (status) {
      this.article.status = status
    },
    saveArticle (e) {
      var method = this.isArticleAdd ? api.addArticle : api.updateArticle
      method(this.article).then(res => {
        window.alert('保存成功')
        this.$router.push({name:'articleList'})
      })
    },
  },
  created () {
    this.getArticle()
  }
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.article-add{
  padding:10px 20px;
}
.title{
  margin-top: .5em;
  margin-bottom: 1em;
}
.form-field{
  label{
    display:inline-block;
    margin: 5px 0;
    font-weight: 700;
    &::after{
      content: ":";
    }
  }
}
.btn-primary{
  margin-left: 10px;
}
.title-section{
  display:inline-block;
  width:70%;
}
.tag-section{
  display:inline-block;
  width:10%;
  margin-left:25px;
}
</style>
