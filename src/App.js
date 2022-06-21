
import './App.css';
import Data from "../src/Components/BuildingDetails.json";
import Navbar from './Components/Navbar';
import Reactmap from './Components/Reactmap';
import Zipcode from './Components/Zipcode';

function App() {
  let buildingdata = Data;

  let Zipcodes = buildingdata.map((element) => {
    return element.PostalCode
  
  });

 const uniquePostal = Zipcodes.filter((currentValue, index, arr)=>{
 return arr.indexOf(currentValue) === index && currentValue !=null
  })
 
  return (
    <>
   
      <Navbar />
      <Zipcode uniquePostal={uniquePostal}/>
      <Reactmap />
      {/* <Card /> */}
      </>
  );
}

export default App;
