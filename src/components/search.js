import React from 'react'
import axios from 'axios'
import Map from '../components/map'
import { useState } from 'react'
export default function Search(props) {
   const [latitude,setlatitude]=useState(18.4582144);
   const [longitude,setlongitude]=useState(73.842688);
   const [parkdata,setparkdata]=useState("");

   function updatepos(lat,lon){
      setlatitude(lat);
      setlongitude(lon);
    }
    function position(data) {
      axios.post('user/near', {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      radius: 10
    }).then((info)=>{
              console.log(info);
              if(info.data!=''){
                setparkdata(info.data[0]);
                updatepos(info.data[0].latitude,info.data[0].longitude);
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
        <Map className="mapbox" lat={latitude} lon={longitude}></Map>
        <center className='searchbox'>
        <input placeholder="Location" className="searchbar location"></input>
        <button className ="searchbar find" onClick={near}>Find</button>
    </center>
    </>
  )
}
