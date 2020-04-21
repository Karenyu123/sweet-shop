<template>
  <div class="confirm" v-if="isShow">
    <div class="mask" @click.stop="handleCancel">
    </div>
    <div class="main">
      <p class="text">{{message}}</p>
      <div class="btns">
        <span @click.stop="handleConfirm">确认</span>
        <span @click.stop="handleCancel">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        isShow: false,
        callBack: null
      }
    },
    methods: {
       show(msg="确认删除吗？", cb) {
         this.isShow = true
         this.message = msg
         this.callBack= cb
       },
       handleConfirm() {
         this.isShow = false
         this.callBack && this.callBack()
         return
       },
       handleCancel() {
         this.isShow = false
         return
       }
    }
  }
</script>

<style scoped lang="stylus">
.confirm
  width 100vw
  height 100vh
  position relative
  .mask
    width 100%
    height 100%
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 55555
  .main
    background: rgba(228,108,139,.8);
    position:fixed;
    left: 50%;
    top:40%;
    color: #ffffff;
    transform: translate(-50%,-50%);
    border-radius: 6px;
    z-index:66666;
    transition: all 0.5s;
    text-align center
    box-sizing border-box
    .text
      line-height 30px
      padding 10px
      text-align center
    .btns
      display flex
      height 25px
      line-height 25px
      font-size 13px
      border-top 1px solid #ffffff
      span 
        display block
        flex 1
        &:nth-child(1)
          border-right 1px solid #ffffff


</style>