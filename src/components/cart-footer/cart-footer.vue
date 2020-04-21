<template>
  <div class="cart-footer" v-if="cartlist.length > 0">
    <div class="select-all" @click="selectAll">
      <i v-show="!selectFlag" class="iconfont">&#xe625;</i>
      <i v-show="selectFlag" class="iconfont active">&#xe626;</i>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计：<span>{{totalPrice}} 元</span>
    </div>
    <div class="pay">
      去结算<span v-show="totalCount">({{totalCount}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        isSelectAll: true
      }
    },
    computed: {
      ...mapState(['cartlist']),
      ...mapGetters(['totalPrice', 'totalCount', 'selectFlag']) 
    },
    methods: {
      selectAll() {
        this.isSelectAll = !this.isSelectAll
        this.selectAllGoods(this.isSelectAll)
      },
      ...mapActions(['selectAllGoods']) 
    },
    watch: {
      selectFlag(newVal) {
        this.isSelectAll = newVal
        this.selectAll
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.cart-footer
  display flex
  position fixed
  left 0
  height 40px
  width 100%
  line-height 40px
  bottom 50px
  z-index 100
  font-size $font-size-large
  color $color-font
  background $color-gray
  .select-all
    width 80px
    text-align center
    .iconfont
      margin-right 4px
      &.active
        color $color-theme
  .total-price
    flex 1
  .pay
    text-align center
    width 80px
    color #fff
    background $color-theme
</style>