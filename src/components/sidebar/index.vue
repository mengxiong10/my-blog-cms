<template>
<div>
  <header></header>
  <ul class="nav-list">
    <li v-for="link in links">
      <template v-if="link.children">
        <a class="first-nav" @click="link.open = !link.open">
          <i class="fa fa-file-text"></i>
          <span>{{link.name}}</span>
          <i class="fa fa-angle-down fa-lg" :class="{'fa-rotate-180':link.open}"></i>
        </a>
        <ul v-show = "link.open">
          <li v-for="item in link.children">
            <router-link class="second-nav" :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </template>
      <router-link v-else class="first-nav" :to="link.path">{{link.name}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
import links from './links.js'
  export default{
    name:'nav',
    data () {
      return {
        links,
      }
    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>
@import '~css/varible';
.nav-list{
  font-size: 16px;
  color:#eee;
}
.fa-angle-down{
  position: absolute;
  right: 20px;
  top:50%;
  margin-top: -8px;
  transition:transform .3s;
}
.fa-file-text{
  margin-right: .5em;
}
.first-nav,.second-nav{
  position: relative;
  display: block;
  height: 50px;
  line-height: 50px;
}
.first-nav{
  padding-left: 1.5em;
  font-weight: bold;
  cursor: pointer;
}
.second-nav{
  padding-left:3.5em;
  border-left: 3px solid transparent;
}
.router-link-active{
  background: @left-nav-active-bg;
  border-left-color:@blue;
}

</style>
