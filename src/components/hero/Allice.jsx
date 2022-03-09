import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { GatsbyImage } from "gatsby-plugin-image"
import 'react-alice-carousel/lib/alice-carousel.css';

const Allice = ({images}) => {
    const items = [<Paragen text="We process automation and data exchange using advanced manufacturing technologies in industries" title="Industrial revolution 4.0" image={images[0]}/>,<Paragen text="We process automation and data exchange using advanced manufacturing technologies in industries" title="DevOps & Agile" image={images[1]}/>,<Paragen text="We understand customers’ needs, rapid prototyping, and generating creative ideas which will transform the way of developing products, services, and processes." title="Design thinking" image={images[2]}/>,<Paragen text="We provide solutions that meet the needs of present problems with the future forecast of socio, economic and environmental benefits" title="Sustainable Solutions" image={images[3]}/>]
  return (
    <AliceCarousel autoPlay disableButtonsControls autoPlayDirection="rtl" autoPlayInterval={3000} infinite animationType='slide' disableDotsControls={true} animationDuration={1000} items={items}/>
    
  )
}

export default Allice

export  const Paragen = ({text,title,image})=>{
    return<div>
        <h3>{title}</h3>
        <div>
          <GatsbyImage image={image.childrenImageSharp[0].gatsbyImageData}/>
        </div>
        <p>{text}</p>
    </div>
}