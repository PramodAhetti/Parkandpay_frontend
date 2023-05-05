import React from 'react'
import Map from '../components/map'
import { useContext } from 'react'
import userdetails from '../context/userdetails/userdetail'
export default function Search() {

  let userstate=useContext(userdetails);

  function near(){
         navigator.geolocation.getCurrentPosition((data)=>{
          let pos={
            latitude:data.coords.latitude,
            longitude:data.coords.longitude,
            radius:10
          }
          userstate.near(pos);

    }
    );
  }
  return (
    <>
        <Map className="mapbox" lat={userstate.currentspot.latitude} lon={userstate.currentspot.longitude}></Map>
        <center className='searchbox'>
        <input placeholder="Location find" className="searchbar location"></input>
        <button className ="searchbar find" onClick={near}>Find</button>
        <button className ="searchbar find" onClick={userstate.book}>Book</button>
        <button className ="searchbar find" onClick={userstate.cancel}>Cancel</button>
        <button className ="searchbar find" onClick={userstate.sell}>Sell</button>
    </center>
    </>
  )
}
