<template>
  <div class="v-spinner" v-show="visible" :style="{transform: 'scale(' + scale + ')'}">
    <div class="v-fade v-fade1" :style="[spinnerStyle,animationStyle1]"></div>
    <div class="v-fade v-fade2" :style="[spinnerStyle,animationStyle2]"></div>
    <div class="v-fade v-fade3" :style="[spinnerStyle,animationStyle3]"></div>
    <div class="v-fade v-fade4" :style="[spinnerStyle,animationStyle4]"></div>
    <div class="v-fade v-fade5" :style="[spinnerStyle,animationStyle5]"></div>
    <div class="v-fade v-fade6" :style="[spinnerStyle,animationStyle6]"></div>
    <div class="v-fade v-fade7" :style="[spinnerStyle,animationStyle7]"></div>
    <div class="v-fade v-fade8" :style="[spinnerStyle,animationStyle8]"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible:true,
      scale: 1,
      color:'#b7b6b6',
      width: '5px',
      height: '15px',
      radius: '20px',
      margin: '2px',
    }
  },
  computed: {
    ngRadius () {
      return '-' + this.radius
    },
    quarter () {
      return (parseFloat(this.radius)/2 + parseFloat(this.radius)/5.5) + 'px'
    },
    ngQuarter () {
      return '-' + this.quarter
    },
    spinnerStyle () {
      return {
        backgroundColor: this.color,
        height: this.height,
        width: this.width,
        margin: this.margin,
        borderRadius: this.width,
      }
    },
    animationStyle1 () {
      return {
        top: this.radius,
        left: 0,
        animationDelay: '0.12s'
      }
    },
    animationStyle2 () {
      return {
        top: this.quarter,
        left: this.quarter,
        animationDelay: '0.24s',
        transform: 'rotate(-45deg)'
      }
    },
    animationStyle3 () {
      return {
        top: 0,
        left: this.radius,
        animationDelay: '0.36s',
        transform: 'rotate(90deg)'
      }
    },
    animationStyle4 () {
      return {
        top: this.ngQuarter,
        left: this.quarter,
        animationDelay: '0.48s',
        transform: 'rotate(45deg)'
      }
    },
    animationStyle5 () {
      return {
        top: this.ngRadius,
        left: 0,
        animationDelay: '0.60s'
      }
    },
    animationStyle6 () {
      return {
        top: this.ngQuarter,
        left: this.ngQuarter,
        animationDelay: '0.72s',
        transform: 'rotate(-45deg)'
      }
    },
    animationStyle7 () {
      return {
        top: 0,
        left: this.ngRadius,
        animationDelay: '0.84s',
        transform: 'rotate(90deg)'
      }
    },
    animationStyle8 () {
      return {
        top: this.quarter,
        left: this.ngQuarter,
        animationDelay: '0.96s',
        transform: 'rotate(45deg)'
      }
    }
  }
}
</script>

<style>
.v-spinner{
  position: absolute;
  top:40%;
  left: 50%;
}
.v-spinner .v-fade{
  position: absolute;  
  animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
  animation-fill-mode: both;
}

@keyframes v-fadeStretchDelay{
  50%{
    opacity: 0.3;
  }
  100%{
    opacity: 1;
  }
}
</style>
