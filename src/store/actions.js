import * as types from './mutation-types'
export const addToCart = ({ commit, state }, goods) => {
  const flag = state.cartlist.find(item => {
    return item.iid === goods.iid
  })
  if (!flag) {
    commit(types.ADD_CARTLIST, goods)
  } else {
    commit(types.INCREMENT_COUNT, goods)
  }
}

export const decrementCount = ({commit, state}, goods) => {
  const flag = state.cartlist.filter(item => {
    return item.iid === goods.iid
  })
  if (flag[0] && flag[0].count > 1 ) {
    commit(types.DECREMENT_COUNT, goods)
  } else {
    commit(types.DELETEGOODS, goods)
  }
}

export const clearCartlist = ({commit}) => {
  commit(types.CLEAR_CART)
}

export const switchSelect = ({ commit }, goods) => {
  commit(types.SWITCH_SELECT, goods)
}
export const selectAllGoods = ({ commit }, flag) => {
  commit(types.SELECT_ALL, flag)
}