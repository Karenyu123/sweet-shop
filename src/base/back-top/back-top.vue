<template>
  <div class="back-top" :class="{show: isShow}">
    <img src="../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="stylus">
.back-top
  display none
  position fixed
  bottom 80px
  right 10px
  z-index 100
  &.show
    display block
  img 
    width 60px
</style>