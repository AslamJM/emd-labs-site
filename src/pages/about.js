import React from "react"
import * as styles from "../styles/about/main.module.scss"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiEmpathizeLine } from "react-icons/ri"
import { GiBrainDump, GiImpactPoint } from "react-icons/gi"
import { MdHighQuality } from "react-icons/md"
import { SiHandshake } from "react-icons/si"
import Team from "../components/about/Team"
import Head from "../components/Head"

const About = ({ data }) => {
  const team = [
    { name: "Thushanthan Amalanathan", title: " Co-founder & CEO" },
    { name: "Jayanthan Amalanathan", title: "Co-founder & COO" },
    { name: "Winston Jude David", title: "CTO" },
    { name: "Nithushan", title: "Admin Team" },
    { name: "Bavanishna", title: "Admin Team" },
    { name: "Anushanth", title: "Admin Team" },
    { name: "Kabithanjan", title: "Developer Team" },
    { name: "Aslam", title: "Developer Team" },
    { name: "Janushan", title: "Developer Team" },
    { name: "Primitha", title: "Developer Team" },
    { name: "Amrutha", title: "Developer Team" },
  ]

  const { html } = data.markdownRemark
  const image = data.file.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <Head
        title="About"
        description={data.markdownRemark.frontmatter.landing}
      />
      <div className={styles.about}>
        <div className={styles.header}>
          <h2>who are we?</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <GatsbyImage image={image} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.values}>
          <h4>our values</h4>
          <div className={styles.valuelist}>
            <ul>
              <li>
                <RiEmpathizeLine className={styles.icon} />
                Empathy
              </li>
              <li>
                <GiBrainDump className={styles.icon} />
                Reflect
              </li>
              <li>
                <MdHighQuality className={styles.icon} />
                Quality
              </li>
              <li>
                <GiImpactPoint className={styles.icon} />
                Impact
              </li>
              <li>
                <SiHandshake className={styles.icon} />
                Adaptive
              </li>
            </ul>
          </div>
        </div>
        <h4 className={styles.teamheader}>Our Team</h4>
        <div className={styles.teams}>
          <div className={styles.wrapper}>
            {team.map((person, index) => (
              <Team key={index} name={person.name} title={person.title} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    markdownRemark(frontmatter: { name: { eq: "about" } }) {
      frontmatter {
        landing
      }
      html
    }
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
