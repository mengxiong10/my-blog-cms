<template>
  <article>
    <h4>{{article.title}}</h4>
    <div class="content">{{article.content}}</div>
  </article>
</template>

<script>
export default {
  name: 'articleDetail',
  props: {
    article: Object
  }
}
</script>

<style scoped>
h4{
  text-align: center;
  margin-top:20px;
}
.content{
  max-width: 800px;
  margin: 0 auto;
  padding:20px;
}
</style>
