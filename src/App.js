import Navigation from './components/nav'
import Desc from './components/description'
import Search from './components/search'
import Login from './components/login'
import About from './components/about'
import Sign from './components/signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authprovider from './context/authentication/authprovider'
import Userdetail from './context/userdetails/userprovider'
function App() { 
  localStorage.setItem('theme',"white");
  return (
<Authprovider>

<BrowserRouter>
  <div className='box-container'>
    <div className="style"></div>
    <Navigation className='item' />
    <Userdetail>
    <Routes>
      <Route path='' element={<Desc className="description" title=".ParkNPay" desc=".Welcome to ParkandPay - the smarter way to park!."></Desc>}/>
      <Route path='/find' element={<Search />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Sign />} />
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Userdetail>
  </div>
</BrowserRouter>
</Authprovider>
  );
}
export default App;


