import React from 'react'
import * as styles from '../styles/templates/block.module.scss'
import { GatsbyImage } from "gatsby-plugin-image"

const Block = ({block}) => {  
  return (
    <div className={styles.block}>
        <h2>{block.frontmatter.title}</h2>
        <div className={styles.content}>
            <div className={styles.left}>
                <div dangerouslySetInnerHTML={{__html:block.html}}/>
            </div>
            <div className={styles.right}>
                <GatsbyImage image={block.frontmatter.featuredImage.childImageSharp.gatsbyImageData}/>
            </div>
        </div>
    </div>
  )
}

export default Block