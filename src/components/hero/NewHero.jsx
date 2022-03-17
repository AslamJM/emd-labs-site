import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import * as styles from '../../styles/landing/newHero.module.scss'
import { Carousel } from 'react-responsive-carousel';
import Slider from './Slider';
import { useStaticQuery,graphql } from 'gatsby';


const NewHero = () => {

  const imgQuery = useStaticQuery(graphql`{
  allFile(
    filter: {relativeDirectory: {eq: "images/hero"}}
    sort: {fields: sourceInstanceName}
  ) {
    nodes {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}`)

const images = imgQuery.allFile.nodes
   
const items = [<Slider title="Industrial revolution 4.0" text="We process automation and data exchange using advanced manufacturing technologies in industries" img={images[0]}/>,<Slider text="We process automation and data exchange using advanced manufacturing technologies in industries" title="DevOps & Agile" img={images[1]}/>,<Slider text="We understand customers’ needs, rapid prototyping, and generating creative ideas which will transform the way of developing products, services, and processes." title="Design thinking" img={images[2]}/>,<Slider text="We provide solutions that meet the needs of present problems with the future forecast of socio, economic and environmental benefits" title="Sustainable Solutions" img={images[3]}/>]



  return (
    <div className={styles.newhero}>
        <div className={styles.container} >
            <div>
              <Carousel autoPlay={true} showArrows={false} showStatus={false} infiniteLoop  >
                {
                  items.map(item=>item)
                }
              </Carousel>
            </div>
        </div>
    </div>
  )
}

export default NewHero

