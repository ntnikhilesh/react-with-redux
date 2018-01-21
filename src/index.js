// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


//Redux without React

import {createStore} from 'redux';

//create reducer that accept action dispatched by componente

const reducer=(state,action)=>{
    //one reducer can handle multiple actions
    switch (action.type){
        case 'ADD':
            state=state+action.payload;
            break;
        case 'SUBTRACT':
            state=state-action.payload;
            break;
    }
    //reducer must return state
    return state;
}
//create store that holds states(initialize with first state)
const store= createStore(reducer,1)

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
    payload:100 //payload of the action
})