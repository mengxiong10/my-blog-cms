<template>
  <div>
    <h3 class="title">新的文章</h3>
    <form class="form-field">
      <label>添加标题</label>
      <input type="text" class="form-text">
      <label>正文</label>
      <div class="editor">
        <simple-mde v-model="content"></simple-mde>
      </div>
    </form>
  </div>
</template>

<script>
import SimpleMde from './simple-mde.vue'
export default {
  name:'addArticle',
  components:{SimpleMde},
  data () {
    return {
      content:'',
    }
  },
  methods:{

  },
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.title{
  margin-top: .5em;
  margin-bottom: 1em;
}
.form-field{
  label{
    display: inline-block;
    margin: 5px 0;
    font-weight: bold;
    &::after{
      content: ":";
    }
  }
}

</style>
