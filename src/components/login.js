import React from 'react'
import { useContext } from 'react';
import authcontext from '../context/authentication/authenticationcontext';

  const Login = () => {
    let auth=useContext(authcontext);

 
   return (
<>
<div className="loginbox" >
  <br></br>
<div className='titleforloginandsignup'> Park N Pay</div>
       <br></br>
       <input id="username" className='login_box' placeholder='Username'></input>
       <input id="password" className='login_box' placeholder='Password'></input>
       <br></br>
       <button className="login_box submit" style={{color:"black"}}  onClick={auth.loginuser}>Login</button>
       <br></br>
  </div>
</>
)
}
export default Login;