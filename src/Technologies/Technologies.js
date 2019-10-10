import React from 'react';
import './Technologies.css';
import '../App.css'
import Java from './javaIcon.png';
import Js from './jsIcon.png';
import Re from './reactIcon.png';
import HT from './htmlIcon.png';
import C from './cssIcon.png';
import No from './nodeIcon.png';




function Technologies() {
	return (
		<>
		
<div class="call-outs">
	<div class="call-out one">
		<div class="links">
			
			<a href="#"><img src={HT} alt='HTML' className='icons'/></a>
		</div>
	</div>

	<div class="call-out two">
		<div class="links">
			
			<a href="#"><img src={C} alt='CSS3' className='icons'/></a>
		</div>
	</div>

	<div class="call-out three">
		<div class="links">
			<img src={Js} alt='JavaScript' className='icons' />
			<a href="#">JAVASCRIPT</a>
		</div>
	</div>

	<div class="call-out four">
		<div class="links">
		<img src={Re} alt='React' className='icons'/>
		<a href="#">REACT</a>
		</div>
	</div>

	<div class="call-out four">
		<div class="links">
			<img src={No} alt='Nodejs' className='icons'/>
			<a href="#">NODE.JS</a>
		</div>
	</div>

	<div class="call-out four">
		<div class="links">
			<img src={Java} alt='Java' className='icons'/>
			<a href="#">JAVA</a>
		</div>
	</div>

</div>
</>
	)
}

export default Technologies;
