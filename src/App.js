import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import NavBar from './NavBar/NavBar';
import Switch from './Switch';




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
      <head>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

      <script src="https://kit.fontawesome.com/df47df994c.js" crossorigin="anonymous"></script>      </head>
      <Switch/>
		  <Header/>
		  <NavBar/>
    
    </div>
  );
}

export default App;
