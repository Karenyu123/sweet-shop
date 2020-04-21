<template>
  <div>
    <div class="goods-comment" v-if="Object.keys(commentInfo).length > 0">
    <div class="header">
      <span>用户评价</span>
      <span>更多<i class="iconfont">&#xe62d;</i></span>
    </div>
    <div class="content">
      <div class="user-info">
        <img :src="commentInfo.user.avatar" alt="">
        <span class="username">{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment">{{commentInfo.content}}</div>
      <div class="detail">
        <span class="date">{{commentInfo.created|dateFormat}}</span>
        <span class="goods-info">{{commentInfo.style}}</span>
      </div>
    </div>
  </div>
  <div class="none" v-else>
    <h4>暂无评论</h4>
  </div>
  </div>
</template>

<script>
import moment from 'moment'
  export default {
    props: {
      commentInfo: {
        type: Object,
        default() {return {}}
      }
    },
    filters: {
      dateFormat(val) {
        return moment(val).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable.styl"
.none
  padding 0 16px
  h4
    font-size $font-size-large
    color #333333
    line-height 40px
.goods-comment
  padding 0 16px 16px
  color $color-font
  .header
    display flex
    justify-content space-between
    font-size $font-size-large
    line-height 40px
    border-bottom 1px solid #f1f1f1
    margin-bottom 15px
    span:nth-child(1)
      color #333333
  .content
    .user-info
      margin-bottom 10px
      img 
        width 40px
        height 40px
        border-radius 50%
        margin-right 10px
        border 1px solid #f1f1f1
        vertical-align middle
    .comment
      font-size $font-size-large
      line-height 26px
      margin-bottom 10px
      text-indent 1.2em
    .detail
      font-size $font-size-middle
      .date
        margin-right 20px
</style>