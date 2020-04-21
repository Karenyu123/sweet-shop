import Toast from './toast.vue'

const obj = {}

obj.install = function (Vue) {
  // 创建Toast组件构造器
  const ToastConstructor = Vue.extend(Toast)
  // new一个自定义组件
  const MyToast = new ToastConstructor()
  // 挂载到div上
  MyToast.$mount(document.createElement('div'))
  // 添加到页面
  document.body.appendChild(MyToast.$el)
  Vue.prototype.$toast = MyToast
}
export default obj