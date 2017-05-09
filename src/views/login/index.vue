<template>
  <div>
    <form class="login-content" @submit.prevent="login">
      <h1 class="login-title">后台管理</h1>
      <input type="text" class="login-input" v-model="user.username">
      <input type="password" class="login-input" v-model="user.password">
      <v-button class="login-btn" native-type="submit" type="primary">登录</v-button>
    </form>
  </div>
</template>

<script>
import api from 'src/api'

export default {
  data () {
    return {
      user: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    login () {
      api.login(this.user).then(() => {
        this.$router.push({ name: 'articleList' })
      })
    }
  }
}
</script>

<style scoped>
.login-content{
  width: 330px;
  margin:200px auto 0;
}
.login-title{
  margin-bottom: 30px;
  font-size: 24px/1;
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
.login-input{
  margin-bottom: 20px;
}
.login-btn{
  float:right;
  width: 100%;
}

</style>
