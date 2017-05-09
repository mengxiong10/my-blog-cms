<template>
  <div class="article-add">
    <h3 class="title">{{isArticleAdd ? '新的文章' : '修改文章'}}</h3>
    <form class="form-wrap" @submit.prevent="saveArticle">
      <section class="title-section">
        <label>标题 * </label>
        <input type="text" v-model="article.title" required>
      </section>
      <tag-section class="tag-section" :tags="article.tags"></tag-section>
      <section>
        <label>正文 * </label>
        <div class="editor">
          <simple-mde v-model="article.content"></simple-mde>
        </div>
      </section>
      <template v-if="isArticleAdd">
        <v-button native-type="submit" type="success" @mousedown.native="changeStatus(1)">发表</v-button>
        <v-button native-type="submit" type="primary" @mousedown.native="changeStatus(0)">保存为草稿</v-button>
      </template>
      <v-button v-else native-type="submit" type="primary">保存</v-button>
    </form>
  </div>
</template>

<script>
import api from 'src/api'
import SimpleMde from './simple-mde.vue'
import TagSection from './tag-section.vue'

function Article () {
  this.title = ''
  this.content = ''
  this.tags = []
  this.status = 0
}

export default {
  name: 'articleAdd',
  components: { SimpleMde, TagSection },
  data () {
    return {
      article: {}
    }
  },
  computed: {
    isArticleAdd () {
      return this.$route.name === 'articleAdd'
    }
  },
  watch: {
    '$route': 'getArticle'
  },
  methods: {
    getArticle () {
      if (this.isArticleAdd) {
        this.article = new Article()
      } else {
        api.getArticleDetail(this.$route.params.id).then((res) => {
          this.article = res.data.data
        })
      }
    },
    changeStatus (status) {
      this.article.status = status
    },
    saveArticle () {
      const p = this.isArticleAdd
        ? api.addArticle(this.article)
        : api.updateArticle(this.article._id, this.article)
      p.then(() => {
        this.$modal.alert('保存成功')
        this.$router.push({ name: 'articleList' })
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style scoped>
@import 'varible.css';
.article-add{
  padding:10px 20px;
}
.title{
  margin-top: .5em;
  margin-bottom: 1em;
}
.form-wrap{
  padding:1em;
  border:var(--border-default);
  & label{
    display:inline-block;
    margin: 5px 0;
    font-weight: 700;
    &::after{
      content: ":";
    }
  }
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
