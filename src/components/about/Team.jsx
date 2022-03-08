import React from 'react'
import * as styles from '../../styles/about/team.module.scss'

const Team = ({name,title}) => {
  return (
    <div className={styles.team}>
      <div className={styles.avatar}></div>
      <div className={styles.details}>
        <h5>{name}</h5>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Team