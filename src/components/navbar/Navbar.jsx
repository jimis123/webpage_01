import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

//BEM --> Block Element Modifier

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wthgpt3'>What is GPT3?</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar_links'>
        <div className='gpt3__navbar_links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar_links_container'>
         <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar_sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar_menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='gpt3__navbar_menu_container scale-up-center'>
                <div className='gpt3__navbar_menu_container_links'>
                 <Menu/>
                   <div className='gpt3__navbar_menu_container_links_sign'>
                     <p>Sign In</p>
                     <button type='button'>Sign Up</button>
                   </div>
                </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar


/*

*/