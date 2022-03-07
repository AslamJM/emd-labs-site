import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Sidebar from "../components/templateSidebar"
import * as styles from "../styles/templates/service.module.scss"

const ServiceTemp = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <h3 className={styles.header}>{title}</h3>
      <div className={styles.main}>
        <Sidebar menu={data.markdownRemark.tableOfContents} />
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default ServiceTemp

export const query = graphql`
  query Service($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`
