import Navigation from './components/nav'
import Desc from './components/description'
import Search from './components/search'
import Test from './components/test'
import Login from './components/login'
import Sign from './components/signup'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
function App() { 
  const [user, setuser] = useState("");
  const loginHandler=(loginInfo)=>{
console.log(loginInfo);
setuser(loginInfo)
  }
  return (
    <div className='row' style={{border:"1px solid black"
    // , height:"100vh"
    }}>
      <Navigation></Navigation>
      <Login user={user} handleLogin={loginHandler}></Login>
      <Search className="searchbar"></Search>
      <Desc className="description"  title="ParkNpay" desc="The Park, Pay, and Go system typically involves the use of technology such as mobile apps, electronic payment systems, and sensors that detect the presence of vehicles in parking spaces. This allows drivers to quickly and easily find available parking spaces, pay for their parking, and exit the parking area without the need for physical cash or tickets"></Desc>
{/*      
     <div className='row' style={{border:"1px solid black", height:"60vh"}}>
     <div className='col-2' style={{border:"1px solid black", height:"60vh"}}>
     
     
     </div>
     <div className='col-10' style={{border:"1px solid black", height:"60vh"}}>
     
     
     </div>
    </div> */}
     
    </div>
  );
}

export default App;
