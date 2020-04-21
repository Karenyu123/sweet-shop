<template>
  <swiper ref="mySwiper" v-if="isShow" :options="swiperOptions" class="swiper" :style="{ height: height ? height : ''}">
    <swiper-slide v-for="(pic, i) in data" :key="i" class="swiper-item">
      <img v-if="pic.image" :src="pic.image" alt="">
      <img v-else :src="pic" alt="">
    </swiper-slide>
    <div class="swiper-pagination" id="dots" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
  export default {
    props: {
      data: {
        type: Array,
        default() {return []}
      },
      height: {
        type: String,
        default: ''
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    created() {
      this.isShow = true
    },
    data() {
      return {
        swiperOptions: {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          },
        },
        isShow: false
      }
    },
    activated() {
      this.isShow = true
    },
    deactivated() {
      this.isShow = false
    }
  }
</script>

<style  lang="stylus">
.swiper
  width 100%
  // height 195px
  overflow hidden
  .swiper-item
    height 100%
    width 100%
    img 
      // height 100%
      width 100%
</style>