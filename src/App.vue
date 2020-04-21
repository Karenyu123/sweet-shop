<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar v-show="$route.path.indexOf('/goods-detail') === -1" />
  </div>
</template>
<script>
import Tabbar from './components/tabbar/tabbar'
export default {
  components: {
    Tabbar
  },
  mounted() {
  },
}
</script>
<style lang="stylus">
</style>
