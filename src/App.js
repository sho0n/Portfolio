import React from 'react';
import './App.css';
import html from './html.png';


//TRANSITION FOR TITLE //
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
		
		
    	<div className="cover">
		
        	<div className="parent">
			
        		<div className='box' >
					{updateTransition}
          			<div className='title'>Sonia Sanchez</div>
					<div className="grid-item1">FullStack developer</div>
					<div className="location">LONDON</div>
          		</div>
				
        	</div>
		</div>
		<div className="grid-container">
  			
			<div className="grid-item1">REACT</div>
			<div className="grid-item1">REACT</div>
			<div className="grid-item1">JAVA</div>
			<div className="grid-item1">GITHUB</div>
			<div className="grid-item1">GITHUB</div>
			<div className="grid-item">
				<div className='texto'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div className="grid-item">
			<div className='texto'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div className="grid-item">
				<div className='texto'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div className="grid-item">
				<div className='texto'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div className="grid-item">
				<div className='texto'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			
			</div>
	</div>
  );
}

export default App;