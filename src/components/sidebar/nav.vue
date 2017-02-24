<template>
  <ul class="nav-list">
    <li v-for="link in links">
      <template v-if="link.children">
        <div class="first-nav" :class="{'active':link.open}" @click="link.open = !link.open">
          <i class="fa fa-file-text"></i>
          <span>{{link.name}}</span>
          <i class="fa fa-angle-down fa-lg" :class="{'fa-rotate-180':link.open}"></i>
        </div>
        <ul v-show = "link.open">
          <li v-for="item in link.children">
            <router-link class="second-nav" :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </template>
      <router-link v-else class="first-nav" :to="link.path">{{link.name}}</router-link>
    </li>
  </ul>
</template>

<script>
import links from './nav.js'
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
  height: 40px;
  line-height: 40px;
}
.first-nav{
  padding-left: 1.5em;
  font-weight: bold;
  cursor: pointer;
}
.active{
  background: linear-gradient(#334556,#2C4257),#2A3F54;
  box-shadow: 0 1px rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.2);
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
