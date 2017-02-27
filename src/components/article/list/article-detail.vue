<template>
  <article>
    <h4>{{article.title}}</h4>
    <div class="content">{{article.content}}</div>
  </article>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name:'articleDetail',
  props:{
    article:Object
  },
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
h4{
  text-align: center;
}
.content{
  max-width: 800px;
  margin: 0 auto;
  padding:20px;
}

</style>

