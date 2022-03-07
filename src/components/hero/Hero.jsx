import React from 'react'
import * as styles from '../../styles/hero.module.scss'
import { motion } from "framer-motion"
import {FaExternalLinkAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { navigate,useStaticQuery,graphql } from 'gatsby'
import {Software,Mechanical,Electron,Business} from './svg'
import Typewriter from 'typewriter-effect';

const btnVariant={
    trans:{
        delay:5,
        duration:1,
        yoyo:3
    },
    hover:{
        textShadow:" 0 0 8px #f27521",
        boxShadow: "0  0 8px #f27521",
        scale:1.1
    },
    init:{
        x:"-100%",
    },
    anim:{
        x:0,
        type:"spring",
        stiffness:"300"
    },
    outlineHover:{
        textShadow:" 0 0 6px #f27521",
        boxShadow: "0  0 6px #f27521",
        scale:1.1
    }
}

const Hero = () => {
    const abQuery = useStaticQuery(graphql`{
  markdownRemark(frontmatter: {name: {eq: "about"}}) {
    frontmatter {
      description
    }
  }
}


`)
  return (
    <div className={styles.Hero}>
        <div className={styles.left}>
            <div className={styles.tagline}>
                <motion.h1 initial={{y:"-200%",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2.5,ease:"easeIn",type:"spring",stiffness:100}}>Intend To Leverage</motion.h1>
                <motion.h1 initial={{x:"-200%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:3,ease:"easeIn",type:"spring",stiffness:100}}>Innovative Solutions</motion.h1>
            </div>
            <div className={styles.desc}>
                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5,ease:"easeIn",delay:2.5}}>{abQuery.markdownRemark.frontmatter.description} </motion.p>
            </div>
            <div className={styles.btnContainer}>
                <motion.button variants={btnVariant} transition="trans" whileHover="hover" initial="init" animate="anim" onClick={()=>navigate('/services')}>OUR SERVICES <FaExternalLinkAlt/></motion.button>
                <motion.button className={styles.outlined} variants={btnVariant} transition="trans" whileHover="outlineHover" initial="init" animate="anim" onClick={()=>navigate('/contact')}>CONTACT US <FiMail/></motion.button>
            </div>
            <div className={styles.iconContainer}>
                <div className={styles.icon} ><Software/>
                <div>
                         <Typewriter
            options={{
                strings: ['Software','Web Applications','UI/UX Design','Cloud Services'],
                autoStart: true,
                loop: true,
            }}
            />
                    </div></div>
                <div className={styles.icon}><Electron/>
                <div>
                    <Typewriter
             options={{
                strings: ['PCB Design','IoT Application',,'AI Integration'],
                autoStart: true,
                loop: true,
            }}
            />
                </div>
                </div>
                <div className={styles.icon}><Mechanical/>
                <div>
                          <Typewriter
             options={{
                strings: ['Prototyping','3D Modelling','Prototyping'],
                autoStart: true,
                loop: true,
            }}
            />
                </div>
                </div>
                <div className={styles.icon}><Business/>
                <div>
                          <Typewriter
             options={{
                strings: ['Incubation','Mentoring','Branding','Marketing'],
                autoStart: true,
                loop: true,
            }}
            />
                </div>
                </div>
            </div>
        </div>
        <div className={styles.right}></div>
    </div>
  )
}

export default Hero