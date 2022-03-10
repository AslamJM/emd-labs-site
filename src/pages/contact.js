import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact/main.module.scss"
import Form from "../components/contact/Form"
import Head from "../components/Head"
import { Link } from "gatsby"
import { Mail, Phone } from "../components/hero/svg"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={styles.contact}>
        <div className={styles.header}>
          <h2>get in touch with us</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles.contentleft}>
                <h3>Let's discuss what you are expecting.</h3>
                <Link to="/services" className={styles.link}>
                  check out our services
                </Link>
                <h5>get a quote from us</h5>
                <div className={styles.mail}>
                  <Mail />
                  <p>info@emd-labs.com</p>
                </div>

                <div className={styles.mail}>
                  <Phone /> <p>065-2223443 / 0740164548</p>
                </div>
              </div>
            </div>
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
