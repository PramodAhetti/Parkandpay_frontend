import React from 'react'
import axios from 'axios'
export default function search() {
  async function position(data){
    let info=await axios.post('user/near',{
      latitude:data.coords.latitude,
      longitude:data.coords.longitude,
      radius:100
     })
     console.log(info.data)
   }
  function near(){
         navigator.geolocation.getCurrentPosition(position);
  }
  return (
    <center className='searchbox'>
        <input placeholder="location" className="searchbar location"></input>
        <button className ="searchbar find" onClick={near}>find</button>
    </center>
  )
}
