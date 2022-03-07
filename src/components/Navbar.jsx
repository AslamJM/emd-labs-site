import React from 'react'
import * as styles from '../styles/navbar.module.scss'
import { Link } from 'gatsby'
import DropDownMenu from '../components/DropDownMenu'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { motion } from 'framer-motion'

const services=[{name:"software services",slug:"software"},{name:"mechanical services",slug:"mechanical"},{name:"electronics services",slug:"electronics"},{name:"business services",slug:"business"}]

const liVar = {
    hover:{
        color:"#f27521",
        scale:1.2
    },
    trans:{
        type:"spring",
        stiffness:200
    }
}

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            <h3>EMD Labs</h3>
        </div>
        <div className={styles.navMenu}>
            <ul className={styles.navLinks}>
                <motion.li variants={liVar} whileHover="hover" transition="trans" ><Link to='/'>home</Link></motion.li>
                <li variants={liVar} whileHover="hover" transition="trans"><Link to='/services'>services <BsFillCaretDownFill/></Link>
                <div className={styles.dropdown}>
                    <DropDownMenu items={services}/>
                </div>
                </li>
                <motion.li variants={liVar} whileHover="hover" transition="trans"><Link to='/about'>about</Link></motion.li>
                <motion.li variants={liVar} whileHover="hover" transition="trans"><Link to='/products'>products</Link></motion.li>
                <motion.li variants={liVar} whileHover="hover" transition="trans"><Link to='/initiatives'>initiatives</Link></motion.li>
                <motion.li variants={liVar} whileHover="hover" transition="trans"><Link to='/contact'>contact</Link></motion.li>
            </ul>
        </div>
        <div className={styles.btn}>
            <button>get a quote</button>
        </div>
        
    </div>
  )
}

export default Navbar