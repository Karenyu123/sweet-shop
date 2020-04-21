export const cartlist = (state) => state.cartlist
export const totalPrice = (state) => {
  return state.cartlist.reduce((pre, item) => {
    if (item.select) {
      pre += item.count * item.newPrice
    }
    return pre
  },0)
}
export const totalCount = (state) => {
  return state.cartlist.reduce((pre, item) => {
    if (item.select) {
      pre += item.count
    }
    return pre
  },0)
}
export const selectFlag = (state) => {
  return state.cartlist.every(item => item.select === true)
} 