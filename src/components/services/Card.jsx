import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/services/card.module.scss'
import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'

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

const Card = ({title,img,content,slug}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <GatsbyImage image={img.childImageSharp.gatsbyImageData}/>
      </div>
        <div className={styles.cardHeader}>
            <h3>{title}</h3>
        </div>
        <div className={styles.cardContent}>{content}</div>
        <motion.div className={styles.link } variants={linkVar} whileHover="anim" >
          <Link to={`/services/${slug}`}>Learn More...</Link>
        </motion.div>
    </div>
  )
}

export default Card