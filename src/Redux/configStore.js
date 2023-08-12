import {applyMiddleware, compose, createStore} from 'redux';

import thunk from 'redux-thunk';
import initialState from "./initialState";
import reducer from './combineReducers'



const store = createStore(reducer, initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;