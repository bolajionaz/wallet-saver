import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

import iconImage from './icon2.png'
const Nav=() =>{
    return (
      <div className='d-flex menu-container' id='bar'>
          <a className='me-auto p-2 navbar-brand'><img src={iconImage}/><strong>Wallet Saver</strong></a>
        
            <ul className='d-flex'>
          <li className='right-menu p-2'><a>Compare Stores</a></li>
          <li className='right-menu p-2'><a>Individual Stores</a></li>
        </ul>
        </div>
  
    );

}

export default Nav;