<template>
  <div class="category">
    <y-header>
      <h4 class="title" slot="center">商品分类</h4>
    </y-header>
    <div class="content-wrapper">
      <div class="nav">
        <scroll ref="navScroll">
          <left-navbar :navList="navList"/>
        </scroll>
       </div>
      <scroll ref="contentScroll" :data="subDetailList">
        <div class="right-wrapper">
          <main-category :cats="subCategoryList" />
          <div class="cat-detail">
            <tab-menu :menuList="['流行', '新款', '精品']" @getMenuIndex="getMenuIndex" />
            <listview :goodsList="subDetailList" :catFlag="true" />
          </div>
        </div>
        <div class="loading-container"  v-if="isLoading">
          <loading />
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import YHeader from '../../base/y-header/y-header'
import LeftNavbar from '../../components/left-navbar/left-navbar'
import MainCategory from '../../components/main-category/main-category'
import TabMenu from '../../components/tab-menu/tab-menu'
import Listview from '../../base/listview/listview'
import Scroll from '../../base/scroll/scroll'
import Loading from '../../base/loading/loading'
import { mapState } from 'vuex'
  export default {
    components: {
      YHeader,
      LeftNavbar,
      MainCategory,
      TabMenu,
      Listview,
      Scroll,
      Loading
    },
    data() {
      return {
        navList: [],
        subCategoryList: [],
        types: ['pop', 'new', 'sell'],
        currentIndex: 0,
        subDetailList: [],
        isLoading: true
      }
    },
    computed: {
      type() {
        return this.types[this.currentIndex]
      },
      ...mapState(['maitKey', 'miniWallkey'])
    },
    mounted() {
      this.fetchCategories()
    },
    methods: {
      getMenuIndex(i) {
        this.currentIndex = i
      },
      async fetchSubCatDetail(type) {
        this.isLoading = true
        const { data } = await this.$http.get('/subcategory/detail', {
          params: {
            miniWallkey: this.miniWallkey,
            type: type || this.type
          }
        })
        this.subDetailList = data
        this.isLoading = false
        this.$refs.contentScroll.refresh()
      },
      async fetchSubCategory() {
        this.isLoading = true
        const { data } = await this.$http.get('/subcategory', {params: {
          maitKey: this.maitKey 
        }})
        this.subCategoryList = data.data.list
        this.isLoading = false
        // console.log(this.subCategoryList)
      },
      async fetchCategories() {
        const { data } = await this.$http.get('/category')
        this.navList = data.data.category.list
      } 
    },
    watch: {
      maitKey() {
        setTimeout(() => {
          this.$nextTick(() => {
          this.fetchSubCategory()
          this.$refs.contentScroll.scrollTo(0, 0, 300)
        })
        }, 300);
      },
      miniWallkey() {
        setTimeout(() => {
          this.$nextTick(() => {
          this.fetchSubCatDetail()
        })
        }, 300);
      },
      type(newVal) {
        this.fetchSubCatDetail(newVal)
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.category
  padding-top 44px
  padding-bottom 50px
  .loading-container
    position fixed
    left 0
    right 0
    top 0
    bottom 0
  .content-wrapper
    display flex
    justify-content space-between
    .nav
      background $color-gray
    .right-wrapper
      max-width calc(100vw - 100px)
      box-sizing border-box
      overflow hidden
</style>