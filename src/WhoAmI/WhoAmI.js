import React, { Component } from "react";
import './WhoAmI.css';
import ikurri from './ikurr.jpg';
import spain from './spain.png';
import uk from './uk.png';


class WhoAmI extends Component  {
	constructor() {
		super();
		this.state = {
			clas: ''
		}
	}
	setTextEn(){
		this.setState({
			clas: 'en'
		})
		
	};
	setTextEs(){
		this.setState({
			clas: 'es'
		})

	};
	setTextEus(){
		this.setState({
			clas: 'eus'
		})
	};
	render() {
		const clas = this.state.clas;
		let text;
		if(clas === 'es') {
			text = <p>
			Hola, mi nombre es Sonia, bienvenido a mi web personal.
		  <br></br>
		  He atendido diferentes workshops y quedadas de programacion,
		  me sorprendió el poder del JavaScript moderno.
		  <br></br>
		  Actualmente estoy cursando el ultimo año de mis estudios, desarrollo de software y 
		  Networking, me gustaría encontrar un puesto como desarrollador junior en un ambiente Agile.
		  <br></br>
		  Disfruto de formar parte de un equipo y la satisfacción de resolver problemas en equipo.
		   Recientemente he atendido un evento de Silicon Roundabout 
		  y Kodiri en el que completamos desafíos de JavaScript y puntué un máximo de 91 puntos de 100.
		</p>
		} else if(clas === 'en') {
				text = <p>
				Hi, I am Sonia T. Sanchez, welcome to my personal site.
				<br></br>
				I attended coding workshops and meetups in the London area and I was
				excited by the power of modern JavaScript.
				<br></br>
				Currently studying the last year of Software Development and networking
				degree, I am searching for a junior role within an agile team.
				<br></br>
				I enjoy pairing with other developers and the satisfaction of
				solving a problem together on a team application. Recently, I attended a
				Silicon Roundabout and Kodiri event in which we completed coding
				challenges and I score a maximum of 91 points .
			  </p>
		} else {
			text = <p>
			Kaixo nire izena Sonia da, ongi etorri nire webgune pertsonalera.
			  <br></br>
		   Tailer eta programazio topaketetan parte hartu dut,
			  JavaScript modernoaren potentziarekin harritu nintzen.
			  <br></br>
			  Azken ikasketak bezala , software garapena eta CCNA egiten ari naiz.
			 Gustatuko litzaidake  gazte sustatzaile postua topatzea, Agile ingurune batean.
			 <br></br>
		   Taldeko kide izateaz eta  arazoak konpontzearen poztasuna dut.
			 Duela gutxi,  Silicon Roundabout eta Kodiri ekitaldira joan eta parte hartu nuen.Taldeka
			 JavaScript erronkak osatu genituen  eta 100ko 91 gehienzko puntua lortu nuen.
			 </p>
		}
		return (
			<div>
				<div className='flag-container'>
					<a onClick={() => this.setTextEus()}><img className='flag' src={ikurri}></img></a>
					<a onClick={() => this.setTextEs()}><img className='flag' src={spain}></img></a>
					<a onClick={() => this.setTextEn()}><img className='flag' src={uk}></img></a>
				</div >
				<div className='whoText'>
					{text}
					</div>
				</div>
		);
	}
}

export default WhoAmI;
