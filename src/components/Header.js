import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <a href="#home" className="logo">
          <img src={require('../assets/img/logo.jpg')} alt="Logo" className="logo-img" />
          <span className="logo-text">Giolosts Technologies</span>
        </a>
        <nav>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 