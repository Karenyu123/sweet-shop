<template>
  <div class="cart">
    <y-header>
      <h4 slot="center">购物车</h4>
      <span v-show="cartlist.length" class="header-right" slot="right" @click="clearCart">
        清空
        <i class="iconfont">&#xe652;</i>
      </span>
    </y-header>
    <scroll>
      <div class="content-wrapper">
        <cart-card class="card" v-if="cartlist.length > 0" />
        <p class="text" v-else>购物车空空如也~~</p>
      </div>
    </scroll>
    <cart-footer />
  </div>
</template>

<script>
import YHeader from '../../base/y-header/y-header'
import CartCard from '../../components/cart-card/cart-card'
import CartFooter from '../../components/cart-footer/cart-footer'
import Scroll from '../../base/scroll/scroll'
import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      YHeader,
      CartCard,
      CartFooter,
      Scroll
    },
    computed: {
      ...mapState(['cartlist']) ,
      ...mapGetters(['cartlist'])
    },
    methods: {
      clearCart() {
        this.clearCartlist()
      },
      ...mapActions(['clearCartlist'])
    }
  }
</script>

<style scoped lang="stylus">
.cart
  padding-top 44px
  padding-bottom 90px
  .header-right
    color #f1f1f1
    font-size 14px
    .iconfont
      vertical-align middle
  .text
    font-size 14px
    color #999999
    text-align center
    line-height 80px
  .card
    padding-bottom 40px
    
</style>