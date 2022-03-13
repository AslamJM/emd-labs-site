import React from 'react'
import ContactList from './footer/ContactList'
import * as styles from '../styles/footer/footer.module.scss'
import Social from './footer/Social'
import Quicklinks from './footer/Quicklinks'
import TextBox from '../components/footer/TextBox'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.wrapper}>
            <div><ContactList/></div>
            <div><Social/></div>
            <div><TextBox/></div>
            <div><Quicklinks/></div>
        </div>
        <div className={styles.bottomText}>
          <p>created by EMD-Labs | &copy; {new Date().getFullYear()} All rights reserved. | <Link to="/terms-and-conditions">Terms and Conditions</Link></p>
        </div>
    </div>
  )
}

export default Footer