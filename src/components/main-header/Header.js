// src/components/Header.js
import React from 'react';
import './Header.css'; // Optional: For styling
import { FaUser, FaShoppingCart, FaHome } from 'react-icons/fa'; // Importing icons
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-content" >
        <div className="icon-container">
          <div className="header-icon" onClick={() => navigate('/')} style={{ color: location.pathname === '/' ? '#b0b0b0' : 'white' }}>
              <FaHome size={52} />
            </div>
        </div>
        {/* Centered logo as home button */}
        {/*<Link to="/" className="logo-link"> */}
        <img src="/Logo2.jpeg" alt="Logo" className="logo" onClick={() => navigate('/')}/>
        {/*</Link> */}
        <div className="icon-container">
          {/* Profile Icon */}
          <div className="header-icon" onClick={() => navigate('/profile')} style={{ color: location.pathname === '/profile' ? '#b0b0b0' : 'white' }}>
            <FaUser size={42} />
          </div>
          {/* Cart Icon */}
          <div className="header-icon" onClick={() => navigate('/cart')} style={{ color: location.pathname === '/cart' ? '#b0b0b0' : 'white'}}>
            <FaShoppingCart size={42} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
