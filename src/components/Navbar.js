import React, { useState } from "react"
import { FaAlignRight } from "react-icons/fa"
// import socialIcons from "../constants/social-icons"
import {Link} from "gatsby";
import config from '../../config'
import { motion } from 'framer-motion'
// import logo from '../images/logo.png'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [canNavOpen, setCanNavOpen] = useState(false)
    const toggleNav = () => {
        setCanNavOpen(canNavOpen => true)
        setIsNavOpen(isNavOpen => !isNavOpen)
    }
    const links = Object.entries(config.links)


const variants = {
  open: { x: 0 },
  closed: { 
    x: '-100%', 
    transition: {
      delay: 0.2
    } 
   }
}

const ulVariants = {
  open: { 
    scale: 1.02,
    height: 'auto',
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      staggerDirection: -1, //1 forwards, -1 backwards
      // when: "beforeChildren", //"afterChildren" and "beforeChildren"
    } 
  },
  closed: { 
    scale: 1,
    height: 0, 
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      staggerDirection: 1, //1 forwards, -1 backwards
      when: "afterChildren", //"afterChildren" and "beforeChildren"
    } 
   },
}

const liVariants = {
  open: { 
    y: 0, 
    opacity: 1
  },
  closed: { y: -20, opacity: 1 },
}

    console.log('linkszz', links)
    return (
        <nav>
            <div 
              className='nav-center'
              // variants={variants} 
              // initial="closed" 
              // animate={ isNavOpen ? 'open' : 'closed'}
              // transition={{ damping: 300 }} 
            >
                <div className='nav-header'>
                <Link fade to={config.links.home.path}>
                    
                    <h2 className='logo'>Avolve</h2>
                </Link>
                    <button 
                      type="button"
                      className='logo-btn'
                      onClick={toggleNav}
                      >
                        <FaAlignRight className='logo-icon' />
                    </button>
                </div>
                <motion.ul 
                  className={ canNavOpen ? `nav-links show-nav`: `nav-links`}
                  variants={ulVariants}
                  animate={ isNavOpen ? 'open' : 'closed'}
                >
                    {links.map((item, index) => {

                        return (
                            <motion.li 
                              key={index}
                              variants={liVariants}
                            >
                                <Link fade to={item[1].path}>{item[1].text}</Link>
                            </motion.li>
                        )
                    })}
                </motion.ul>
                <div className='nav-social-links'>
                    {/* {socialIcons.map((item, index) => {
                        return <a target="_blank" rel="noopener noreferrer" key={index} href={item.url}>
                            {item.icon}
                        </a>
                    })} */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
