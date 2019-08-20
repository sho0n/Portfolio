import React from 'react';
import './App.css';

function updateTransition() {
  var el = document.querySelector("div.box");
   
  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }
   
  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);

function App() {
  return (
    <div className="App">
      <div className='cover'>
       <div className='box'></div>
       
      </div>
        <div class="parent">
          <div class="box"> 
            <h1 className='title'>Sonia Sanchez</h1>
          </div>
        </div>
        <div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  
</div>

    </div>
  );
}

export default App;
