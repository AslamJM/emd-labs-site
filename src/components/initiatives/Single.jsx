import React from 'react'
import * as styles from '../../styles/initiatives/single.module.scss'
import { GatsbyImage } from "gatsby-plugin-image"

const Single = ({prod}) => {
  return (
    <div className={styles.single}> 
        <div className={styles.header}>
            <h3>{prod.frontmatter.title}</h3>
        </div>
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <GatsbyImage image={prod.frontmatter.featuredImage.childImageSharp.gatsbyImageData}/>
                </div>
                <div className={styles.right}>
                    <div dangerouslySetInnerHTML={{__html:prod.html}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Single