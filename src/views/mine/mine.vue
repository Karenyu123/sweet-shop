<template>
  <div class="mine">
    <h2>登录</h2>
    <div class="btn" @click="showConfirm"><i class="iconfont">&#xe637;</i>微信登陆</div>
    <div class="short-line"></div>
    <p class="other">其他登录方式</p>
    <div class="other-method">
      <div class="qq">
        <i class="iconfont">&#xe60f;</i>
        <p>QQ登录</p>
      </div>
      <div class="weibo">
        <i class="iconfont">&#xe666;</i>
        <p>微博登录</p>
      </div>
      <div class="user">
        <i class="iconfont">&#xe606;</i>
        <p>账号登录</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showConfirm() {
        this.$toast.show('此功能正在开发中，敬请期待~')
      } 
    }
  }
</script>

<style scoped lang="stylus">
.mine
  text-align center
  h2
    font-size 28px
    color #444444
    margin 70px 0
  .btn
    width 315px
    height 49px
    line-height 49px
    border-radius 24px
    background #09bb07
    margin 0 auto
    color #ffffff
    font-size 16px
    margin-bottom 70px
    .iconfont
      margin-right 10px
      font-size 22px
  .short-line
    width 20px
    height 1px
    background #999999
    margin 0 auto
  .other
    font-size 16px
    color #666666
    margin 40px auto
  .other-method
    display flex
    justify-content space-around
    align-items center
    padding 0 30px
    font-size 13px
    color #999999
    .iconfont
      display inline-block
      width 40px
      height 40px
      line-height 40px
      border-radius 50%
      font-size 20px
      border 1px solid #f1f1f1
      margin-bottom 8px
      color #444444
</style>