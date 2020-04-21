<template>
  <div class="home">
      <y-header ref="header">
        <div slot="center">购物街</div>
      </y-header>
      <tab-menu ref="tabMenu2" class="fixed" v-show="isScrollTop" :menuList="['流行','新款','精选']" @getMenuIndex="getMenuIndex"/>
      <scroll 
        ref="scroll" 
        class="scroll" 
        @onScrollY="onScrollY" 
        :pullUpLoad="true"
        @pullUpLoad="pullUpLoad"
        :data="currentGoodsList"
      >
        <div>
          <swiper ref="swiper" class="swiper" :data="swiperData"/>
          <div class="recommend-wraper">
            <div class="recommend" v-for="(pic, index) in recommends" :key="index">
              <img :src="pic.image" alt="">
              <p>{{pic.title}}</p>
            </div>
          </div>
          <my-line />
          <tab-menu ref="tabMenu1" :menuList="['流行','新款','精选']" @getMenuIndex="getMenuIndex"/>
          <Listview :goodsList="currentGoodsList"/>
        </div>
        <div class="loading-container"  v-if="isLoading">
          <loading/>
        </div>
      </scroll>
      <back-top :isShow="isShowBackTop" @click.native="backTop" />
  </div>
</template>

<script>
import YHeader from '../../base/y-header/y-header'
import Swiper from '../../base/swiper/swiper'
import MyLine from '../../base/line/line'
import TabMenu from '../../components/tab-menu/tab-menu'
import Listview from '../../base/listview/listview'
import Scroll from '../../base/scroll/scroll'
import BackTop from '../../base/back-top/back-top'
import Loading from '../../base/loading/loading'
  export default {
    components: {
      YHeader,
      Swiper,
      MyLine,
      TabMenu,
      Listview,
      Scroll,
      BackTop,
      Loading
    },
    data() {
      return {
        swiperData: [],
        recommends: [],
        goodsData: {
          pop: { list: [], page: 1 },
          new: { list: [], page: 1 },
          sell: { list: [], page: 1}
        },
        currentType: 'pop',
        isShowBackTop: false,
        isScrollTop: false,
        positionY: 0,
        isLoading: true
      }
    },
    computed: {
      currentGoodsList() {
        return this.goodsData[this.currentType].list
      }
    },
    created() {
      this.fetchSwiper()
      this.fetchGoodsData('pop', this.goodsData['pop'].page)
      this.fetchGoodsData('new', this.goodsData['new'].page)
      this.fetchGoodsData('sell', this.goodsData['sell'].page)
    },
    methods: {
      // 上拉加载
      pullUpLoad() {
        // debounce() 
        this.fetchGoodsData(this.currentType, this.goodsData[this.currentType].page)
        this.$refs.scroll.refresh()
      },
      backTop() {
        this.$refs.scroll.scrollTo(0,0,300)
      },
      onScrollY(y) {
        this.positionY = y
        this.isShowBackTop = -y > 800
        this.isScrollTop = -y > this.$refs.tabMenu1.$el.offsetTop
      },
      getMenuIndex(index) {
        // 使两个菜单选项保持一致
        this.$refs.tabMenu1.currentIndex = this.$refs.tabMenu2.currentIndex = index
        if(-this.positionY > this.$refs.tabMenu1.$el.offsetTop) {
          this.$refs.scroll.scrollTo(0, -this.$refs.tabMenu1.$el.offsetTop, 300)
        }
        switch (index) {
          case 0:
            return this.currentType = 'pop'
          case 1:
            return this.currentType = 'new'
          case 2:
            return this.currentType = 'sell'
          default:
            break;
        }
      },
      async fetchSwiper() {
        const { data } = await this.$http.get('/home/multidata')
        this.swiperData = data.data.banner.list
        this.recommends = data.data.recommend.list
      },
      async fetchGoodsData(type, page) {
        this.isLoading = true
        this.page = this.goodsData[type].page*1 + 1
        const { data } = await this.$http.get('/home/data', {
          params: {
            type,
            page
          }
        })
        this.goodsData[type].list = this.goodsData[type].list.concat(data.data.list)
        this.goodsData[type].page = this.page
        this.$refs.scroll.finishPullingUp()
        this.isLoading = false
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.home
  overflow hidden
  .fixed
    position fixed
    top 44px
    left 0
    right 0
    z-index 100
  .scroll
    margin-top 44px
    .loading-container
      position fixed
      left 0
      right 0
      top 0
      bottom 0
    .swiper
      margin 0
      padding 0
    .recommend-wraper
      display flex
      justify-content space-around
      width 100%
      padding-top 20px
      padding-bottom 40px
      .recommend
        width 80px
        height  80px
        text-align center
        img 
          width 80px
          height 80px
        p
          font-size $font-size-large
          color $color-font
          line-height 20px
</style>