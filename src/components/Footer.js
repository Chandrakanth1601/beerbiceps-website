import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 BeerBiceps. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
