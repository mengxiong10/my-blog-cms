<template>
  <div class="shade" v-show="value">
    <div class="dialog">
      <div class="dialog-header">
        <span class="dialog-title">{{title}}</span>
        <i @click="close" class="fa fa-close fa-pull-right fa-lg"></i>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      value: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      close() {
        this.$emit('input', false)
      },
    },
  }
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.shade{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  z-index: 100;
}
.dialog-header{
  padding:20px;
}
.dialog-title{
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #1f2d3d;
}
.dialog-body{
  padding: 10px 20px;
  max-height: 600px;
  overflow-y: auto;
}
.dialog-footer{
  padding:20px;
  text-align: right;
}
.dialog{
  position: absolute;
  background: #fff;
  top:10%;
  left:50%;
  width:25%;
  border:1px solid #656565;
  box-shadow: 0 0 10px #656565;
  border-radius: 6px;
  transform:translateX(-50%);
}
.fa-close{
  color: @gray;
  cursor: pointer;
  &:hover{
    color:@blue;
  }
}

</style>
