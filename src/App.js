
import './App.css';
import Data from "./data.json"
// import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Reactmap from './Components/Reactmap';
import Searchbar from './Components/Searchbar';

function App() {
 
  return (
    <>
   
      <Navbar />
      <Searchbar placeholder="Enter the address" data={Data}/>
      <Reactmap />
      {/* <Card /> */}
      </>
  );
}

export default App;
