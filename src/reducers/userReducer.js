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

export default userReducer;