import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p className="footer-description">
          Giolosts Technologies services are designed to help you leverage technology to achieve your business goals.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
            </svg>
            <span>UB, 111 Paseo de Roxas, Legaspi Village, Makati City</span>
          </div>
          
          <div className="contact-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.11,4 20,4Z"/>
            </svg>
            <a href="mailto:info@giolotech.co">info@giolotech.co</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Giolosts Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 