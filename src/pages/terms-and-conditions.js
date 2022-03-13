import React from "react"
import * as styles from "../styles/terms.module.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Terms = ({ data }) => {
  return (
    <Layout>
      <div className={styles.terms}>
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Terms

export const query = graphql`
  {
    markdownRemark(frontmatter: { name: { eq: "terms" } }) {
      html
    }
  }
`
