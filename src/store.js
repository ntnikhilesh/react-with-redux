import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';
  
  //create store that holds states(initialize with first state)
export default createStore(
    combineReducers({math,user}),
    {},
    applyMiddleware(logger)); //mathReducer or mathReducer:mathReducer
