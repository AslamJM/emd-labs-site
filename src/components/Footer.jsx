import React from 'react'
import ContactList from './footer/ContactList'
import * as styles from '../styles/footer/footer.module.scss'
import Social from './footer/Social'
import Quicklinks from './footer/Quicklinks'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.wrapper}>
            <div><ContactList/></div>
            <div><Social/></div>
            <div></div>
            <div><Quicklinks/></div>
        </div>
    </div>
  )
}

export default Footer