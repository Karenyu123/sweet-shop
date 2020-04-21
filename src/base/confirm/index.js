import Confirm from './confirm.vue'
const obj = {}
obj.install = function (Vue) {
  const ConfirmConstructor = Vue.extend(Confirm)
  const confirm = new ConfirmConstructor()
  confirm.$mount(document.createElement('div'))
  document.body.appendChild(confirm.$el)
  Vue.prototype.$confirm = confirm
}

export default obj