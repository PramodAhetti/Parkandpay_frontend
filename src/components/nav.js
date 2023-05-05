import React from 'react'
import axios from 'axios'
import {Link, link} from 'react-router-dom'
import { useContext } from 'react';
import authcontext from '../context/authentication/authenticationcontext';
export default function Nav() {
  function revert(){
    console.log("hi")
    let elements = document.querySelectorAll('*'); 
    if(localStorage.getItem('theme')=="white"){
      localStorage.setItem('theme',"black");
      elements.forEach(elements=>{
        elements.style.backgroundColor="black";
        elements.style.color="white";
      })
    }else{
      localStorage.setItem('theme',"white");
      elements.forEach(elements=>{
        elements.style.backgroundColor="white";
        elements.style.color="black";
      })
    }

  }
  let usercontext=useContext(authcontext);
  return (
    <div  className="navcontainer">
    <img  className='logo' src="https://media.istockphoto.com/id/894875554/vector/no-parking-sign-in-crossed-out-red-circle-vector.jpg?s=612x612&w=0&k=20&c=nXr9cACwK53HRXU4mZ7V_r88nuSubca3jUrTS9QFL-s="></img>
    <div className='box'>
    <Link  className="pages" to=''>Home</Link>
    <Link  className="pages" to='/find'>Find</Link>
    <Link  className="pages" to='/about'>About</Link>
    {usercontext.user.username=='Login' ? (    <Link  className="pages" to='/signup'>Signup</Link>) : (< ></>)}
    <Link  className="pages" to='/login'>{usercontext.user.username}</Link>    
    <img className='logo blackwhite'  src="https://yt3.googleusercontent.com/ytc/AGIKgqOgwhNXC7sBx760Ad39FgjxBFH218R6u87yLhv0Qw=s900-c-k-c0x00ffffff-no-rj" onClick={revert}></img>
    </div>
    </div>  
  )
}

