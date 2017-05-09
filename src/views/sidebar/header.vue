<template>
  <header class="clearfix">
    <h1>博客后台管理</h1>
    <img class="profile-pic" src="../../image/admin.jpg" height="180" width="180" alt="avatar">
    <span class="profile-info">admin</span>
    <div class="test"></div>
  </header>
</template>

<script>
export default {
  name: 'sidebarHeader',
  data () {
    return {

    }
  }
}
</script>

<style  scoped>

header{
  padding:10px;
}
h1{
  margin-left: 10px;
  margin-bottom: 10px;
}
.profile-pic {
  display:inline-block;
  width: 60px;
  height: 60px;
  padding: 4px;
  margin:10px;
  vertical-align: middle;
  background: #fff;
  border-radius: 50%;
}

</style>
