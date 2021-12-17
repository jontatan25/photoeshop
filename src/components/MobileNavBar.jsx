import React from 'react'
import logo from './logo.svg';
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import NavLinks from './NavLinks';

const MobileNavBar = ({open,setOpen}) => {

    const hamburguerOpen =
        <FiMenu className='mobileMenu__button' size='60px' color='white'
            onClick={() => setOpen(!open)}
        ></FiMenu>
    const hamburguerClose =
        <CgClose className='mobileMenu__button' size='60px' color='white'
            onClick={() => setOpen(!open)}
        ></CgClose>
    return (
        <>
            <div className='nav__mobile'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <nav className='nav__mobile'>
                {open ? hamburguerClose : hamburguerOpen}
                {open && <NavLinks open={open} setOpen={setOpen} />}
            </nav>
        </>
    )
}

export default MobileNavBar
