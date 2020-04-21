<template>
  <div class="goods-footer">
    <div class="service">
      <i class="iconfont">&#xe645;</i>
      <p>客服</p>
    </div>
    <div class="shop">
      <i class="iconfont">&#xe604;</i>
      <p>店铺</p>
    </div>
    <div class="collect">
      <i class="iconfont">&#xe859;</i>
      <p>收藏</p>
    </div>
    <div class="add-cart" @click="addCart">
      <i class="iconfont">&#xe735;</i>
      <p>加入购物车</p>
    </div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
  export default {
    methods: {
      addCart() {
        this.$emit('addCart')
      } 
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.goods-footer
  position fixed
  bottom 0
  left 0
  right 0
  display flex
  justify-content space-between
  height 49px
  z-index 100
  font-size 13px
  color $color-font
  box-sizing border-box
  text-align center
  div:nth-child(-n+3)
    padding-top 5px
    width 15%
    text-align center
  div:nth-child(4)
    padding-top 5px
    width 25%
    color $color-theme
  div:last-child
      width 25%
      line-height 49px
      font-size 14px
      background $color-theme
      color $color-white
    .iconfont
      display block
      font-size 20px
      margin-bottom 4px
    
</style>