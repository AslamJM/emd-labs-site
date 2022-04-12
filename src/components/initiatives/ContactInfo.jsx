import React from 'react'
import * as styles from '../../styles/initiatives/contactInfo.module.scss'
import {BsGlobe,BsFacebook,BsInstagram,BsWhatsapp,BsFillEnvelopeFill} from 'react-icons/bs'

const ContactInfo = ({details}) => {
  const {website,facebook,instagram,phone,email}=details
  return (
    <div className={styles.info}>
        <ul className={styles.list}>
            <li><BsGlobe/><a href={website} target="_blank" rel="noopener norefferer">{website}</a></li>
            <li><BsFacebook/><a href={facebook} target="_blank" rel="noopener norefferer">Facebook</a></li>
            <li><BsInstagram/><a href={instagram} target="_blank" rel="noopener norefferer">Instagram</a></li>
            <li><BsWhatsapp/>{phone}</li>
            <li><BsFillEnvelopeFill/>{email}</li>
        </ul>
    </div>
  )
}

export default ContactInfo