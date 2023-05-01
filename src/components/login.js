import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import authcontext from '../context/authentication/authenticationcontext';

  const Login = () => {
    let usercontext=useContext(authcontext);
    async function loginuser() {
      try {
        let user={
          username: document.getElementById("username").value,
          password:document.getElementById("password").value
        }
        let info = await axios.post('/user/login',user);

        alert("logged in")
        usercontext.updateuser({username:user.username});
        console.log(usercontext.user.username)
      } catch (err) {
        alert("Wrong username or password !!!")
      }
    }
 
   return (
  <div className="loginbox" >
       <br></br>
       <input id="username" className='login_box' placeholder='Username'></input>
       <input id="password" className='login_box' placeholder='Password'></input>
       <button className="submit" style={{color:"black"}}  onClick={loginuser}>Login</button>
  </div>
)
}
export default Login;