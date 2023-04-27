import React from 'react'
import axios from 'axios'
export default function nav() {
  return (
    <div className="row navContainer"  style={{border:"1px solid black"}}>
    <img className='logo' src="https://media.istockphoto.com/id/894875554/vector/no-parking-sign-in-crossed-out-red-circle-vector.jpg?s=612x612&w=0&k=20&c=nXr9cACwK53HRXU4mZ7V_r88nuSubca3jUrTS9QFL-s="></img>
    <div className='box'>
    <a  className="red">Find</a>
    <a  className="green"><center>Pay</center></a>
    <a  className="orange">About</a>
    </div>
    </div>  
  )
}

