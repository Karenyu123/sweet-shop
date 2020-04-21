<template>
  <div class="tab-menu">
    <div class="tab-tem" v-for="(item,i) in menuList" :key="i" @click="switchMenu(i)">
      <span :class="{active: currentIndex === i}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      menuList: {
        type: Array,
        default() {return []}
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      switchMenu(index) {
        this.currentIndex = index
        this.$emit('getMenuIndex', index)
      } 
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.tab-menu
  display flex
  justify-content space-around
  position relative
  height 40px
  color $color-font
  background $color-white
  font-size $font-size-large
  span 
    display block
    height 40px
    line-height 40px
    box-sizing border-box
    &.active
      color $color-theme
      border-bottom 2px solid $color-theme
</style>