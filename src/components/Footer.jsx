import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          Yogesh Tech Copyrights Recived © {new Date().getFullYear()} Powered by Vaibhav Sonawane
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
