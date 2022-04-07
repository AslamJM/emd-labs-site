import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/notfound.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <h2>Sorry the page you are looking for doesn't exist </h2>
        <Link to="/">go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default NotFound
