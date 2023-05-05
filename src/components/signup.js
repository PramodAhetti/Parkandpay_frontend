import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import authcontext from '../context/authentication/authenticationcontext';
export default function Signup() {

  let usercontext=useContext(authcontext);
  function signup(){
    let details={
      name:document.getElementById('name').value,
      username:document.getElementById('new-username').value,
      password:document.getElementById('new-password').value,
      email:document.getElementById('email').value,
    }
    usercontext.signupHandler(details);
  }


  return (
    <div className="signupbox" >
        <br></br>
            <div className='titleforloginandsignup'> Park N Pay</div>
            <br></br>
            <input id="name" className='login_box' placeholder='First name'></input>
            <input id="new-username" className='login_box' placeholder='Username'></input>
            <input id="new-password" className='login_box' placeholder='Password'></input>
            <input id="email" className='login_box' placeholder='email'></input>
            <br></br>
            <button className="submit" onClick={signup} style={{color:"black"}} >Signup</button>
            <br></br>
    </div>
  )
}
