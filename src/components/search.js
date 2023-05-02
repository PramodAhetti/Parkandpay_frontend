import React from 'react'
import axios from 'axios'
import Map from '../components/map'
import { useContext } from 'react'
import userdetails from '../context/userdetails/userdetail'
export default function Search() {
   let a=useContext(userdetails)
   async function book(){
          try{
               let res=await axios.post('/user/book',{owned_id:a.curpark.owned_id});
               alert(res.data.message);
            }catch(error){
               alert(error.response.data.message)
          }
   }
   async function cancel(){
      try{
           let res=await axios.post('/user/cancel');
           alert(res.data.message);
        }catch(error){
           alert(error.response.data.message)
      }
  }

  function near(){
         navigator.geolocation.getCurrentPosition((data)=>{
          let pos={
            latitude:data.coords.latitude,
            longitude:data.coords.longitude,radius:10
          }
          axios.post('user/near', pos).then((info)=>{
                  if(info.data!=''){
                    a.setpos(pos);
                    a.updatecurpark(info.data[0]);
                    console.log(a.curpark);
                    alert("Showing nearest spot");
                  }else{
                    alert("No parking spots found");
                  }
        }).catch((error)=>{
             alert(error.response.data.message);
          
      })
    }
    );
  }
  return (<>
        <Map className="mapbox" lat={a.curpark.latitude} lon={a.curpark.longitude}></Map>
        <center className='searchbox'>
        <input placeholder="Location" className="searchbar location"></input>
        <button className ="searchbar find" onClick={near}>Find</button>
        <button className ="searchbar find" onClick={book}>Book</button>
        <button className ="searchbar find" onClick={cancel}>Cancel</button>
    </center>
    </>
  )
}
