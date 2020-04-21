<template>
  <div class="tabbar">
    <router-link  tag="div" to="/home">
      <i class="iconfont">&#xe65b;</i>
      <p>首页</p>
    </router-link>
    <router-link tag="div" to="/category">
      <i class="iconfont">&#xe78a;</i>
      <p>分类</p>
    </router-link>
    <router-link tag="div" to="/cart">
      <i class="iconfont">&#xe735;</i>
      <p>购物车</p>
    </router-link>
    <router-link  tag="div" to="/mine">
      <i class="iconfont">&#xe606;</i>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.tabbar
  display flex
  justify-content space-around
  position fixed
  bottom 0
  left 0
  right 0
  height 49px
  text-align center
  font-size 13px
  padding 6px 0
  box-sizing border-box
  color #666666
  box-shadow 0 -1px 2px rgba(0,0,0,0.2)
  background $color-white
  div
    &.router-link-active
      color $color-theme
    .iconfont
      font-size 24px
    p
      line-height 16px
    
  
</style>