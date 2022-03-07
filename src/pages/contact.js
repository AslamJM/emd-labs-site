import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact/main.module.scss"
import Form from "../components/contact/Form"

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.header}>
          <h2>get in touch with us</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
