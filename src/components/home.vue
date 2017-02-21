<template>
  <div>
    <sidebar class="sidebar"></sidebar>
    <header-view></header-view>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from 'components/sidebar'
import HeaderView from 'components/header'
export default {
  components:{Sidebar,HeaderView},
  name:'home',
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.sidebar{
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  width:@left-nav-width;
  background: @left-nav-bg;
}
.content{
  position: absolute;
  top:@header-height;
  bottom: 0;
  left: @left-nav-width;
  right: 0;
  padding:10px 20px;
  background: @main-bg;
}

</style>
