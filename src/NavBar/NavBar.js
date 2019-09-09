import React from 'react';
import './NavBar.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WhoAmI from '../WhoAmI/WhoAmI';
import Contact from '../Contact/Contact';
import Technologies from '../Technologies/Technologies'

function NavBar(){
    return(
        <>
        <Router>
        <div className='nav'>
        <div className='nav-item'><Link to='/whoami'>WHOAMI</Link></div>
        <div className='nav-item'><Link to='/technologies'>TECHNOLOGIES</Link></div>
        <div className='nav-item'><Link to='/contact'>CONTACT</Link></div>
        </div>
        
            <Route path='/whoami' component={WhoAmI}></Route>
            <Route path='/technologies' component={Technologies}></Route>
            <Route path='/contact' component={Contact}></Route>
        
        </Router>
        </>
    )
}

export default NavBar;