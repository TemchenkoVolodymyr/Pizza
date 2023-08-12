import {SET_PIZZAS} from "./HomePageReducer";


export const homePageAC = (data) => {
  return{
    type:SET_PIZZAS,
    pizzas:data
  }
}