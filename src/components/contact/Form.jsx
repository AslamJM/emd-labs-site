import React,{useRef} from 'react'
import * as classes from '../../styles/contact/form.module.scss'
import emailjs from '@emailjs/browser'



const Form = () => {

  const form = useRef()

const sendMail=(e)=>{
  e.preventDefault()
  emailjs.sendForm('service_v6omiko','template_qz2y4tf',form.current,'OyfE0KimcNntcOw4a').then((res)=>console.log(res.text)).catch(err=>console.log(err))
}

  return (
    <form ref={form} onSubmit={sendMail}>
        <div className={classes.formControl}>
            <label>Your Name</label>
            <input id="name" type="text" name="name"/>
        </div>
        <div className={classes.formControl}>
            <label>Your E-Mail</label>
            <input id="email" type="email" name="email"/>
        </div>
        <div className={classes.formControl}>
            <label htmlFor="message">Your Message</label>
            <textarea rows="5" name="message"/>
        </div>
        <button type="submit" value="Send">Message Us</button>
    </form>
  )
}

export default Form