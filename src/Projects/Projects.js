import React from 'react';
import './Projects.css'

function Projects() {
    return (
        <div className='projContainer'>
            <div className='proj'>
            <h1><a className='projectLink' href='https://sho0n.github.io/react-tetris/'>React-Tetris</a></h1>
            <iframe src="https://sho0n.github.io/react-tetris/" title='tetris'/>
            </div>
            <div className='proj'>
            <h1><a className='projectLink' href='https://kodflix-sonia.herokuapp.com/'>Kodflix</a></h1>
            <iframe src="https://kodflix-sonia.herokuapp.com/" title='kodflix'/>
            </div>
            <div className='proj'>
            <h1>MERN</h1>
            <iframe src="" title='mern'/>
            </div>
        </div>
    );
}

export default Projects;