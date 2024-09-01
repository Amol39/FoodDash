import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="FoodDash Logo" className="footer-logo" />
          <p>At FoodDash, we bring delicious food from your favorite restaurants straight to your door. Our mission is to make dining easy and enjoyable by offering a wide range of cuisines at your fingertips. Whether you're craving something new or indulging in your go-to dish, we've got you covered with fast, reliable service.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-911-243-0304</li>
            <li>contact@FoodDash.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FoodDash.com - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
