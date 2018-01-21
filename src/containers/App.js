import React from "react";
import {connect} from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';

class App extends React.Component {
 
    render() {
        return (
            <div className="container">
                <Main changeUsername={()=>this.props.setName('LA')}/>
                 <User username={this.props.user.name}/> 
            </div>
        );
    }
}

//map states so that we can use in our component
const mapStateToProps=(state)=>{
    return{
        user:state.user,
        math:state.math
    };
};

//handle dispatch event
const mapDispatchToProps=(dispatch)=>{
    return{
       setName:(name)=>{
           dispatch({
               type:'SET_NAME',
               payload: name
           })
       }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App;