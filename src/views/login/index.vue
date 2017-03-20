<template>
  <div class="login-wrap">
    <form class="login-content" @submit.prevent="login">
      <h1 class="login-title">后台管理</h1>
      <input type="text" class="form-text" v-model="user.username">
      <input type="password" class="form-text" v-model="user.password">
      <button class="btn btn-primary">登录</button>
    </form>
  </div>
</template>

<script>
import api from 'src/api'
export default {
  data() {
    return {
      user:{
        username:'',
        password:'',
      }
    }
  },
  methods:{
    login() {
      api.login(this.user).then((res) => {
        this.$router.push({name:'articleList'})
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-content{
  width: 330px;
  margin:200px auto 0;
}
.login-title{
  margin-bottom: 30px;
  font-size: 24px;
  font-family: Helvetica;
  line-height: 1;
  text-align: center;
  &::before,&::after{
    content:'';
    height: 1px ;
    margin-top: 12px;
    width:20%;
    background: #7e7e7e;
  }
  &::before{
    float:left;
  }
  &::after{
    float:right;
  }
}
.form-text{
  margin-bottom: 20px;
}
.btn{
  float:right;
  width: 100%;
}

</style>