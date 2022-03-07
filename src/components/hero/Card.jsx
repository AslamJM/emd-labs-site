import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/landing/card.module.scss'
import { motion } from 'framer-motion'

const linkVar={
  anim:{
    scale:1.1,
    originX:0,
    transition:{
      type:"spring",
      duration:1,
      stiffness:300
    }
  }
}

const Card = ({icon,title,desc,slug}) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardText}>
            <h5>{title}</h5>
            <div>{desc}</div>
            <motion.div variants={linkVar} whileHover="anim" className={styles.link}><Link to={`/services/${slug}`}>Learn More</Link></motion.div>
        </div>
    </div>
  )
}

export default Card