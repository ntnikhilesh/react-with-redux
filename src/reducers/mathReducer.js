
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

export default mathReducer;