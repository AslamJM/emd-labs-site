import React from 'react'
import * as styles from '../../styles/landing/newfront.module.scss'

const Paper = ({title,description,icon}) => {
  return (
    <div className={styles.paper}>
        <h2>{title}</h2>
        <img src={icon} alt="title" />
        <p>{description}</p>
    </div>
  )
}

export default Paper