import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="app.js">Order</a>
                <a href="app.js">Order Review</a>
                <a href="app.js">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;