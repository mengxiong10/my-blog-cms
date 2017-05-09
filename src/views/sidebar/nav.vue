<template>
  <ul class="nav-list">
    <li v-for="(link, index) in links" 
        :class="{'active':actived(index)}">
      <div @click="extend(index)">
        <i class="fa icon"
           :class="link.icon"></i>
        <span class="first-nav"
              v-if="link.children">
          {{link.name}}
          <i class="fa fa-angle-down fa-lg" :class="{'fa-rotate-180':actived(index)}"></i>
        </span>
        <router-link class="first-nav"
                     v-else 
                     :to="link.path">
          {{link.name}}
        </router-link>
      </div>
      <transition @beforeEnter="close"
                  @enter="open"
                  @beforeLeave="open"
                  @leave="close">
        <ul v-if="link.children"
            v-show="actived(index)">
          <li v-for="item in link.children">
            <router-link class="second-nav"
                         :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </transition>
    </li>
  </ul>
</template>

<script>
import links from './nav.js'

export default {
  name: 'sidebarNav',
  data () {
    return {
      openLinkIndex: -1,
      links
    }
  },
  methods: {
    actived (i) {
      return this.openLinkIndex === i
    },
    extend (index) {
      this.openLinkIndex = index === this.openLinkIndex ? -1 : index
    },
    close (el) {
      el.style.height = '0'
      el.style.overflow = 'hidden'
    },
    open (el) {
      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
    }
  },
  mounted () {
    this.extend(0)
  }
}
</script>

<style  scoped>
@import 'varible.css';
.nav-list{
  font-size: 16px;
  color:#fff;
  & a{
    color:inherit;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
}
.fa-angle-down{
  float: right;
  line-height: 40px;
  margin-right: 20px;
  transition:transform .3s;
}
.icon{
  float: left;
  line-height: 40px;
  margin-left: 20px;
}
.first-nav,.second-nav{
  display: block;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.first-nav{
  padding-left: 3em;
  margin-bottom: 6px;
  font-weight: bold;
}
.second-nav{
  padding-left:4em;
  font-size: 14px;
}
.active{
  border-right:5px solid var(--color-green);
  &>div{
    background: linear-gradient(#334556,#2C4257);
    box-shadow: 0 1px rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.2);
  }
}
.router-link-active{
  background: var(--left-nav-active-bg);
}
.v-enter-active,.v-leave-active{
  transition: height .3s ease;
}

</style>
