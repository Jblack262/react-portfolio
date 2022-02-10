import React from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import {AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

const contact = () => {
  const emailFormSubmit = (e) => {
    e.preventDefault();
    console.log('eww')
  }
  return <div className='contact' id='contact'>
      <div className="title">
          <h1>Contact</h1>
      </div>

      <div className="call-to-action">Have a question or want to work together?</div>

      <form action="#home" className="contact-form">
        <input type="text" name="name" id="name" placeholder='Name'/>
        <input type="email" name="email" id="email" placeholder='Enter Email'/>
        <textarea name="message" id="message" rows="8" placeholder='Your Message...'></textarea>
        <button type="submit" onClick={(e) => {emailFormSubmit(e)}}>Submit</button>
      </form>

      <footer>
        <a href="#home" className="top-button"><FaAngleDoubleUp /></a>
        <div className="socials-container">
          <a href="#home" className='icon'><AiFillGithub /></a>
          <a href="#home" className='icon'><AiFillLinkedin /></a>
          <a href="#home" className='icon'><AiFillFacebook /></a>
          <a href="#home" className='icon'><AiFillInstagram /></a>
        </div>
        <p className="copyright"><span className='name'>JD Blackman</span> © 2022</p>
      </footer>
  </div>;
};

export default contact;
