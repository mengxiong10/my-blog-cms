<template>
  <div id="app">
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
    <v-modal></v-modal>
  </div>
</template>

<script>
import SidebarNav from './sidebar/nav.vue'
import SidebarHeader from './sidebar/header.vue'
import HeaderView from './header'
import VModal from '../components/v-modal.vue'

export default {
  name: 'container',
  components: { SidebarHeader, SidebarNav, HeaderView, VModal }
}
</script>

<style scoped>
@import 'varible.css';
.sidebar-section{
  position: absolute 0 * 0 0;
  width:var(--left-nav-width);  
  color:var(--left-nav-color) var(--left-nav-bg);
}
.header-section{
  height: var(--header-height);
  color: var(--header-color) var(--header-bg);
  border-bottom:var(--border-default);
}
.content-section{
  position:absolute var(--header-height) 0 0 var(--left-nav-width);
  overflow-y:auto; 
}
</style>
