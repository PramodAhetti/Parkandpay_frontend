import Navigation from './components/nav'
import Desc from './components/description'
import Search from './components/search'
import Login from './components/login'
import Sign from './components/signup'
import Map from './components/map.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
function App() { 
  const [user,setuser]=useState("");
  const [latitude,setlatitude]=useState(18.4489486);
  const [longitude,setlongitude]=useState(73.8536568);
 
  function updatepos(lat,lon){
        setlatitude(lat);
        setlongitude(lon);
  }

  async function signupHandler(details){
    console.log(details);
      try{
        let info=await axios.post('/user/new',{
          name:details.name,
          username:details.username,
          password:details.password,
          email:details.email
         })
         if(info.data.message=="user exists"){
          alert("Try again username exists")
         }else{
          setuser(details.username);
         }
      }catch(err){
        alert("Something went wrong try again");
      }
}


async function loginHandler(details){
    console.log(details);
      try{
        let info=await axios.post('/user/login',{
          username:details.username,
          password:details.password,
         })
         setuser(`${info.data.user}`)
      }catch(err){
        alert("wrong username or password")
      }
}
  
  return (
    <BrowserRouter>
      <div className='box-container'>
        <Navigation className='item' />
        <Routes>
          <Route path='' element={<Desc className="description" title="ParkNPay" desc="Book or sell your parking spots now"></Desc>}/>
          <Route path='/find' element={<Search />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Sign />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
