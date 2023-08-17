import initialState from "../initialState";

export const SET_DATA_ORDER = "SET_DATA_ORDER"
export const SET_QUANTITY = "SET_QUANTITY"

const CartReducer = (cartData = initialState.cart, action) => {
  switch (action.type) {
    case SET_DATA_ORDER: {
      return {
        ...cartData, orders: action.data
      }
    }
    case SET_QUANTITY : {
      return {
        ...cartData, orders: cartData.orders.map(order => {
          if (order.id === action.id){
            return {...order, quantity: action.num};
          }else{
            return order
          }
            })
      }
    }

    default :
      return cartData
  }
}

export default CartReducer