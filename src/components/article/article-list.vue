<template>
  <div class="article-list-wrap">
    <div class="list">
      <div class="list-subheader">
      </div>
      <ul>
        <li class="list-group-item active">
          <h4 class="text-overflow">空间发的塑料袋房间爱流口水的是</h4>
          <span>2016-06-07 28:20:55</span>
          <span>20/0</span>
          <span>体育</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options:[{
        name:'选项',
        value:'1'
      },{
        name:'哈哈',
        value:'2'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/varible.less';
.article-list-wrap{
  height: 100%;
  background: #fff;
}
.list{
  float: left;
  width: 40%;
  height: 100%;
  border-right: 1px solid @border-bg;
}
.list-subheader{
  height: 50px;
  border-bottom: 1px solid @border-bg;
}
.list-group-item{
  height: 68px;
  padding:10px 20px;
  border-bottom:1px solid @border-bg;
  color:#5A738E;
  &:hover{
    background: #eee;
  }
  span{
    line-height: 2;
  }
  span:nth-of-type(2){
    margin-left: 30px;
  }
  span:last-of-type{
    float: right;
  }
}
.active{
  background: @gray;
}

</style>
