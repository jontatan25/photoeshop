import React from 'react'
import { motion } from 'framer-motion'

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
                <a href="#"><span>Photo</span></a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                onClick={() => open && setOpen(true)}>
                <a href="#"><span>Video</span></a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                onClick={() => open && setOpen(true)}>
                <a href="#"><span>Photographers</span></a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                onClick={() => open && setOpen(true)}>
                <a href="#"><span>Retouch</span></a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.40}}
                onClick={() => open && setOpen(true)}>
                <a href="#"><span>About us</span></a>
            </motion.li>
        </motion.ul>

    )
}

export default NavLinks
