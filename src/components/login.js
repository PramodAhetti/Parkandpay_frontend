import React from 'react'
import axios from 'axios';


  const Login = () => {
    async function loginuser() {
      try {
        let info = await axios.post('/user/login', {
          username: document.getElementById("username").value,
          password: document.getElementById("password").value
        })
        localStorage.setItem("user_id", info.data.user_id);
        console.log(localStorage.getItem("user_id"))
        alert("logged in")
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