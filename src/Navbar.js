import React from 'react';
import logo from './logo.png';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <img className='logo' src={logo}/>
            <ul className='Navbar-menu'>
                <li>Live</li>
                <li>Push</li>
                <li>Link</li>
                <li>Shop</li>
                <li>Packs</li>
                <li>Help</li>
                <li>More +</li>
            </ul>
            <ul className='Navbar-menuRight'>
                <li className='Navbar-tryLive'>
                    Try Live For Free 
                </li> 
                <li className='Navbar-menuRightSmall'>Account</li>
                <li className='Navbar-menuRightSmall'>Log Out</li>
            </ul>
        </div>
    )
}
