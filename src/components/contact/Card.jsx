import React from 'react'
import * as styles from '../../styles/contact/main.module.scss'

const Card = ({Icon,title,details}) => {
  return (
    <div className={styles.contact_card}>
        <div className={styles.icon}>
            {Icon}
        </div>
        <h3>{title}</h3>
        <p>{details}</p>
    </div>
  )
}

export default Card