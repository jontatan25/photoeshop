import React from 'react';

import './navBar.css'
import { useState } from 'react';
import MobileNavBar from './MobileNavBar';
import NavDesktop from './NavDesktop';



const NavBar = () => {
    
    const [open, setOpen] = useState(false)

    return (
        <header className='primary-header flex'>
            <NavDesktop open={open} setOpen= {setOpen}/>
            <MobileNavBar open={open} setOpen= {setOpen} />
        </header>
    )
}

export default NavBar
