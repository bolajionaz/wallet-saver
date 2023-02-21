import React from 'react';
import './index.css';
import iconImage from './icon1.png'

const Footer=() =>{
  return (
<div>
    <div className="footer-container">
        {/* Column 1 */}
      <div className="footer-column">
      <img src={iconImage} className="iconImage" />
        <h3>Wallet saver</h3>
        <p>Save More & Shop More with Wallet Saver</p>
        
        {/* <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul> */}
      </div>
         {/* Column 2 */}
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li>Edx Bootcamp</li>
          <li>United Kingdom</li>
          <li>123-456-789</li>
        </ul>
      </div>
         {/* Column 3 */}
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
    <div className="container-fluid footer-area">
        <div className="footer-text">
            <p className="copy-right">©2023 Edx Bootcamp Group-07 | All Rights Reserved</p>
                    {/* <p className="copy-right">Save More & Shop More with Wallet Saver</p> */}
        </div>                
    </div>

</div>
  );
}

export default Footer;
