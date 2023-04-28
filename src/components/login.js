import React from 'react'
import { useState } from 'react';
import { Button } from 'bootstrap';



export default function (props) {
const loginUser=()=>{
  props.login({username:document.getElementById("username").value,password:document.getElementById("password").value})
}

 
   return (
  <div className="loginbox" >
       <br></br>
       <input id="username" className='login_box' placeholder='Username'></input>
       <input id="password" className='login_box' placeholder='Password'></input>
       <button className="submit" style={{color:"black"}}  onClick={loginUser}>Login</button>
  </div>
)
}
