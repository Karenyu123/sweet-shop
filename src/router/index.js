import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Mine = () => import('../views/mine/mine.vue')
const GoodsDetail = () => import('../views/goods-detail/goods-detail.vue')
Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/goods-detail/:id',
      name: 'detail',
      component: GoodsDetail,
      props: true
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    }
]

const router = new VueRouter({
  routes
})

export default router
