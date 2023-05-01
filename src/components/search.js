import React from 'react'
import axios from 'axios'
import Map from '../components/map'
export default function Search(props) {

  async function position(pos){
          try{
            let info=await axios.post('user/near',{
              latitude:pos.coords.latitude,
              longitude:pos.coords.longitude,
              radius:5
             })
             console.log(info.data[0]);   
             if(info.data[0]){
                props.updatepos(info.data[0].latitude,info.data[0].longitude);
             }else{
                alert("No parking spot found near your location");
             }
          }catch(err){
             console.log(err);
             alert('Login required')
          }
   }
  function near(){
         navigator.geolocation.getCurrentPosition(position);
  }
  return (<>
        <Map className="mapbox" lat={13.45} lon={85.45}></Map>
        <center className='searchbox'>
        <input placeholder="Location" className="searchbar location"></input>
        <button className ="searchbar find" onClick={near}>Find</button>
    </center>
    </>
  )
}
