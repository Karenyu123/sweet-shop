<template>
  <transition name="slide">
    <div class="goods-detail">
      <y-header bg="#fff" class="header">
        <i class="iconfont" slot="left" @click="back">&#xe64d;</i>
        <nav class="nav" slot="center">
          <span 
            class="nav-item" 
            :class="{active: currentIndex === i}" 
            v-for="(n,i) in navList" 
            :key="i"
            @click="switchNav(i)"
            >{{n}}</span>
        </nav>
      </y-header>
      <scroll 
        ref="scroll"
        @onScrollY="onScrollY"
        >
        <div>
          <swiper ref="swiper" :data="topImages" height="200px" />
          <goods-info ref="goodsInfo" :goods="goods" />
          <my-line/>
          <shop-info :shop="shop" />
          <my-line/>
          <goods-desc :detailInfo="detailInfo" @imgLoad="imgLoad"/>
          <my-line/>
          <goods-params ref="goodsParams"  :paramInfo="paramInfo"/>
          <my-line/>
          <goods-comment ref="goodsComment" :commentInfo="commentInfo"/>
          <my-line/>
          <listview class="listview" ref="goodsList" :goodsList="recommendList"> 
            <h4 class="title" slot="title">热门推荐</h4>
          </listview>
        </div>
      </scroll>
      <goods-footer @addCart="addCart"/>
      <back-top :isShow="isShowTop" @click.native="backTop" />
    </div>
  </transition>
</template>

<script>
import YHeader from '../../base/y-header/y-header'
import Swiper from '../../base/swiper/swiper'
import GoodsInfo from '../../components/goods-info/goods-info'
import MyLine from '../../base/line/line'
import ShopInfo from '../../components/shop-info/shop-info'
import GoodsDesc from '../../components/goods-desc/goods-desc'
import GoodsParams from '../../components/goods-params/goods-params'
import GoodsComment from '../../components/goods-comment/goods-comment'
import Listview from '../../base/listview/listview'
import Scroll from '../../base/scroll/scroll'
import BackTop from '../../base/back-top/back-top'
import GoodsFooter from '../../components/goods-footer/goods-footer'
import { Goods, GoodsParam, Shop } from '../../common/js/goodsDetail'
import { mapActions, mapState } from 'vuex'
import { debounce } from '../../common/js/utils'
const NAV_HEIGHT = 44
  export default {
    name: 'detail',
    props: {
      id: {}
    },
    components: {
      YHeader,
      Swiper,
      GoodsInfo,
      MyLine,
      ShopInfo,
      GoodsDesc,
      GoodsParams,
      GoodsComment,
      Listview,
      Scroll,
      BackTop,
      GoodsFooter
    },
    data() {
      return {
        navList: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        domOffsetTopList: [],
        posY: 0
      }
    },
    created() {
      this.fetchGoodsDetail()
      this.fetchRecommendList()
      this.goodsObj = {}
    },
    computed: {
      isShowTop() {
        return -this.posY > 700
      },
      ...mapState(['cartlist'])
    },
    methods: {
      addCart() {
        this.goodsObj.iid = this.id
        this.goodsObj.image = this.topImages[0]
        this.goodsObj.title = this.goods.title
        this.goodsObj.desc = this.goods.desc
        this.goodsObj.newPrice = this.goods.newPrice.slice(1)*1
        this.goodsObj.count = 1
        this.goodsObj.select = true
        this.addToCart(this.goodsObj)
        this.$toast.show('已添加到购物车')
      },
      imgLoad() {
        setTimeout(() => {
          this.fetchDomOffsetTopList()
        }, 20)
      },
      fetchDomOffsetTopList() {
        const swiperTop = this.$refs.swiper.$el.offsetTop
        const paramsTop = this.$refs.goodsParams.$el.offsetTop
        const commentTop = this.$refs.goodsComment.$el.offsetTop
        const gooslistTop = this.$refs.goodsList.$el.offsetTop
        this.domOffsetTopList = [swiperTop, paramsTop, commentTop, gooslistTop]
      },
      _formatPrice(price) {
        if(price.indexOf('~') > 0) {
          return price.slice(0, price.indexOf('~'))
        }
        return price
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 300)
        this.posY = 0
      },
      onScrollY(y) {
        this.posY = y
        this.handleSwitch(y)
        this.$refs.scroll.refresh()
      },
      handleSwitch(y) {
        switch (true) {
          case -y >= this.domOffsetTopList[3] - NAV_HEIGHT:
            this.currentIndex = 3
            return
          case -y >= this.domOffsetTopList[2] - NAV_HEIGHT:
            this.currentIndex = 2
            return
          case -y >= this.domOffsetTopList[1] - NAV_HEIGHT:
            this.currentIndex = 1
            return
          case -y >= this.domOffsetTopList[0] - NAV_HEIGHT:
            this.currentIndex = 0
            return
          default:
            break;
        }
      },
      async fetchRecommendList() {
        const { data } = await this.$http.get('/recommend')
        this.recommendList = this.recommendList.concat(data.data.list)
      },
      async fetchGoodsDetail() {
        const { data } = await this.$http.get('/detail',{ params: { iid: this.id }})
        const res = data.result
        this.topImages = res.itemInfo.topImages
        const rowGoods = new Goods(res.itemInfo, res.columns, res.shopInfo.services)
        if(rowGoods.newPrice.indexOf('~')) {
          rowGoods.newPrice = this._formatPrice(rowGoods.newPrice)
        }
        this.goods = rowGoods
        this.shop = new Shop(res.shopInfo)
        this.detailInfo = res.detailInfo
        this.paramInfo = new GoodsParam(res.itemParams.info, res.itemParams.rule)
        if (res.rate.list) {
            this.commentInfo = res.rate.list[0]
          }
      },
      switchNav(i) {
        this.currentIndex = i
        this.$refs.scroll.scrollTo(0, -this.domOffsetTopList[i], 300)
        this.posY =  -this.domOffsetTopList[i] + NAV_HEIGHT
      },
      back() {
        this.$router.go(-1)
      },
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.slide-enter-active, .slide-leave-active
    transition all .5s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
.goods-detail
  padding-top 44px
  .header
    color $color-font
    .iconfont
      font-size 20px
    .nav
      .nav-item
        display inline-block
        width 20%
        text-align center
        font-size $font-size-large
        &.active
          color $color-theme
  .listview
    .title
      line-height 40px
      font-size 14px
      color #333333
      padding 0 16px
</style>