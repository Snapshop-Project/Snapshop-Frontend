// src/components/Header.js
import React, { useContext } from 'react';
import { AuthContext } from '../store/Authentication';
import './Header.css'; // Optional: For styling
import { FaUser, FaShoppingCart, FaHome } from 'react-icons/fa'; // Importing icons
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-content" >
        <div className="icon-container">
            <div className="header-icon" onClick={() => navigate('/')} style={{ color: location.pathname === '/' ? '#854219' : 'white' }}>
              <FaHome size={42} />
            </div>
        </div>
        {/* Centered logo as home button */}
        {/*<Link to="/" className="logo-link"> */}
        <img src="/Logo2.jpeg" alt="Logo" className="logo" onClick={() => navigate('/')}/>
        {/*</Link> */}
        <div className="icon-container">
          {/* Cart Icon */}
          <div className="header-icon" onClick={() => navigate('/cart')} style={{ color: location.pathname === '/cart' ? '#854219' : 'white'}}>
            <FaShoppingCart size={42} />
          </div>
          {/* Profile Icon */}
          {isAuthenticated ? (
            <div className="header-icon" onClick={() => navigate('/profile')} style={{ color: location.pathname === '/profile' ? '#854219' : 'white' }}>
              <FaUser size={42} />
            </div>
          ) : (
            <button className="login-button-header" onClick={() => navigate('/login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
