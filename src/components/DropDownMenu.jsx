import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/dropdown.module.scss'
const DropDownMenu = ({items}) => {
  return (
    <ul className={styles.dropdownlist}>{
        items.map(item=><li key={item.name} className={styles.dropdownItem}><Link to={`/services/${item.slug}`}>{item.name}</Link></li>)
        }</ul>
  )
}

export default DropDownMenu