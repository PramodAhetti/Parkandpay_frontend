import Navigation from './components/nav'
import Desc from './components/description'
import Search from './components/search'
import Login from './components/login'
import Sign from './components/signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authprovider from './context/authentication/authprovider'
import Userdetail from './context/userdetails/userprovider'
import 'bootstrap/dist/css/bootstrap.css';
function App() { 
  
  return (
    <Authprovider>
    <Userdetail>
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
    </Userdetail>
    </Authprovider>
  );
}
export default App;
