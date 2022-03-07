import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/footer/quicklinks.module.scss'

const Quicklinks = () => {

    const links = [{name:"home",slug:"/"},{name:"services",slug:"/services"},{name:"about",slug:"/about"},{name:"products",slug:"/products"},{name:"initiatives",slug:"/initiatives"},{name:"contact us",slug:"/contact"}]

  return (
    <div className={styles.links}>
        <p>Quick Links</p>
        <ul>
            {
                links.map((item,index)=><li key={index}>
                    <Link to={item.slug}>{item.name}</Link>
                </li>)
            }
        </ul>
    </div>
  )
}

export default Quicklinks