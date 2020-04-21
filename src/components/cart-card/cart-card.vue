<template>
  <div class="cart-card">
    <ul class="cart-list">
      <li @click="toDetail(goods.iid)" class="list-item" v-for="goods in cartlist" :key="goods.iid">
        <div class="select" @click.stop="selectGoods(goods)">
          <i v-show="!goods.select" class="iconfont">&#xe625;</i>
          <i v-show="goods.select" class="iconfont active">&#xe626;</i>
        </div>
        <img :src="goods.image" alt="">
        <div class="info">
          <p class="title">{{goods.title}}</p>
          <p class="desc">商品描述<span>{{goods.desc}}</span></p>
          <div class="price-count">
            <span class="price">￥{{goods.newPrice}}</span>
            <span class="count">数量：{{goods.count}}</span>
            <div class="control">
              <i class="iconfont" @click.stop="decrementGoods(goods)">&#xe64e;</i>
              <span class="num">1</span>
              <i class="iconfont" @click.stop="addCount(goods)">&#xe612;</i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapState(['cartlist']),
      ...mapGetters(['totalPrice', 'totalCount'])
    },
    methods: {
      toDetail(id) {
        this.$router.push(`/goods-detail/${id}`)
      },
      selectGoods(goods) {
        this.switchSelect(goods)
      },
      decrementGoods(goods) {
        if(goods.count === 1) {
          this.$confirm.show('确认删除该商品吗？',() => {
            this.decrementCount(goods)
            return
          })
        }else {
          this.decrementCount(goods)
        }
      },
      addCount(goods) {
        this.addToCart(goods)
      },
      ...mapActions(['addToCart', 'decrementCount', 'switchSelect']) 
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.cart-card
  width 100vw
  .cart-list
    width 100%
    box-sizing border-box
    overflow hidden
    .list-item
      width 100%
      box-sizing border-box
      overflow hidden
      display flex
      align-items center
      font-size $font-size-large
      color $color-font
      padding 10px
      border-bottom 1px solid #f1f1f1
      .iconfont
        margin 0 10px
        &.active
          color $color-theme
      img 
        width 80px
        height 100px
        border-radius 4px
        margin 5px
      .info
        width 60%
        padding 8px
        line-height 30px
        .title
          white-space nowrap
          text-overflow ellipsis
          font-weight bold
          overflow hidden
        .desc
          white-space nowrap
          text-overflow ellipsis
          font-size 13px
          overflow hidden
      .price-count
        display flex
        justify-content space-between
        margin-top 8px
        .price
          color $color-theme
          font-weight bold
        .control 
          .iconfont
            color $color-theme
          span 
            font-size 13px
</style>