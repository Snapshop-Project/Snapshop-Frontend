// src/components/Header.js
import React from 'react';
// import { Link } from 'react-router-dom';
// import logoPic from '/Logo.jpg'
import './Header.css'; // Optional: For styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Centered logo as home button */}
        {/*<Link to="/" className="logo-link"> */}
          <img src="/Logo2.jpeg" alt="Logo" className="logo" />
        {/*</Link> */}
      </div>
    </header>
  );
};

export default Header;
