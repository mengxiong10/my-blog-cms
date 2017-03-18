<template>
  <div class="logout">
    <button class="btn">上传</button>
    <input type="file" @change="upload">
    <img :src="img" alt="">
    <i class="fa fa-power-off"></i>
    <span>退出登录</span>
  </div>
</template>

<script>
import api from 'src/api'
export default {
  data() {
    return {
      img:'',
    }
  },
  methods:{
    upload (e) {
      const file = e.target.files[0]
      const fd = new FormData()
      fd.append('file',file)
      api.upload(fd).then(res => {
        this.img = res.data.data 
      })
    }
  },
}
</script>

<style lang="less" scoped>
.logout{
  float: right;
  margin-right: 30px;
}
</style>
