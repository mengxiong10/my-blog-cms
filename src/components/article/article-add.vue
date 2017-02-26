<template>
  <div class="article-add">
    <h3 class="title">新的文章</h3>
    <form class="form-field">
      <label>添加标题 * </label>
      <input type="text" class="form-text">
      <label>标签</label>
      <tag-input :value="tags"></tag-input>
      <label>正文 * </label>
      <div class="editor">
        <simple-mde v-model="content"></simple-mde>
      </div>
      <button type="submit" class="btn btn-success">发表</button>
      <button type="button" class="btn btn-primary">保存为草稿</button>
    </form>
  </div>
</template>

<script>
import SimpleMde from './simple-mde.vue'
import TagInput from 'modules/tag-input.vue'

export default {
  name:'articleAdd',
  components:{SimpleMde,TagInput},
  data () {
    return {
      content:'',
      tags:[]
    }
  },
  methods:{

  },
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
    display: inline-block;
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
</style>
