<template>
  <header class="clearfix">
    <h1>博客后台管理</h1>
    <img class="profile-pic" src="../../image/admin.jpg" height="180" width="180" alt="">
    <span class="profile-info">admin</span>
  </header>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>


<style lang="less" scoped>
h1{
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 10px;
}
header{
  padding:10px;
}
.profile-pic {
  float: left;
  width: 60px;
  height: 60px;
  padding: 4px;
  margin:0 10px;
  background: #fff;
  border: 1px solid rgba(52,73,94,.5);
  border-radius: 50%;

}
.profile-info{
  line-height: 60px;
}
</style>
