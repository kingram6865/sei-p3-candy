import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div >
          <img className="footer-logo-img" src={`${process.env.PUBLIC_URL}/images/SUGAR-MAMA-LOGO-SQUARE.png`} alt="sugar-mama-logo"/>
        </div>
        <div className="company-text-container">
          <div className="company-text">Company Information</div>
          <div className="our-story">Our Story</div>
        </div>
        <div className="newsletter-container">
          <div className="newsletter-text">Sign Up for our Newsletter</div>
          <input type="text" placeholder="your email" />
          <div className="newletter-icon">insert-icon-here</div>
        </div>
        <div className="company-info-container">
          <div className="address-icon">insert-icon-here</div>
          <div className="address-container">
            <div>Address</div>
            <p>1225 Sugar Road</p>
            <p>New York, NY 39384</p>
          </div>
          <div className="phone-icon">insert-icon-here</div>
          <div className="phone-container">
            <div>Phone</div>
            <p>1.800.555.8765</p>
          </div>
          <div className="clock-icon">insert-icon-here</div>
          <div className="hours-container">
            <div>Working Hours</div>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>Saturday - Sunday: 10am - 4pm</p>
          </div>
        </div>
        <div className="break"></div>
        <div className="copyright-container">
          <p>
            © 2020 Sugar Mama's All rights reserved. Privacy Policy & Terms of
            Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
