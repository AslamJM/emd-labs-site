import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import * as styles from "../styles/templates/service.module.scss"
import Head from "../components/Head"
import Block from "../components/Block"

const ServiceTemp = ({ data }) => {
  const blocks = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Head title={blocks[0].frontmatter.service + " services"} />
      <h2 className={styles.header}>
        {blocks[0].frontmatter.service + " services"}
      </h2>
      <div className={styles.main}>
        <div className={styles.content}>
          {blocks.map((item, index) => (
            <Block block={item} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ServiceTemp

export const query = graphql`
  query ServiceQ($slug: String) {
    allMarkdownRemark(filter: { frontmatter: { service: { eq: $slug } } }) {
      nodes {
        frontmatter {
          service
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
        html
      }
    }
  }
`
