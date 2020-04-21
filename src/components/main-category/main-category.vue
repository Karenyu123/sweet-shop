<template>
  <div class="main-category">
    <ul class="list">
      <li class="list-item" v-for="(item, i) in cats" :key="i">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      cats: {
        type: Array,
        default(){ return []}
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.main-category
  width calc(100vw - 100px)
  padding-left 15px
  .list
    display flex
    flex-wrap wrap
    .list-item
      // padding 5px
      text-align center
      margin 10px
      img 
        width 65px
      p
        font-size 13px
        color $color-font
        line-height 26px

    
</style>