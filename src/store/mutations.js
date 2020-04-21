import * as types from './mutation-types'
export default {
  [types.SET_MAITKEY](state, key) {
    state.maitKey = key
  },
  [types.SET_MINIWALLKEY](state, key) {
    state.miniWallkey = key
  },
  [types.ADD_CARTLIST](state, goods) {
    state.cartlist = [...state.cartlist, goods]
  },
  [types.INCREMENT_COUNT](state, goods) {
    state.cartlist = state.cartlist.map(item => {
      if (item.iid === goods.iid) {
        item.count = item.count + 1
      }
      return item
    })
  },
  [types.DECREMENT_COUNT](state, goods) {
    state.cartlist = state.cartlist.map(item => {
      if (item.iid === goods.iid) {
        if (item.count > 1) {
          item.count = item.count - 1
        } else {
          item.count = 1
        }
      }
      return item
    })
  },
  [types.DELETEGOODS](state, goods) {
    const index = state.cartlist.findIndex(item => item.iid === goods.iid)
    // splice改变原数组，不用重新赋值
    state.cartlist.splice(index, 1)
  },
  [types.SWITCH_SELECT](state, goods) {
    state.cartlist = state.cartlist.map(item => {
      if (item.iid === goods.iid) {
        item.select = !item.select
      }
      return item
    })
  },
  [types.SELECT_ALL](state, flag) {
    state.cartlist = state.cartlist.map(item => {
      item.select = flag
      return item
    })
  },
  [types.CLEAR_CART](state) {
    state.cartlist = []
  }
}