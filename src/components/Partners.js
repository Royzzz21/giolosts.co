import React from 'react';
import './Partners.css';
import googleCloudLogo from '../assets/partner/google-cloud-logo.png';
import salesforceLogo from '../assets/partner/sales-force-logo.png';
import bwloLogo from '../assets/partner/boiling-waters.jpg';
import lighthouseLogo from '../assets/partner/light-house.jpg';

const Partners = () => {
  // Sample partner data - you can replace with actual partner logos
  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      category: 'Technology'
    },
    {
      id: 2,
      name: 'Google Cloud',
      logo: googleCloudLogo,
      category: 'Cloud Services'
    },
    {
      id: 3,
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
      category: 'Cloud Services'
    },
    {
      id: 4,
      name: 'Oracle',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
      category: 'Database'
    },
    {
      id: 5,
      name: 'Salesforce',
      logo: salesforceLogo,
      category: 'CRM'
    },
    {
      id: 6,
      name: 'Adobe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png',
      category: 'Creative Software'
    },
    {
        id: 7,
        name: 'Boiling Waters Technologies',
        logo: bwloLogo,
        category: 'Creative Software'
      },{
        id: 8,
        name: 'Lighthouse Club',
        logo: lighthouseLogo,
        category: ' Lighthouse Club International.'
      }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">Our Trusted Partners</h2>
          <p className="partners-subtitle">
            We collaborate with industry leaders to deliver exceptional solutions
          </p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo-container">
                <img 
                  style={{width: '500px', height: '100px'}}
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <span className="partner-category">{partner.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="partners-cta">
          <p>Interested in becoming a partner?</p>
          <button className="partner-cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Partners; 