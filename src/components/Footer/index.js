import React from "react";
import './index.css';

const Footer=()=>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    {/* {column1} */}
                    <div className="col">
                        <h2>WALLET SAVER</h2>
                        <ul className="list-unstyled">
                            <li>Our Priorities</li>
                            <p>aaaaaaaaaabbbbbbbbbbbbccccccccccccccddddddddd</p>
                        </ul>
                    </div>
                    {/* {column2} */}
                    <div className="col">
                        <h2>CONTACT US</h2>
                        <ul className="list-unstyled">
                            <li>Edx Bootcamp</li>
                            <li>United Kingdom</li>
                            <li>123-456-789</li>
                        </ul>
                    </div>
                    {/* {column3} */}
                    <div className="col">
                        <h2>FOLLOW US</h2>
                        <ul className="list-unstyled">
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="container-fluid footer-area">
                <div className="footer-text">
                    <p className="copy-right">©2023 Edx Bootcamp Group-07 </p>
                    {/* <p className="copy-right">Save More & Shop More with Wallet Saver</p> */}
                </div>                
            </div>
        </div>
        
    )
}

export default Footer;