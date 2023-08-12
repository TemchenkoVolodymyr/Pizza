import {combineReducers} from "redux";
import {HomePageReducer} from "./HomePage/HomePageReducer";


export default combineReducers({
  dataOfPizzas:HomePageReducer
  }

);