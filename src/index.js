// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


//Redux without React

import {createStore,combineReducers} from 'redux';


//create reducer that accept action dispatched by componente
//intialization of the state using ES6
const mathReducer=(state={
    result:1, 
    lastValues:[]
},action)=>{
    //one reducer can handle multiple actions
    switch (action.type){
        case 'ADD':
            //state.result +=action.payload;
            //create new js object(imutable thing)
            state={
                //using ES6 copy the all property of object.its similar to
                //result:state.result, 
                //lastValues:state.lastValues
                ...state ,
                result:state.result+action.payload,
                lastValues:[...state.lastValues,action.payload] //pushing data in imutable way
            }
            
            break;
        case 'SUBTRACT':
                state={
                    //using ES6 copy the all property of object.its similar to
                    //result:state.result, 
                    //lastValues:state.lastValues
                    ...state ,
                    result:state.result-action.payload,
                    lastValues:[...state.lastValues,action.payload]
                }
                    break;
            }
    //reducer must return state
    return state;
}

//reducer with initial state
const userReducer=(state={
    name:'CC', age:23
},action)=>{
    //one reducer can handle multiple actions
    switch (action.type){
        case 'SET_NAME':
            
            state={
                ...state ,
                name:action.payload
                 }
            
            break;
        case 'SET_AGE':
                state={
                    ...state ,
                    age:action.payload
                     }
                    break;
            }
    //reducer must return state
    return state;
}


//create store that holds states(initialize with first state)
const store= createStore(combineReducers({mathReducer,userReducer})) //mathReducer or mathReducer:mathReducer

//this fuction get executed once store updated
store.subscribe(()=>{
    console.log('Store updated!',store.getState());
});

//dispatch the action
store.dispatch({
    type:'ADD',
    payload:10 //payload of the action
})

store.dispatch({
    type:'ADD',
    payload:100 //payload of the action
})

store.dispatch({
    type:'SUBTRACT',
    payload:110 //payload of the action
})

store.dispatch({
    type:'SET_AGE',
    payload:123 //payload of the action
})