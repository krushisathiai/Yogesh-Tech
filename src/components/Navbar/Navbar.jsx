import React from 'react';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logoImg} alt="YogeshTech Market" className="brand-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
