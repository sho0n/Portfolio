import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import NavBar from './NavBar/NavBar';
import Switch from './Switch'




//TRANSITION FOR TITLE //
function updateTransition() {
  var el = document.querySelector("div.box");
   
  if (el) {
    el.className = "box1";
  } 
  //else {
   // el = document.querySelector("div.box1");
   // el.className = "box";
  //}
   return el;
}



var intervalID = window.setInterval(updateTransition, 1000);

function App() {
  return (
    <div className="App">
      <Switch/>
		  <Header/>
		  <NavBar/>
    
    </div>
  );
}

export default App;
