import React from 'react'

export default function signup(props) {
 function signup(){
    let details={
    name:document.getElementById("name").value,
    username:document.getElementById("new-username").value, 
    password:document.getElementById("new-password").value,
    email:document.getElementById("email").value,
}
props.signup(details);
 }
  return (
    <div className="signupbox" >
            <input id="name" className='login_box' placeholder='First name'></input>
            <input id="new-username" className='login_box' placeholder='Username'></input>
            <input id="new-password" className='login_box' placeholder='Password'></input>
            <input id="email" className='login_box' placeholder='email'></input>
            <button className="submit" onClick={signup} style={{color:"black"}} >Signup</button>
    </div>
  )
}
