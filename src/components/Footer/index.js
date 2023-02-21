import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'

import iconImage from './icon1.png'

const Footer=() =>{
  return (
<div className="container-fluid">
  <div className="footer">
    <div className="row">
        <div className="col-md-3">
            {/* <h4>Wallet Saver</h4> */}
            <img src={iconImage} className="iconImage" alt='logo'/>
            <p className='logo-text'>Save More .. Shop More</p>
        </div>

        <div className="col-md-3">
            <h4>About Us</h4>
            <p>aaaaaaaaaaaaaaaaaaaaaaaa
               bbbbbbbbbbbbbbbbbbbbbbbb
               cccccccccccccccccccccccc            </p>
        </div>

        <div className="col-md-3">
            <h4>Contact Us</h4>
            <p>Edx Bootcamp, United Kingdom 123-456-789</p>
        </div>

        <div className="col-md-3 social-media-icons ">
            <h4>Follow Us</h4>
            <div>
            <a href='https://facebook.com'>
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href='https://instagram.com'>
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href='https://twitter.com'>
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href='https://github.com'>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            </div>
        </div>

    </div>
    <div className="footer-area">
        <div className="footer-text">
            <p className="copy-right">©2023 Edx Bootcamp Group-07 | All Rights Reserved</p>
                    {/* <p className="copy-right">Save More & Shop More with Wallet Saver</p> */}
        </div>                
    </div>

  </div>

</div>

  );
}

export default Footer;
