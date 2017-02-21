<template>
  <header>
    <div class="logout">
      <i class="fa fa-power-off"></i>
      <span>退出登录</span>
    </div>
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
@import '~css/varible.less';
header{
  height: @header-height;
  line-height: @header-height;
  background: @header-bg;
  color:@header-color;
}
.logout{
  float: right;
  margin-right: 30px;
}
</style>
