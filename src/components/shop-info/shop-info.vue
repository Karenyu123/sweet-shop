<template>
  <div class="shop-info">
    <div class="shop-header">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="summary-info">
      <div class="sell-total-count">
        <p class="count">{{shop.sells|totalCount}}</p>
        <p class="text">总销量</p>
      </div>
      <div class="total-goods">
        <p class="count">{{shop.goodsCount}}</p>
        <p class="text">全部宝贝</p>
      </div>
      <div class="line"></div>
      <div class="rate-info">
        <div class="rate" v-for="(item, index) in shop.score" :key="index">
          <span class="title">{{item.name}}</span>
          <span class="score" :class="item.score*1 > 4.9 ? 'high' : item.score*1 > 4 ? 'middle' :'low' ">{{item.score}}</span>
          <span class="discribetion" :class="item.isBetter ? 'high' : 'middle'">{{item.isBetter ? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <button class="btn">进店逛逛</button>
  </div>
</template>

<script>
  export default {
    props: {
      shop: {
        type: Object,
        default() {return {}}
      }
    },
    filters: {
      totalCount(val) {
        if(val) {
          if (val.toString().length >= 5) {
          return (val * 1 / 10000).toFixed(1) + '万'
        }
        return val
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.shop-info
  padding 16px
  text-align center
  .shop-header
    display flex
    text-align center
    img 
      width 50px
      border-radius 50%
      border 1px solid #f1f1f1
      vertical-align middle
      margin-right 10px
    span 
      font-size 18px
      color #333333
      line-height 50px
  .summary-info
    display flex
    justify-content space-around
    align-items center
    padding 16px 0
    .sell-total-count, .total-goods
      .count
        font-size 18px
        margin-bottom 10px
        color #666666
      .text
        font-size 13px
        color $color-font
    .line
      width 1px
      height 50px
      background #f1f1f1
    .rate-info
      text-align left 
      font-size $font-size-middle
      color #666666
      .rate
        margin-bottom 10px
        .title
          margin-right 10px
        .score
          display inline-block
          width 20px
          margin-right 15px
          font-weight 700
          &.high
            color $color-theme
          &.middle
            color $color-green
          &.low
            color $color-orange
        .discribetion
          display inline-block
          width 15px
          height 15px
          border-radius 2px
          color $color-white
          text-align center
          line-height 14px
          &.high
            background $color-theme
          &.middle
            background $color-green
  .btn
    display inline-block
    border none 
    width 150px
    height 30px
    border-radius 6px
    background #F2F5F8
    color $color-font
    margin-bottom 15px

          
</style>