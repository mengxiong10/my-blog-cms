<template>
  <ul class="nav-list">
    <li v-for="(link, index) in links">
      <template v-if="link.children">
        <div class="first-nav" :class="{'active':openLinkIndex === index }" @click="extend(index)">
          <i class="fa fa-file-text"></i>
          <span>{{link.name}}</span>
          <i class="fa fa-angle-down fa-lg" :class="{'fa-rotate-180':link.open}"></i>
        </div>
        <ul class="second-nav-wrap" style="height:0" ref="haha">
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
import { slideToggle } from 'src/server/utils'
import links from './nav.js'

export default {
  name: 'nav',
  data() {
    return {
      openLinkIndex: 0,
      links,
    }
  },
  methods: {
    extend(index) {
      slideToggle(this.$refs.haha[index])
      // this.openLinkIndex = index === this.openLinkIndex ? -1 : index
    },
  },
  mounted() {
    // console.log(this.$refs.haha[0].children)
  },
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
  margin-bottom: 6px;
  font-weight: bold;
  cursor: pointer;
}
.second-nav{
  padding-left:4em;
  font-size: 14px;
  border-left: 3px solid transparent;
}
.active{
  background: linear-gradient(#334556,#2C4257),#2A3F54;
  box-shadow: 0 1px rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.2);
}
.router-link-active{
  background: @left-nav-active-bg;
  // border-left-color:@blue;
}
.second-nav-wrap{
  overflow: hidden;
}
// .v-enter,.v-leave-to{
//   height: 0;
// }
// .v-enter-active{
//   transition:height 1s ease;
// }
// .v-leave-active{
//   transition:height 1s linear;
// }


</style>
