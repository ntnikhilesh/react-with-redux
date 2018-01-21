import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import thunk from 'redux-thunk'
  
  //create store that holds states(initialize with first state)
export default createStore(
    combineReducers({math,user}),
    {},
    applyMiddleware(logger,thunk)); //mathReducer or mathReducer:mathReducer
