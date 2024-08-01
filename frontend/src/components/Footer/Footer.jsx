import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img className='new-logo' src={assets.logo} alt="" />
            <p>Delishify is your go-to food delivery service, committed to bringing a variety of delicious meals right to your doorstep. Whether you're craving gourmet cuisine, comfort food, or healthy options, we've got you covered. Our seamless ordering process, prompt delivery, and commitment to quality ensure that every meal you receive is fresh and satisfying.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9021754879</li>
                <li>delishify@gmail.com</li>
            </ul>
        </div>
        
    </div>
    <hr />
        <p className="footer-copyright">
            Copyright 2024 © Foodie.com -All Right Reserved
        </p>
    </div>
    )
}

export default Footer
