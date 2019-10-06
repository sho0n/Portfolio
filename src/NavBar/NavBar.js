import React from 'react';
import './NavBar.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WhoAmI from '../WhoAmI/WhoAmI';
import Contact from '../Contact/Contact';
import Technologies from '../Technologies/Technologies'
import Projects from '../Projects/Projects'

function NavBar(){
    return(
        <>
        <Router>
        <div className='nav'>
        <div className='nav-item'><Link to='/whoami' className='link'>WHOAMI</Link></div>
        <div className='nav-item'><Link to='/technologies' className='link'>TECHNOLOGIES</Link></div>
        <div className='nav-item'><Link to='/projects' className='link'>PROJECTS</Link></div>
        <div className='nav-item'><Link to='/contact' className='link'>CONTACT</Link></div>
        </div>
        
            <Route path='/whoami' component={WhoAmI}></Route>
            <Route path='/technologies' component={Technologies}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/contact' component={Contact}></Route>
        
        </Router>
        </>
    )
}

export default NavBar;