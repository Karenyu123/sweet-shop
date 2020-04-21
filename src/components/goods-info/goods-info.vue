<template>
  <div class="goods-info" v-if="Object.keys(goods).length > 0">
    <p class="title">{{goods.title}}</p>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <div class="old-price">
        <span class="o-price">{{goods.oldPrice}}</span>
        <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
    </div>
    <div class="sell-info">
      <span class="sell-count">{{goods.columns[0]}}</span>
      <span class="collect-count">{{goods.columns[1]}}</span>
      <span class="delivery-time">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img v-show="goods.services[index-1].icon" :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goods: {
        type: Object,
        default() {return {}}
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.goods-info
  padding 16px
  padding-bottom 0
  .title
    font-weight 700
    line-height 24px
    text-indent 1.5em
  .price
    display flex
    margin 10px 0
    .new-price
      color $color-theme
      font-size 20px
      margin-right 10px
    .old-price
      position relative
      padding-right 50px
      line-height 30px
      font-size 12px
      .o-price
        color #999999
        text-decoration line-through
      .discount
        position absolute
        right 0
        top -10px
        padding 0 4px
        line-height 20px
        border-radius 4px
        background-color $color-theme
        color $color-white
  .sell-info, .info-service
    display flex
    justify-content space-between
    font-size 13px
    color #999999
    margin-bottom 15px
  .info-service
    color #333
    font-size 13px
    padding 20px 0
    margin-bottom 0
    border-top 1px solid #f1f1f1
    border-bottom 1px solid #f1f1ff
    img 
      width 14px
      vertical-align middle
      margin-right 4px

</style>