<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(msg = 'hello world', duration = 1000) {
        this.isShow = true
        this.message = msg
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration);
      }
    },
  }
</script>

<style scoped lang="stylus">
.toast
  padding:10px 10px;
  background: rgba(228,108,139,.8);
  position:fixed;
  left: 50%;
  top:50%;
  color: #fff;
  transform: translate(-50%,-50%);
  border-radius: 6px;
  z-index:66666;
  transition: all 0.5s;
  line-height 26px
</style>