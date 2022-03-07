import React from 'react'
import * as classes from '../../styles/contact/form.module.scss'


const Form = () => {
  return (
    <form>
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
            <textarea rows="5"/>
        </div>
        <button type='submit'>Message Us</button>
    </form>
  )
}

export default Form