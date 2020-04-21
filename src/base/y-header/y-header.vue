<template>
  <header class="y-header" :style="{background: bg ? bg : '#FF8198'}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      bg: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.y-header
  display flex
  height 44px
  position fixed
  top 0
  left 0
  right 0
  background $color-theme
  color $color-white
  text-align center  
  line-height 44px
  z-index 100
  .left
    width 60px
  .center
    flex 1
  .right 
    width 60px
</style>