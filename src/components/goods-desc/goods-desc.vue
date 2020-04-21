<template>
  <div class="goods-desc" v-if="Object.keys(detailInfo).length > 0">
    <div class="title-wrapper">
      <div class="line-top"></div>
      <p class="title">{{detailInfo.desc}}</p>
      <div class="line-bottom"></div>
    </div>
    <h4 class="text">{{detailInfo.detailImage[0].key}}</h4>
    <div class="img-wrapper">
      <img @load="imgLoad" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" v-lazy="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detailInfo: {
        type: Object,
        default() { return {} }
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
      } 
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.goods-desc
  width 100vw
  box-sizing border-box
  overflow hidden
  .title-wrapper
    padding 16px
    position relative
    font-size $font-size-middle
    line-height 20px
    color $color-font
    text-indent 1.5em
    .line-top, .line-bottom
      width 100px
      height 1px
      background #666666
      margin 10px 0
      position relative
      &::before
        content ''
        position absolute
        left  0
        top -4px
        width 8px
        height 8px
        background $color-theme
    .line-bottom
      right -70%
  .text
    text-align center
    color #666666
    margin-bottom 10px
  .img-wrapper
    width 100%
    img 
      width 100%

</style>