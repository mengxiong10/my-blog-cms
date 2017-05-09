<template>
  <div class="logout" @click="logout">
    <i class="fa fa-power-off"></i>
    <span>退出登录</span>
  </div>
</template>

<script>
import api from 'src/api'

export default {
  name: 'header',
  data () {
    return {
      img: ''
    }
  },
  methods: {
    logout () {
      api.logout().then(() => {
        this.$router.push({name: 'login'})
      })
    },
    upload (e) {
      const file = e.target.files[0]
      const fd = new FormData()
      fd.append('file', file)
      api.upload(fd).then(res => {
        this.img = res.data.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.logout{
  float: right;
  margin-top: 16px;
  margin-right: 30px;
  cursor: pointer;
}
</style>
