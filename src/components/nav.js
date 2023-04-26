import React from 'react'
import axios from 'axios'
export default function nav() {
  async function near(){
         let showposition =(data)=>{
               latitude=data.coords.latitude;
               longitude=data.coords.longitude;
         }
         let latitude,longitude;
         navigator.geolocation.getCurrentPosition(showposition);
         let info=await axios.post('user/near',{
          latitude:latitude,
          longitude:longitude,
          radius:100
         })
         console.log(info.data)
  }
  return (
    <div className="mainbox">
    <img className='logo' src="https://media.istockphoto.com/id/894875554/vector/no-parking-sign-in-crossed-out-red-circle-vector.jpg?s=612x612&w=0&k=20&c=nXr9cACwK53HRXU4mZ7V_r88nuSubca3jUrTS9QFL-s="></img>
    <div className='box'>
    <a onClick={near} className="green">Find</a>
    <a  className="orange">About</a>
    </div>
    </div>  
  )
}

