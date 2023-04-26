import React from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function () {
  const [user, setuser] = useState("");
    async function login(){
        try{
          let info=await axios.post('/user/login',{
            username:document.getElementById("username").value,
            password:document.getElementById("password").value
           })
           setuser(`${info.data.user}`)
        }catch(err){
          alert("wrong username or password")
        }
 }



 if(user==""){ 
   return (
  <div className="loginbox">
      <center>LOGIN</center><br></br>
      <label className='logincontent'>Username</label><input  id="username" placeholder='username'></input><br></br>
      <label className='logincontent'>Password </label><input id="password" placeholder='password'></input>
      <button onClick={login} className='logincontent'>submit</button>
  </div>
)
 }
}
