import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateLessComponent from "./components/StateLessComponent";
import StateFull, {StateFullComponent}  from "./components/StateFullComponent";
import Home from "./baitapChiaComponent/Home"
function App() {
  return(
    <div>
      {/* <StateLessComponent />
    <StateFullComponent /> */}
      <Home />
    </div>
    
  ) 
}

export default App;
