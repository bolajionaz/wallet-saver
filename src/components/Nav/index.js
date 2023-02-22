import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import './nav.js';

import iconImage from './icon2.png'
const Nav=() =>{
    return (
      <div className='d-flex menu-container' id='bar'>
          <a className='me-auto p-2 navbar-brand'><img src={iconImage}/><strong>Wallet Saver</strong></a>
          <button class="menu-toggle">
    <span class="menu-toggle__icon"></span>
    <span class="menu-toggle__icon"></span>
    <span class="menu-toggle__icon"></span>
  </button>
          <ul className='d-flex'>
          <li className='p-2'><a>Ambika</a></li>
          <li className='p-2'><a>Ambika</a></li>
        </ul>
        </div>
  
    );

}

export default Nav;