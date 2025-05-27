import logo from '../images/logoHeader.svg';
import React from 'react';
import {Link} from 'react-router-dom'; // nezapomeň import!
function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Amber Plasma logo" className="logo"/>
            </Link>

        </header>
    );
}

export default Header;
