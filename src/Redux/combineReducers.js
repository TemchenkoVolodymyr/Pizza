import {combineReducers} from "redux";
import {HomePageReducer} from "./HomePage/HomePageReducer";
import BlogSectionReducer from "./BlogSection/BlogSectionReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  dataOfPizzas:HomePageReducer,
  blogData:BlogSectionReducer,
  form:formReducer
  }

);