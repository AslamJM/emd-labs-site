import React from 'react'
import {motion} from 'framer-motion'

const svgVar={
    init:{
        scale:1
    },
    anim:{
        scale:2,
        transition:{
        yoyo:Infinity,
        duration:2
    }
    },
    
}

const mechVar={
    anim:{
        rotate:60,
        
        transition:{
            yoyo:Infinity
        }
    }
}
const elecVar={
    init:{
        opacity:0.5
    },
    anim:{
       opacity:1,
        transition:{
            yoyo:Infinity,
        }
    }
}

const busVar = {
    init:{
        opacity:0,
        pathLength:0
    },
    animate:{
       opacity:1,
       pathLength:1,
       transition:{
           duration:2,
           yoyo:Infinity,
           pathLength:{
               type:"spring"
           }
       }
    },
   
}

const mailVar={
    init:{
        x:0
    },
    animate:{
        x:3,
        transition:{
            duration:0.5,
            yoyo:Infinity
        }
    }
}

const phoneVar = {
    anim:{
        rotate:15,
        transition:{
            duration:0.5,
            yoyo:Infinity
        }
    }
}

export const Software = ()=>{
    return<motion.svg variants={svgVar} initial="init" animate="anim" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">

<path  d="M20 12L20.7809 11.3753L21.2806 12L20.7809 12.6247L20 12ZM16.7809 6.3753L20.7809 11.3753L19.2191 12.6247L15.2191 7.6247L16.7809 6.3753ZM20.7809 12.6247L16.7809 17.6247L15.2191 16.3753L19.2191 11.3753L20.7809 12.6247Z" fill="#F27521"/>
<path  d="M4 12L3.21913 11.3753L2.71938 12L3.21913 12.6247L4 12ZM7.21913 6.3753L3.21913 11.3753L4.78087 12.6247L8.78087 7.6247L7.21913 6.3753ZM3.21913 12.6247L7.21913 17.6247L8.78087 16.3753L4.78087 11.3753L3.21913 12.6247Z" fill="#F27521"/>
</motion.svg>
}

export const Mechanical = ()=>{
   return <motion.svg variants={mechVar} animate="anim" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.08169 13.9445C2.55298 12.9941 2.28862 12.5188 2.28862 12C2.28862 11.4812 2.55298 11.0059 3.08169 10.0555L4.43094 7.63L5.85685 5.24876C6.4156 4.31567 6.69498 3.84912 7.14431 3.5897C7.59364 3.33028 8.13737 3.3216 9.22483 3.30426L12 3.26L14.7752 3.30426C15.8626 3.3216 16.4064 3.33028 16.8557 3.5897C17.305 3.84912 17.5844 4.31567 18.1431 5.24876L19.5691 7.63L20.9183 10.0555C21.447 11.0059 21.7114 11.4812 21.7114 12C21.7114 12.5188 21.447 12.9941 20.9183 13.9445L19.5691 16.37L18.1431 18.7512C17.5844 19.6843 17.305 20.1509 16.8557 20.4103C16.4064 20.6697 15.8626 20.6784 14.7752 20.6957L12 20.74L9.22483 20.6957C8.13737 20.6784 7.59364 20.6697 7.14431 20.4103C6.69498 20.1509 6.41561 19.6843 5.85685 18.7512L4.43094 16.37L3.08169 13.9445Z" stroke="#F27521" stroke-width="2"/>
<circle cx="12" cy="12" r="3" stroke="#F27521" stroke-width="2"/>
</motion.svg>
}

export const Electron = ()=>{
    return <motion.svg variants={elecVar} initial="init" animate="anim" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<path  d="M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z" stroke="#F27521" stroke-width="2"/>
<rect  x="10" y="10" width="4" height="4" rx="1" fill="#F27521"/>
<path d="M10 7V4" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M14 7V4" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M17 10L20 10" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M17 14L20 14" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M10 20V17" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M14 20V17" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M4 10L7 10" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
<path d="M4 14L7 14" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
</motion.svg>
}

export const Business = ()=>{
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path variants={busVar} initial="init" animate="animate"  d="M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14" stroke="#F27521" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path  d="M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21" stroke="#F27521" stroke-width="2" stroke-linecap="round"/>
</svg>

}

export const Mail = ()=>{
    return <motion.svg variants={mailVar} animate="animate" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="transparent"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.0132 9.15129C3 9.69022 3 10.3021 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 10.3021 21 9.69022 20.9868 9.15129L12.9713 13.6044C12.3672 13.9399 11.6328 13.9399 11.0287 13.6044L3.0132 9.15129ZM3.24297 7.02971C3.32584 7.05052 3.4074 7.08237 3.48564 7.12584L12 11.856L20.5144 7.12584C20.5926 7.08237 20.6742 7.05052 20.757 7.02971C20.6271 6.55619 20.4276 6.18491 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868C3.57245 6.18491 3.37294 6.55619 3.24297 7.02971Z" fill="#F27521"/>
</motion.svg>
}

export const Phone = ()=>{
    return <motion.svg variants={phoneVar} animate="anim" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="#F27521"/>
</motion.svg>
}