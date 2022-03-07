import React from 'react'
import * as styles from '../../styles/landing/services.module.scss'
import {Software,Mechanical,Electron,Business} from './svg'
import {graphql,useStaticQuery} from 'gatsby'
import Card from './Card'


const Services = () => {

const icons = [<Software/>,<Mechanical/>,<Electron/>,<Business/>]

  const data = useStaticQuery(graphql`{
  allMarkdownRemark(
    filter: {frontmatter: {name: {eq: "services"}}}
    sort: {fields: frontmatter___title, order: DESC}
  ) {
    nodes {
      frontmatter {
        description
        slug
        title
      }
    }
  }
}

`)


  return (
    <div className={styles.services}>
        <div className={styles.title}>
            <h3>our services</h3>
        </div>
        <div className={styles.gridwrapper}>
        <div className={styles.grid}>
            {
              data.allMarkdownRemark.nodes.map((n,i)=><Card key={i} title={n.frontmatter.title} desc={n.frontmatter.description} icon={icons[i]} slug={n.frontmatter.slug}/>)
            }
        </div>
        </div>
    </div>
  )
}

export default Services

