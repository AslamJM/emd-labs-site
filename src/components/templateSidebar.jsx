import React from 'react'
import * as styles from '../styles/templates/sidebar.module.scss'

const Sidebar = ({menu}) => {
  return (
    <div className={styles.sidebar}>
      <div dangerouslySetInnerHTML={{__html:menu}}/>
    </div>
  )
}

export default Sidebar