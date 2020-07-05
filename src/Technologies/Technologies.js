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
			<div class="gridOne">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={HT} alt="Avatar" className='cardImg' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<h1>HTML5</h1>
							<p>Expert</p>
						</div>
					</div>
				</div>

				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={C} alt='CSS3' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<h1>CSS 3</h1>
							<p>Expert</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Js} alt='JavaScript' className='icons' />

						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<h1>JAVASCRIPT</h1>
							<p>Intermediate</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Re} alt='React' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>	
							<h1>REACT</h1>
							<p>Intermediate</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={No} alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<h1>NODE.JS</h1>
							<p>Intermediate</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Java} alt='Java' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<h1>JAVA</h1>
							<p>Beginner</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Technologies;
