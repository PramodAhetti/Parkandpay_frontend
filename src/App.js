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
      user !==''?(<Search className='item' ></Search>):( <Login login={loginHandler}></Login>   )

    }

        </div>
  );
}
export default App;
