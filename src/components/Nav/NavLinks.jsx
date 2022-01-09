import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const NavLinks = ({ open, setOpen }) => {
    const animateFrom = { opacity: 0.05, y: -0 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <motion.ul 
                id='primary-navigation' className='primary-navigation flex'
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.01}}>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                onClick={() => open && setOpen(true)
                    }>
                <Link to={'./men'}><span>Men's Clothing</span></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                onClick={() => open && setOpen(true)}>
                <Link to={'./women'}><span>Women's Clothing</span></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                onClick={() => open && setOpen(true)}>
                <Link to={'./jewelery'}><span>Jewelery</span></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                onClick={() => open && setOpen(true)}>
                <Link to={'./electronics'}><span>Electronics</span></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.40}}
                onClick={() => open && setOpen(true)}>
                <Link to={'./aboutus'}><span>About us</span></Link>
            </motion.li>
        </motion.ul>

    )
}

export default NavLinks
