import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../../styles/landing/slider.module.scss'


 const Slider = ({title,text,img})=>{
    return <div className={styles.slider}>
        <div className={styles.left}>
        <h2>{title}</h2>
        <p>{text}</p>
        </div>
        <div className={styles.right}>
            <GatsbyImage image={img.childImageSharp.gatsbyImageData}/>
        </div>
    </div>
}

export default Slider