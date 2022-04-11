import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact/main.module.scss"
import Form from "../components/contact/Form"
import Head from "../components/Head"
import { Link } from "gatsby"
import { FaMapMarkerAlt, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa"
import Card from "../components/contact/Card"

const contactList = [
  {
    Icon: <FaMapMarkerAlt />,
    title: "Address",
    details: "EMD Labs, Dream Hive, Kallady, Batticaloa, SriLanka",
  },
  {
    Icon: <FaPhoneSquareAlt />,
    title: "Telephone",
    details: "065-2223443 / 0740164548",
  },
  {
    Icon: <FaEnvelope />,
    title: "E-Mail",
    details: "info@emd-labs.com",
  },
]

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={styles.contact}>
        <div className={styles.header}>
          <h2>get in touch with us</h2>
          <div className={styles.contact_list}>
            <div className={styles.contact_list_wrapper}>
              {contactList.map(cl => (
                <Card
                  Icon={cl.Icon}
                  title={cl.title}
                  details={cl.details}
                  key={cl.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles.contentleft}>
                <h4>message us</h4>
                <p>contact us for quotes and services.</p>
                <div className={styles.mapcontainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6340.316758429067!2d81.7097704410659!3d7.724872636240543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afacd6d57929a19%3A0x343245a024427abc!2sDreamSpace%20Hive!5e0!3m2!1sen!2slk!4v1649664008388!5m2!1sen!2slk"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height={280}
                  ></iframe>
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
