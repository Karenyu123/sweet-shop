import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import './common/stylus/index.styl'
import http from './http'
import toast from './base/toast'
import confrim from './base/confirm'

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/img/loading.jpg')
})
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(toast)
Vue.use(confrim)
fastclick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
