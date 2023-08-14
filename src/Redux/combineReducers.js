import {combineReducers} from "redux";
import {HomePageReducer} from "./HomePage/HomePageReducer";
import BlogSectionReducer from "./BlogSection/BlogSectionReducer";


export default combineReducers({
  dataOfPizzas:HomePageReducer,
  blogData:BlogSectionReducer,
  }

);