import React from 'react';
import Inputs from './inputs.js'

class Login extends React.Component { 
    render() {  
        return ( 
            <div>
                <h1>Login</h1>
                <div component={Inputs}>test</div>
            </div>
        )
  }  
}  
export default Login;