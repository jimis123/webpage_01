import React from 'react';
import './header.css';
import poeple from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>  
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
          Indulgence way everything joy alteration boisterous the attachment. 
          Party we years to order allow asked of.
        </p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email Address"/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={poeple} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
      
    </div>
  )
}

export default Header