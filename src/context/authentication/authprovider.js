import React, { useState } from 'react'
import axios from 'axios';
import Authcontext from './authenticationcontext'
export default function Authprovider({children}) {
  
  const [user,setuser]=useState({username:"Login"});
  
  async function signupHandler(details){
    console.log(details);
      try{
        let info=await axios.post('/user/new',{
          name:details.name,
          username:details.username,
          password:details.password,
          email:details.email
         })
         if(info.data.message=="user exists"){
          alert("Try again username exists")
         }else{
          alert("Logged in")
          setuser({username:details.username,auth_token:info.data.auth_token});
          localStorage.setItem('user_id',info.data.user_id);
         }
      }catch(err){
        alert("Something went wrong try again");
      }
}

  async function loginuser() {
    try {
      let newuser={
        username: document.getElementById("username").value,
        password:document.getElementById("password").value
      }
      let info=await axios.post('/user/login',newuser);
      localStorage.setItem('auth_token',info.data.auth_token);
      localStorage.setItem('user_id',info.data.user_id);
      console.log(localStorage.getItem('auth_token'))
      setuser({username:newuser.username});
      alert("logged in")
      console.log(user.username)
    } catch (err) {
      alert("Wrong username or password !!!")
    }
  }


  return (
    <Authcontext.Provider value={{user,loginuser,signupHandler}}>{children}</Authcontext.Provider>
  )
}
