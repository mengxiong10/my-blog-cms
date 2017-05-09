<template>
  <div class="v-spinner" v-show="visible">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style scoped>
.v-spinner {
  position: absolute;
  left:50%;
  top:40%;
  transform:translateX(-50%);
}
.v-spinner > div {
  float: left;
  width: 18px;
  height: 18px;
  margin: 0 3px;
  background-color: #789;
  border-radius: 100%;
  animation: sp-bounce 1.4s infinite ease-in-out;
}

.v-spinner > div:nth-child(1) {
  animation-delay: -0.32s;
}

.v-spinner > div:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes sp-bounce {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

</style>
