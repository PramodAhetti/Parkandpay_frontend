import React from 'react'
import axios from 'axios'
import {Link, link} from 'react-router-dom'
export default function nav() {
  return (
    <div  className="navcontainer">
    <img  className='logo' src="https://media.istockphoto.com/id/894875554/vector/no-parking-sign-in-crossed-out-red-circle-vector.jpg?s=612x612&w=0&k=20&c=nXr9cACwK53HRXU4mZ7V_r88nuSubca3jUrTS9QFL-s="></img>
    <div className='box'>
    <Link  className="pages" to=''>Home</Link>
    <Link  className="pages" to='/login'>Login</Link>      
    <Link  className="pages" to='/find'>Find</Link>
    <Link  className="pages" to='/signup'>Signup</Link>
    </div>
    </div>  
  )
}

