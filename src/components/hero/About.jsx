import React from 'react'
import * as styles from '../../styles/landing/about.module.scss'
import { graphql,useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const About = () => {

    const imgquery = useStaticQuery(graphql`{
  markdownRemark(frontmatter: {name: {eq: "about"}}) {
    frontmatter {
      landing
    }
  }
  file(relativePath: {eq: "images/about.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}

`)


  return (
    <div className={styles.about}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                {
                  imgquery.markdownRemark.frontmatter.landing
                }
            </div>
            <div className={styles.right}>
                <div className={styles.imgContainer}>
                    <GatsbyImage image={imgquery.file.childImageSharp.gatsbyImageData} objectFit="cover"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About