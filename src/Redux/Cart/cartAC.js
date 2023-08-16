import {SET_DATA_ORDER, SET_QUANTITY} from "./cartReducer";


export const cartDataOrderAC = (data) => {
  return {
    type: SET_DATA_ORDER,
    data
  }
}
export const changeQuantityCartAC = (num, id) => {

  return {
    type: SET_QUANTITY,
    num,
    id
  }
}
