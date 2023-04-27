import React from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function () {
  
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
  <div className="row loginbox"  style={{border:"1px solid black"}}>
      <div className="col-4 offset-md-2 logintitle"  style={{border:"1px solid black"}}>
        <h4>
        LOGIN
        </h4>
      <label className='logincontent'>Username</label><input  id="username"  className='logincontent'></input>
      <label className='logincontent'>Password </label><input id="password" className='logincontent'></input>
      
      <button onClick={login} className='logincontent'>submit</button>
      </div>
  </div>
)
 }
}
