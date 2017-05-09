<template>
  <transition name="mask">
    <div class="u-mask" v-show="value">
      <div class="dialog">
        <div class="dialog-header">
          <span class="dialog-title">{{title}}</span>
          <i @click="cancel" class="fa fa-close u-pull-right u-pointer fa-lg"></i>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <v-button type="default"
                  style="margin-right:10px;"
                  v-if="showCancelButton"
                  @click.native="cancel">取消</v-button>
          <v-button type="primary"
                  v-if="showConfirmButton"
                  @click.native="confirm">确定</v-button>
        </div>
      </div>
    </div>
  </transition>  
</template>

<script>
  export default {
    name: 'VDialog',
    props: {
      title: String,
      // 显示dialog
      value: {
        type: Boolean,
        default: false
      },
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      cancel () {
        this.$emit('input', false)
        this.$emit('cancel')
      },
      confirm () {
        this.$emit('confirm')
      }
    }
  }
</script>

<style scoped>
@import 'varible.css';
.mask-enter-active,.mask-leave-active{
  transition:opacity .3s;
  &>.dialog{
    transition:transform .3s;
  }
}
.mask-enter,.mask-leave-to{
  opacity:0;
  &>.dialog{
    transform:translate(-50%,-50px);
  }
}
.dialog{
  position: absolute;
  background: #fff;
  top:10%;
  left:50%;
  min-width:22%;
  border:1px solid #656565;
  box-shadow: 0 0 10px #656565;
  border-radius: 6px;
  transform:translateX(-50%);
}
.dialog-header{
  padding:20px 20px 0;
}
.dialog-title{
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #1f2d3d;
}
.dialog-body{
  padding: 10px 20px 0;
  max-height: 600px;
  overflow-y: auto;
}
.dialog-footer{
  padding:20px;
  text-align: right;
}
.fa-close{
  color: var(--color-gray);
  &:hover{
    color:var(--color-blue);
  }
}

</style>
