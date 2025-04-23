import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sumu Ventures</h3>
          <p>India's first startup focused on the design and manufacturing of caps and cases for lithium-ion cells, bridging a crucial supply gap in the rapidly growing battery manufacturing ecosystem.</p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">What We Do</a></li>
            <li><a href="#products">Technology & Innovation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <address>
            <p>Deccan, Pune</p>
            <p>Maharashtra, India</p>
            <p>Email: sumuventures@gmail.com</p>
            <p>Phone: 8766954098</p>
          </address>
        </div>
        
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates on battery technology and company news.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} LithiumTech. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;