
import './App.css';
import Data from "./data.json"
// import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Reactmap from './Components/Reactmap';
import Zipcode from './Components/Zipcode';

function App() {
 
  return (
    <>
   
      <Navbar />
      <Zipcode/>
      <Reactmap />
      {/* <Card /> */}
      </>
  );
}

export default App;
