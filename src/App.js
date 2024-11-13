import {Route , Routes,Link} from "react-router-dom";
import Home from "./Home";
import Womens from "./Womens";
import Mens from "./Mens";
import Kids from "./Kids";
import Services from "./Services";
import Login from "./Login";
import Navbar from "./Navbar";

import './index.css';
const App = () =>{
   
    return(
      <>
      <Navbar />

      
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/Womens" element={<Womens></Womens>}/>
    <Route path="/Mens" element={<Mens></Mens>}/>
    <Route path="/Kids" element={<Kids></Kids>}/>
    <Route path="/Services" element={<Services></Services>}/>
    <Route path="/Login" element={<Login></Login>}/>
    
  
  </Routes>
  
     
     
      </>
    );

};
export default App;

