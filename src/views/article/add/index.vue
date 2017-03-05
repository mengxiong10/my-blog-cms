<template>
  <div class="article-add">
    <h3 class="title">新的文章</h3>
    <form class="form-field">
      <section class="title-section">
        <label>标题 * </label>
        <input type="text" class="form-text" v-model="article.title">
      </section>
      <tag-section class="tag-section" :tags="article.tags"></tag-section>
      <section>
        <label>正文 * </label>
        <div class="editor">
          <simple-mde v-model="article.content"></simple-mde>
        </div>
      </section>
      <button type="button" class="btn btn-success" @click="saveArticle">发表</button>
      <button type="button" class="btn btn-primary" @click="saveArticle">保存为草稿</button>
    </form>
  </div>
</template>

<script>
import SimpleMde from './simple-mde.vue'
import TagSection from './tag.vue'
import api from 'src/api'

export default {
  name:'articleAdd',
  components:{SimpleMde,TagSection},
  data () {
    return {
      article:{
        title:'',
        content:'',
        tags:[],
        status:0
      }
    }
  },
  methods:{
    saveArticle () {
      this.article.status = 1
      api.addArticle(this.article).then(res => {
        window.alert('保存成功')
        console.log(res)
      })
    },
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
