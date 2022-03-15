import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HeroCarosoul = () => {

   const items = [<Textgen text="We process automation and data exchange using advanced manufacturing technologies in industries" title="Industrial revolution 4.0"/>,<Textgen text="We process automation and data exchange using advanced manufacturing technologies in industries" title="DevOps & Agile"/>,<Textgen text="We understand customers’ needs, rapid prototyping, and generating creative ideas which will transform the way of developing products, services, and processes." title="Design thinking"/>,<Textgen text="We provide solutions that meet the needs of present problems with the future forecast of socio, economic and environmental benefits" title="Sustainable Solutions"/>]

  return (
    <AliceCarousel autoPlay disableButtonsControls autoPlayDirection="rtl" autoPlayInterval={3000} infinite animationType='slide' disableDotsControls={true} animationDuration={1000} items={items}/>
  )
}

export default HeroCarosoul

export  const Textgen = ({text,title,image})=>{
    return<div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
}