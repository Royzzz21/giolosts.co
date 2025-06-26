import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">
            Empowering businesses through innovative technology solutions
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <div className="story-text">
              <h3>Our Story</h3>
              <p>
                Founded with a vision to bridge the gap between technology and business success, 
                Giolosts Technologies has been at the forefront of digital transformation since our inception. 
                We believe that every business, regardless of size, deserves access to cutting-edge 
                technology solutions that drive growth and efficiency.
              </p>
              <p>
                Our journey began with a simple mission: to make technology work for businesses, 
                not against them. Today, we're proud to serve clients across various industries, 
                helping them navigate the digital landscape with confidence and expertise.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="about-mission">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              <h4>Our Mission</h4>
              <p>
                To deliver innovative, scalable, and cost-effective technology solutions that 
                empower businesses to achieve their goals and stay ahead in the digital age.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                </svg>
              </div>
              <h4>Our Vision</h4>
              <p>
                To be the trusted technology partner for businesses worldwide, known for 
                excellence, innovation, and unwavering commitment to client success.
              </p>
            </div>
          </div>

          <div className="about-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V13L16,10L11,7Z"/>
                  </svg>
                </div>
                <h4>Innovation</h4>
                <p>Constantly exploring new technologies and approaches to solve complex challenges.</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2zm-2,15l-5-5 1.41-1.41L10,14.17l7.59-7.59L19,8l-9,9z"/>
                  </svg>
                </div>
                <h4>Excellence</h4>
                <p>Delivering the highest quality solutions with attention to every detail.</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                  </svg>
                </div>
                <h4>Collaboration</h4>
                <p>Working closely with clients to understand their needs and deliver tailored solutions.</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,14.1 12,16.5 12,16.5C12,16.5 9.2,14.1 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.9V11.5C10.5,13.1 12,14.5 12,14.5C12,14.5 13.5,13.1 13.5,11.5V9.9C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <h4>Trust</h4>
                <p>Building long-term relationships based on transparency, reliability, and mutual respect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 