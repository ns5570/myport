import React from 'react';
import './Footer.css'; // Import a CSS file for your Footer component styles
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import Font Awesome icons

function Footer() {
  return (
    <footer className="footer-section">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/nishant-singh-65606b1bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          
        </a>
        <a
          href="https://www.instagram.com/_nishant_singh01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
         
        </a>
        <a
          href="https://github.com/ns5570"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          
        </a>
      </div>
      <p className="copyright">© 2023 Nishant Singh</p>
    </footer>
  );
}

export default Footer;
