<template>
  <div class="shade" v-show="modal.show" transition="fade">
    <div v-show="modal.show" transition="modal">
      <div class="content">
        <h2>{{{modal.content}}}</h2>
        <div>
          <button type="button" class="button" @click="modal.confirm()">确认</button>
          <button v-if="modal.cancel" type="button" class="button" @click="modal.cancel()">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      modal:{
        type:Object,
        default:function  () {
           return {
            show:false,
            content:'',
            confirm:()=>{},
            cancel:()=>{}
           }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .shade{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.5)
  }
  .modal-transition{
    position: absolute;
    top:8%;
    left:50%;
    background: #fff;
    padding:30px;
    border-radius: 5px;
    text-align: center;
    font-family: arial;
    transform:translateX(-50%) scale(1);
    transition:all .5s;
  }
  .content{
    float: right;
    min-width: 300px;
    max-width: 450px;
    h2{
      color:#575757;
      font-size: 28px;
      padding-bottom: 40px;
    }
  }
  .button{
    padding: 10px 30px;
    background:#0072c5;
    color:#fff;
    border-radius: 4px;
    font-size: 14px;
    margin:0 10px;
  }
  .fade-transition{
    opacity: 1;
    transition:all .5s;
  }
  .fade-enter,.fade-leave{
    opacity:0;
  }
  .modal-enter,.modal-leave{
    transform:translateX(-50%) scale(0.2);
  }
</style>
