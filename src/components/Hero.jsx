import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>Powering India's Lithium-ion cell Revolution</p>
        <p className="hero-description">India's first startup focused on the design and manufacturing of caps and cases for lithium-ion cells, bridging a crucial supply gap in the rapidly growing battery manufacturing ecosystem.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Learn More</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/lithium.jpg" alt="Battery manufacturing" />
      </div>
    </section>
  );
};

export default Hero;