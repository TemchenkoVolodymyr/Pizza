import initialState from "../initialState";

export const SET_PIZZAS = "SET_PIZZAS"

export const HomePageReducer = (dataOfPizzas = initialState.dataOfPizzas,action) => {
  switch (action.type) {
    case SET_PIZZAS : {
      return action.pizzas
    }

    default : return dataOfPizzas
  }
}