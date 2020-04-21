<template>
  <div class="goods-params" v-if="Object.keys(paramInfo).length > 0">
    <div class="title">
      <h4>商品参数</h4>
    </div>
    <div class="size-info">
      <table  v-for="(table, index) in paramInfo.sizes" :key="index">
        <tr v-for="(tr, idx) in table" :key="idx">
          <td v-for="(td, i) in tr" :key="i">{{td}}</td>
        </tr>
      </table>
    </div>
    <div class="desc">
      <table>
        <tr v-for="(info, index) in paramInfo.infos" :key="index">
          <td class="key">{{info.key}}</td>
          <td class="value">{{info.value}}</td>
        </tr>
      </table>
    </div>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      paramInfo: {
        type: Object,
        default() { return {} }
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.goods-params
  padding 0 16px 16px
  font-size $font-size-large
  color $color-font
  .title
    line-height 40px
    font-size 14px
    color #333333
  .size-info
    line-height 40px
    margin-bottom 20px
    table
      width 100%
      tr
        border-bottom 1px solid #f1f1f1
  .desc
    table
      width 100%
      tr
        border-bottom 1px solid #f1f1f1
        padding 10px 0
        .key
          width 20%
          line-height 100%
        .value
          width 80%
          padding 10px 0
          line-height 26px
          color $color-theme
  .info-img
    img
      width 100%
</style>