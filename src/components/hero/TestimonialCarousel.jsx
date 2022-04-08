import React from 'react'
import Testimonials from './Testimonials'
import {useStaticQuery,graphql} from 'gatsby'
import * as styles from '../../styles/landing/testimonials.module.scss'
import { Carousel } from 'react-responsive-carousel'    
const TestimonialCarousel = () => {

  const data = useStaticQuery(graphql`query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "testimonials"}}}) {
    nodes {
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
        name
        position
      }
      html
    }
  }
}`)

const nodes=data.allMarkdownRemark.nodes
  return (
    <div className={styles.carousel}>
        <h3 className={styles.header}>testimonials</h3>
        <div className={styles.container}>
          <Carousel>
            {
              nodes.map((node)=>{
                const {name,position,featuredImage}=node.frontmatter
                return<Testimonials name={name} position={position} image={featuredImage} html={node.html} key={name}/>
              })
            }
            </Carousel>
        </div>
    </div>
  )
}

export default TestimonialCarousel
