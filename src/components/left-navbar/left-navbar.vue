<template>
  <div class="left-navbar">
    <ul class="list">
      <li 
        class="list-item" 
        v-for="(nav, i) in navList" 
        :key="nav.maitKey" 
        @click="switchNav(i,nav)"
        >
        <span :class="{active: currentIndex === i}">{{nav.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    props: {
      navList: {
        type: Array,
        default() { return []}
      }
    },
    data() {
      return {
        currentIndex: 0,
        maitkey: '',

      }
    },
    computed: {
      ...mapState(['maitKey', 'miniWallkey'])
    },
    mounted() {
      this.setMaitkey(this.navList)
      this.initMaitKey()
    },
    methods: {
      initMaitKey() {
        setTimeout(() => {
          this.$nextTick(() => {
            if(this.navList[0]) {
              this.maitkey = this.navList[0].maitKey
              this.setMaitkey(this.maitkey)
              this.setMiniWallkey(this.navList[0].miniWallkey)
            }
          })
        }, 200);
      },
      switchNav(i, nav) {
        this.currentIndex = i
        this.maitkey = nav.maitKey
        this.setMiniWallkey(nav.miniWallkey)
      },
      ...mapMutations({
        setMaitkey: 'SET_MAITKEY',
        setMiniWallkey: 'SET_MINIWALLKEY'
      })
    },
    watch: {
      maitkey(newVal) {
        this.setMaitkey(newVal)
      },
      miniWallkey(newVal) {
        this.setMiniWallkey(newVal)
      }
    },
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.left-navbar
  width 100px
  background $color-gray
  .list
    display flex
    flex-direction column
    text-align center
    .list-item
      height 45px
      line-height 45px
      font-size $font-size-large
      color $color-font
      box-sizing border-box
      overflow hidden
      span 
        display block
        width 100%
        height 100%
        box-sizing border-box
        overflow hidden
        text-align center
        &.active
          font-weight bold
          color $color-theme
          background $color-white
          border-left 3px solid $color-theme
          width 97px
          
</style>