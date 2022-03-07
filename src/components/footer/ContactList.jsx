import React from 'react'
import * as styles from '../../styles/footer/contactlist.module.scss'
import {FaMapMarkerAlt,FaEnvelope,FaPhoneSquareAlt} from 'react-icons/fa'

const ContactList = () => {
  return (
    <div className={styles.contactList}>
        <div className={styles.contactListItem}>
            <div className={styles.contactListIcon}><FaMapMarkerAlt/></div>
            <div className={styles.contactListText}> <p>Dream Hive,<br/>Kallady, Batticaloa,<br/>
SriLanka</p></div>
        </div>
          <div className={styles.contactListItem}>
            <div className={styles.contactListIcon}><FaEnvelope/></div>
            <div className={styles.contactListText}><p>info@emd-labs.com</p></div>
        </div>
          <div className={styles.contactListItem}>
            <div className={styles.contactListIcon}><FaPhoneSquareAlt/></div>
            <div className={styles.contactListText}><p>065-2223443 / 0740164548</p></div>
        </div>
    </div>
  )
}

export default ContactList