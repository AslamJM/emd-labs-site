import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/initiative.module.scss"
import Head from "../components/Head"
import Single from "../components/initiatives/single"

const Initiatives = ({ data }) => {
  const inits = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Head title="Initiatives" />
      <div className={styles.initiatives}>
        <div className={styles.header}>
          <h2>our initatives</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            {inits.map((prod, index) => (
              <Single prod={prod} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Initiatives

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "initiative" } } }
    ) {
      nodes {
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
      }
    }
  }
`
