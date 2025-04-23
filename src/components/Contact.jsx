import React from 'react';
import '../styles/Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Reach out to learn more about our lithium-ion cell components</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Deccan, Pune<br />Maharashtra, India</p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>8766954098</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>sumuventures@gmail.com</p>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link"><FaLinkedin /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaFacebook /></a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;