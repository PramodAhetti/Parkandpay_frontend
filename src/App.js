import Navigation from './components/nav'
import Desc from './components/description'
import Search from './components/search'
import Test from './components/test'
import Login from './components/login'
function App() { 
  return (
    <>
      <Navigation></Navigation>
      <Desc className="description"  title="ParkNpay" desc="The Park, Pay, and Go system typically involves the use of technology such as mobile apps, electronic payment systems, and sensors that detect the presence of vehicles in parking spaces. This allows drivers to quickly and easily find available parking spaces, pay for their parking, and exit the parking area without the need for physical cash or tickets"></Desc>
      <Login></Login>
    </>
  );
}

export default App;
