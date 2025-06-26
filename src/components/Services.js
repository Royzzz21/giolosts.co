import React from 'react';
import wrenchIcon from '../assets/img/services/wrench.png';
import internetIcon from '../assets/img/services/internet.png';
import mobileIcon from '../assets/img/services/cell-phone.png';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src={wrenchIcon} alt="Wrench icon" className="service-icon-img" />
            </div>
            <h3>Website Updates & Maintenance</h3>
            <p>Keep your website secure, responsive, and reflects your current brand.</p>
            <ul className="service-features">
              <li>Content updates</li>
              <li>Design refreshes</li>
              <li>Performance optimizations</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
            <img src={internetIcon} alt="Wrench icon" className="service-icon-img" />
            </div>
            <h3>Website Development</h3>
            <p>Create custom websites tailored to your specific needs and target audience.</p>
            <ul className="service-features">
              <li>E-commerce platforms</li>
              <li>Portfolio sites</li>
              <li>Business websites</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
            <img src={mobileIcon} alt="Wrench icon" className="service-icon-img" />
            </div>
            <h3>Application Development</h3>
            <p>Build custom web and mobile applications to streamline your business processes.</p>
            <ul className="service-features">
              <li>Data management</li>
              <li>Efficient solutions</li>
              <li>Modern technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 