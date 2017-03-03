<template>
  <div class="article-add">
    <h3 class="title">新的文章</h3>
    <form class="form-field">
      <section class="title-section">
        <label>添加标题 * </label>
        <input type="text" class="form-text">
      </section>
      <tag-section class="tag-section" :tags="tags"></tag-section>
      <section>
        <label>正文 * </label>
        <div class="editor">
          <simple-mde v-model="content"></simple-mde>
        </div>
      </section>
      <button type="submit" class="btn btn-success">发表</button>
      <button type="button" class="btn btn-primary">保存为草稿</button>
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
      content:'',
      tags:[]
    }
  },
  methods:{

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
