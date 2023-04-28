import Navigation from './components/nav'
import Desc from './components/description'
import Search from './components/search'
import Test from './components/test'
import Login from './components/login'
import Sign from './components/signup'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
function App() { 
  const [user,setuser]=useState("");
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
    <div className='box-container'>
      <Navigation className='item'></Navigation>
      <Desc className="item"  title="ParkNpay" desc="Book your parking spot now"></Desc>
     
      
    {
      user !==''?(<Search className='item' ></Search>):(<> <Login login={loginHandler}></Login>  <Sign signup={signupHandler}></Sign></> )

    }

        </div>
  );
}
export default App;
