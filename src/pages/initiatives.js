import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/initiative.module.scss"
import Head from "../components/Head"

const Initiatives = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <Head title="Initiatives" />
      <div className={styles.initiatives}>
        <div className={styles.header}></div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Initiatives

export const query = graphql`
  {
    markdownRemark(frontmatter: { name: { eq: "initiatives" } }) {
      html
    }
  }
`
