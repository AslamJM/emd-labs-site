import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../../styles/landing/testimonials.module.scss'

const Testimonials = ({name,position,image,html}) => {
  return (
    <div className={styles.testimonial}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
          <GatsbyImage image={image.childImageSharp.gatsbyImageData}/>
        </div>
        <div className={styles.right}>
            <h3>{name}</h3>
            <h5>{position}</h5>
            <div dangerouslySetInnerHTML={{__html:html}}/>
        </div>
        </div>
    </div>
  )
}

export default Testimonials