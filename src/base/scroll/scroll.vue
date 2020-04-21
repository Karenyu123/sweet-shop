<template>
  <div class="scrollWrapper" ref="scrollWrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    props: {
      data: {
        type: Array,
        default() {return []}
      },
      probeType: {
        type: Number,
        default: 2
      },
      listenScroll: {
        type: Boolean,
        default: true
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.$nextTick(() => {
          this._initScroll()
        })
      }, 20);
    },
    methods: {
      _initScroll() {
        this.scroll = new BScroll(this.$refs.scrollWrapper, {
          click: true,
          scrollY: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })
        if(this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('onScrollY', pos.y)
          })
        }
        if(this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullUpLoad')
          })
        }
      },
      scrollTo(x, y, time) {
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullingUp() {
        this.scroll && this.scroll.finishPullUp()
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, 20);
      } 
    }
  }
</script>

<style scoped lang="stylus">
  .scrollWrapper
    height calc(100vh - 94px)
    overflow hidden
</style>