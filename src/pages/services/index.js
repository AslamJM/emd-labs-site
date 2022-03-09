import React from "react"
import Layout from "../../components/Layout"
import Card from "../../components/services/Card"
import * as styles from "../../styles/services/main.module.scss"
import { graphql } from "gatsby"
import Head from "../../components/Head"

const Services = ({ data }) => {
  const items = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Head title="Services" />
      <div className={styles.services}>
        <div className={styles.header}>
          <h2>our services</h2>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.content}>
            {items.map((node, index) => (
              <Card
                key={index}
                title={node.frontmatter.title}
                slug={node.frontmatter.slug}
                content={node.frontmatter.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { name: { eq: "services" } } }
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      nodes {
        frontmatter {
          description
          slug
          title
        }
      }
    }
  }
`
