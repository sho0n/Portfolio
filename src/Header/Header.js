import React from 'react';
import './Header.css'

function Header(){
    return (
        <div className="cover">
		    <div className="parent">
                <div className='box' >
                    <div className='title'>Sonia Sanchez</div>
                    <div className="grid-item1">FullStack developer</div>
                    <div className="location">LONDON</div>
                </div>
            </div>
        </div>
    );
}

export default Header;