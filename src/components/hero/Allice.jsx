import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { GatsbyImage } from "gatsby-plugin-image"
import 'react-alice-carousel/lib/alice-carousel.css';

const Allice = ({images}) => {
    const items = [<Paragen  title="Industrial revolution 4.0" image={images[0]}/>,<Paragen title="DevOps & Agile" image={images[1]}/>,<Paragen  title="Design thinking" image={images[2]}/>,<Paragen  title="Sustainable Solutions" image={images[3]}/>]
  return (
    <AliceCarousel autoPlay disableButtonsControls autoPlayDirection="rtl" autoPlayInterval={3000} infinite animationType='slide' disableDotsControls={true} animationDuration={1000} items={items}/>
    
  )
}

export default Allice

export  const Paragen = ({title,image})=>{
    return<div>
        <h3>{title}</h3>
        <div>
          <GatsbyImage image={image.childrenImageSharp[0].gatsbyImageData}/>
        </div>
    </div>
}