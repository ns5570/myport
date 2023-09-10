import React, { useState, useEffect } from 'react';
import './Header.css'; // Create a CSS file for your header styles

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add an effect to set dark mode in local storage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('dark-mode', 'disabled');
    }
  }, [isDarkMode]);

  // Load dark mode preference from local storage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('dark-mode');
    if (savedDarkMode === 'enabled') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className={`header ${isMenuOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="header-container">
        <h1 className="header-title">Nishant Singh</h1>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list-horizontal">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
