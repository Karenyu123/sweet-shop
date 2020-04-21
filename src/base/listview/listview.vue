<template>
  <div class="list-wrapper">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <ul class="list">
      <li 
        class="list-item" 
        v-for="(item, index) in goodsList" 
        :key="index" 
        :class="{mr: index % 2 === 0, cat: catFlag}"
        @click="toDetail(item.iid || item.item_id)"
        >
        <img v-if="item.show" class="image" v-lazy="item.show.img" alt="">
        <img v-else-if="item.img" class="img" v-lazy="item.img" alt="">
        <img v-else v-lazy="item.image" alt="" class="image">
        <p class="goods-title">{{item.title}}</p>
        <div class="price">
          <span>￥{{item.price}}</span>
          <span><i class="iconfont">&#xe859;</i>收藏</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      goodsList: {
        type: Array,
        default() {return []}
      },
      catFlag: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toDetail(id) {
        this.$router.push(`/goods-detail/${id}`)
      } 
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.list-wrapper
  .list
    display flex
    flex-wrap wrap
    padding 0 8px 0 10px
    // padding-bottom 50px
    .list-item
      width 48%
      box-sizing border-box
      background #fff
      border-radius 4px
      padding-bottom 10px
      margin-bottom 10px
      font-size $font-size-large
      color $color-font
      &.mr
        margin-right 12px
      &.cat
        width 47.5%
        font-size 13px
        &.mr
          margin-right 10px
      .image
        width 100%
        border-radius 4px
      .img
        width 100%
        border-radius 4px
      .goods-title
        margin 4px 0
        line-height 26px
        padding 0 4px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
      .price
        padding 0 6px
        display flex
        justify-content space-between
        box-sizing border-box
        span
          &:nth-child(1)
            color $color-cart
          &:nth-child(2)
            font-size 12px
            margin-right 8px
            .iconfont 
              margin-right 4px
              margin-bottom 5px
              vertical-align middle
</style>