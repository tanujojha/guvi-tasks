import { useState } from 'react';
import './App.css';
import Nav from './nav';
import Midsection from './midsection';
import Main from "./main"


function App() {

  const [cart, setCart] = useState(0);

  function callback(added){
    added ? setCart((prev)=> prev + 1) : setCart((prev)=> prev - 1)
    
  }

  return (
    <div className="App">
      <Nav cart = {cart}/>
      <Midsection/>
      <Main cart = {cart} callback = {callback}/> 
    </div>
  );
}

export default App;
