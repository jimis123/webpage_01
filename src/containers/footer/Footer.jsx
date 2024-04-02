import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
          <h1 className='gradient-text'>Do you want to step in to the future before others.</h1>
      </div>
      <div className='gpt3__footer-button'>
          <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Terms & Conditions</h4>
            <p>Private Policy</p>
            <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>Thessaloniki</p>
            <p>69--1434--</p>
            <p>info@gmail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
          <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
