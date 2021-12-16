import React from 'react';
import logo from './logo.svg';
import ListIcon from '@mui/icons-material/List';
import './navBar.css'


const NavBar = () => {
    return (
        <header className='primary-header flex'>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='mobile-nav-toogle'>
                <ListIcon sx={{ fontSize: 100 }}></ListIcon>
            </div>
            <nav>
                <ul id='primary-navigation' className='primary-navigation flex'>
                    <li className='active'><a href=""><span></span></a></li>
                    <li><a href="#"><span>Photo</span></a></li>
                    <li><a href="#"><span>Video</span></a></li>
                    <li><a href="#"><span>Photographers</span></a></li>
                    <li><a href="#"><span>Photo Retouch</span></a></li>
                    <li><a href="#"><span>About us</span></a></li>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar
