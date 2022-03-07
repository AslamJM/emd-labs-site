import React from "react"
import * as styles from "../styles/about/main.module.scss"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  const { html } = data.markdownRemark
  const image = data.file.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.header}>
          <h2>who are we?</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <GatsbyImage image={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    markdownRemark(frontmatter: { name: { eq: "about" } }) {
      html
    }
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 500)
      }
    }
  }
`
