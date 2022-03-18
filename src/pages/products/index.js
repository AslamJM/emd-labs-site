import React from "react"
import * as styles from "../../styles/products/main.module.scss"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Head from "../../components/Head"
import Single from "../../components/products/Single"

const Products = ({ data }) => {
  const products = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Head title="Products" />
      <div className={styles.products}>
        <div className={styles.header}>
          <h2>our products</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.content}>
            {products.map((prod, index) => (
              <Single prod={prod} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query Product {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "product" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
  }
`
