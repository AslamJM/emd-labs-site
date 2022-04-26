import React from 'react'
import * as styles from '../../styles/landing/newfront.module.scss'
import Paper from './Paper'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FaMinus} from 'react-icons/fa'
import { navigate } from 'gatsby';
const items=[
    {
        title:"Industrial revolution 4.0",
        icon:"./industry.svg",
        description:"We process automation and data exchange using advanced manufacturing technologies in industries."
    },
     {
        title:"DevOps & Agile",
        icon:"./devops.svg",
        description:"We process automation and data exchange using advanced manufacturing technologies in industries."
    },
     {
        title:"Design thinking",
        icon:"./design-thinking.svg",
        description:"We understand customers’ needs, rapid prototyping, and generating creative ideas which will transform the way of developing products, services, and processes."
    },
     {
        title:"Sustainable Solutions",
        icon:"./sustainable.svg",
        description:"We provide solutions that meet the needs of present problems with the future forecast of socio, economic and environmental benefits"
    }
]

const NewFront = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.text}>
                    <h1>intend to leverage</h1>
                <h1>innovative solutions.</h1>
                </div>
                <div className={styles.btn}>
                    <button onClick={()=>navigate('/services')}>our services</button>
                    <button onClick={()=>navigate('/contact')}>contact us</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.carousel}>
                    <Carousel showStatus={false} showThumbs={false} width="100%" height="100%" showArrows={false} renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "#e4e4e4", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "#f27521" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            <FaMinus size={25}/>
          </span>
        );
      }}
    >
                        {
                            items.map(i=><Paper title={i.title} description={i.description} icon={i.icon}  key={i.title}/>)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewFront