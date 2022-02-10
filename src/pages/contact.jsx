import {React, useState} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

// import{ init } from '@emailjs/browser';
// init("user_6Uq2T5FnmqhSgTyWUcJQw");

const Contact = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [msgValue, setMsgValue] = useState('');

  const emailFormSubmit = (e) => {
    // e.preventDefault();
    
    const serviceId = 'service_8ngsodq';
    const templateId = 'template_knsskrs';
    sendFeedback(serviceId, templateId, {message: msgValue, from_name: nameValue, reply_to: emailValue})
  }
  const sendFeedback  = (serviceId, templateId, variables) => {
    window.emailjs.send(serviceId,templateId,variables).then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
  return <div className='contact' id='contact'>
      <div className="title">
          <h1>Contact</h1>
      </div>

      <div className="call-to-action">Have a question or want to work together?</div>

      <form onSubmit={(e) => {emailFormSubmit(e)}} className="contact-form">
        <input onChange={(e) => {setNameValue(e.target.value)}} type="text" name="name" id="name" placeholder='Name'/>
        <input onChange={(e) => {setEmailValue(e.target.value)}} type="email" name="email" id="email" placeholder='Enter Email'/>
        <textarea onChange={(e) => {setMsgValue(e.target.value)}} name="message" id="message" rows="8" placeholder='Your Message...'></textarea>
        <button type="submit">Submit</button>
      </form>

      <footer>
        <a href="#home" className="top-button"><FaAngleDoubleUp /></a>
        <div className="socials-container">
          <a href="https://github.com/Jblack262" className='icon'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/james-blackman-866839228/" className='icon'><AiFillLinkedin /></a>
        </div>
        <p className="copyright"><span className='name'>JD Blackman</span> © 2022</p>
      </footer>
  </div>;
};

export default Contact;
