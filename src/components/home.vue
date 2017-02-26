<template>
  <div>
    <div class="sidebar-section">
      <sidebar-header></sidebar-header>
      <sidebar-nav></sidebar-nav>
    </div>
    <div class="header-section">
      <header-view></header-view>
    </div>
    <div class="content-section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarNav from 'components/sidebar/nav.vue'
import SidebarHeader from 'components/sidebar/header.vue'
import HeaderView from 'components/header'
export default {
  components:{SidebarHeader,SidebarNav,HeaderView},
  name:'home',
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.sidebar-section{
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  width:@left-nav-width;
  color:@left-nav-color;
  background: @left-nav-bg;
}
.header-section{
  height: @header-height;
  line-height: @header-height;
  background: @header-bg;
  color:@header-color;
  border-bottom: 1px solid @border-bg;
}
.content-section{
  position: absolute;
  top:@header-height;
  bottom: 0;
  left: @left-nav-width;
  right: 0;
  background: @main-bg;
  overflow-y:auto;
}

</style>
