import React from 'react';
import '../styles/About.css';
import { FaIndustry, FaTools, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Bridging a crucial supply gap in India's growing battery manufacturing ecosystem
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Sumu Ventures is on a mission to localize the core components of India's clean energy revolution. 
              We are India's first startup focused on the design and manufacturing of caps and cases for lithium-ion cells, 
              bridging a crucial supply gap in the rapidly growing battery manufacturing ecosystem.
            </p>
            <p>
              As battery gigafactories rise across the country, we are building what they need — high-quality, 
              reliable, and scalable caps and cases, proudly made in India.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature">
              <img src="/lithium2.jpg" alt="Design & Manufacturing" className="feature-image" />
              <FaIndustry className="feature-icon" />
              <h3>Design & Manufacturing</h3>
              <p>High-quality caps and cases for lithium-ion cells, proudly made in India</p>
            </div>
            
            <div className="feature">
              <img src="/lithium3.jpg" alt="Custom Prototyping" className="feature-image" />
              <FaTools className="feature-icon" />
              <h3>Custom Prototyping</h3>
              <p>Tailored solutions to meet diverse cell requirements for various applications</p>
            </div>
            
            <div className="feature">
              <img src="/lithium4.jpg" alt="Collaborative Integration" className="feature-image" />
              <FaHandshake className="feature-icon" />
              <h3>Collaborative Integration</h3>
              <p>Partnership models with cell producers for co-manufacturing and resale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;