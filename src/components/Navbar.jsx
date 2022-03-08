import React from 'react'
import * as styles from '../styles/navbar.module.scss'
import { Link } from 'gatsby'
import DropDownMenu from '../components/DropDownMenu'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import {BiMenu} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'

const services=[{name:"software services",slug:"software"},{name:"mechanical services",slug:"mechanical"},{name:"electronics services",slug:"electronics"},{name:"business services",slug:"business"}]

const liVar = {
    hover:{
        scale:1.1,
        transition:{
        type:"spring",
        stiffness:300,
        duration:0.5
    }
    },
    
}

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            <h3>EMD Labs</h3>
        </div>
        <div className={styles.navMenu}>
            <ul className={styles.navLinks}>
                <GrClose className={styles.close}/>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/'>home</Link></motion.p>
                </li>
                <li variants={liVar} ><Link to='/services'>services <BsFillCaretDownFill/></Link>
                <div className={styles.dropdown}>
                    <DropDownMenu items={services}/>
                </div>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/about'>about</Link></motion.p>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/products'>products</Link></motion.p>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/initiatives'>initiatives</Link></motion.p>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/contact'>contact</Link></motion.p>
                </li>
            </ul>
        </div>
        <div className={styles.btn}>
            <button>get a quote</button>
        </div>
        <BiMenu className={styles.ham}/>
    </div>
  )
}

export default Navbar