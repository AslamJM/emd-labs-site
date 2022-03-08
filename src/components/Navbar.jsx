import React from 'react'
import * as styles from '../styles/navbar.module.scss'
import { Link } from 'gatsby'
import DropDownMenu from '../components/DropDownMenu'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import {BiMenu} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'
import { navigate } from 'gatsby'

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
const buttonVar = {
    hover:{
        scale:1.1,
        transition:{
            type:"string",
            stiffness:300,
            yoyo:Infinity
        }
    }
}

const activeStyle={
    color:"#f27521",
    fontWeight:700
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
                <motion.p variants={liVar} whileHover="hover" ><Link to='/' activeStyle={activeStyle}>home</Link></motion.p>
                </li>
                <li variants={liVar} ><Link to='/services' activeStyle={activeStyle}>services <BsFillCaretDownFill/></Link>
                <div className={styles.dropdown}>
                    <DropDownMenu items={services}/>
                </div>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/about' activeStyle={activeStyle}>about</Link></motion.p>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/products' activeStyle={activeStyle}>products</Link></motion.p>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/initiatives' activeStyle={activeStyle}>initiatives</Link></motion.p>
                </li>
                <li>
                <motion.p variants={liVar} whileHover="hover" ><Link to='/contact' activeStyle={activeStyle}>contact</Link></motion.p>
                </li>
            </ul>
        </div>
        <div className={styles.btn}>
            <motion.button whileHover={buttonVar} onClick={()=>navigate('/contact')}>get a quote</motion.button>
        </div>
        <BiMenu className={styles.ham}/>
    </div>
  )
}

export default Navbar