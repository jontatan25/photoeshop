import React from 'react'
import logo from './logo.svg';
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import NavLinks from './NavLinks';

const NavDesktop = ({open,setOpen}) => {

return (
    <>
        <div className='nav__desktop'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className='nav__desktop'>
            <NavLinks className="nav__desktop" open={open} setOpen={setOpen} />
        </nav>
    </>
)
}

export default NavDesktop
