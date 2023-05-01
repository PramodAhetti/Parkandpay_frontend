import React from 'react'
import axios from 'axios'
import Map from '../components/map'
import { useState } from 'react'
import { useContext } from 'react'
import maincontext from '../context/maincontext'
export default function Search(props) {
   let a=useContext(maincontext)


    function position(data) {
      axios.post('user/near', {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      radius: 10
    }).then((info)=>{
              if(info.data!=''){
                let pos={
                  latitude:info.data[0].latitude,
                  longitude:info.data[0].longitude
                }
                a.setpos(pos);
                a.updatecurpark(info.data[0]);
                console.log(a.curpark.owned_id)
                alert("Showing nearest spot");
              }else{
                alert("No parking spots found");
              }
    }).catch((error)=>{
         alert(error.response.data.message);
      
  })
}
  function near(){
         navigator.geolocation.getCurrentPosition(position);
  }
  return (<>
        <Map className="mapbox" lat={a.position.latitude} lon={a.position.longitude}></Map>
        <center className='searchbox'>
        <input placeholder="Location" className="searchbar location"></input>
        <button className ="searchbar find" onClick={near}>Find</button>
    </center>
    </>
  )
}
