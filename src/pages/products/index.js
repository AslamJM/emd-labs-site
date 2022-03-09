import React from "react"
import * as styles from "../../styles/products/main.module.scss"
import Layout from "../../components/Layout"
import Sidebar from "../../components/templateSidebar"
import { graphql } from "gatsby"
import Head from "../../components/Head"

const Products = ({ data }) => {
  const { html, tableOfContents } = data.markdownRemark
  return (
    <Layout>
      <Head title="Products" />
      <div className={styles.products}>
        <div className={styles.header}>
          <h2>our products</h2>
        </div>
        <div className={styles.main}>
          <Sidebar menu={tableOfContents} />
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { name: { eq: "product" } }) {
      html
      tableOfContents
    }
  }
`
