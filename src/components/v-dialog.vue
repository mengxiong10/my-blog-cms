<template>
  <transition name="shade">
    <div class="shade" v-show="value">
      <div class="dialog">
        <div class="dialog-header">
          <span class="dialog-title">{{title}}</span>
          <i @click="cancel" class="fa fa-close fa-pull-right fa-lg"></i>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-default"
                  type="button"
                  style="margin-right:10px;"
                  v-if="showCancelButton"
                  @click="cancel">取消</button>
          <button class="btn btn-primary"
                  :type="formId ? 'submit' : 'button'"
                  :form="formId"
                  v-if="showConfirmButton"
                  @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </transition>  
</template>

<script>
  export default {
    props: {
      title: String,
      formId:String,      
      //显示dialog 
      value: {
        type: Boolean,
        default: false,
      },
      showConfirmButton: {
        type: Boolean,
        default: true,
      },
      showCancelButton: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      cancel() {
        this.$emit('input', false)
        this.$emit('cancel')
      },
      confirm() {
        this.$emit('confirm')
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
.shade-enter-active,.shade-leave-active{
  transition:opacity .3s;
  >.dialog{
    transition:transform .3s;
  }
}
.shade-enter,.shade-leave-to{
  opacity:0;
  >.dialog{
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
  color: @gray;
  cursor: pointer;
  &:hover{
    color:@blue;
  }
}

</style>
