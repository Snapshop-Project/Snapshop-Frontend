// src/components/Header.js
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../store/Authentication';
import './Header.css'; // Optional: For styling
import { FaUser, FaShoppingCart, FaHome} from 'react-icons/fa'; // Importing icons
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const dropdownRef = useRef(null);
  const {logout} = useContext(AuthContext);
  const {isAuthenticated } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    logout();
    navigate('/Snapshop-Frontend/login');
  };
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest('.header-icon')
    ) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <header className="header">
      <div className="header-content" >
        <div className="icon-container">
          <div className="header-icon" onClick={() => navigate('/Snapshop-Frontend')} style={{ color: location.pathname === '/Snapshop-Frontend' ? '#854219' : 'white' }}> 
            <FaHome size={54}/>
          </div>
        </div>
        {/* Centered logo as home button */}
        {/*<Link to="/" className="logo-link"> */}
        <img src="/Snapshop-Frontend/Logo2.jpeg" alt="Logo" className="logo" onClick={() => navigate('/Snapshop-Frontend')}/>
        {/*</Link> */}
        <div className="icon-container">
          {/* Cart Icon */}
          <div className="header-icon" onClick={() => navigate('/Snapshop-Frontend/cart')} style={{ color: location.pathname === '/Snapshop-Frontend/cart' ? '#854219' : 'white'}}>
            <FaShoppingCart size={42} />
          </div>
          {/* Profile Icon */}
          {isAuthenticated ? (
          <div className="header-dropdown-container">
            <div
              className="header-icon"
              onClick={toggleDropdown}
              style={{ color: 'white' }}
            >
              <div className="header-profile-picture2">
                <img src="/Snapshop-Frontend/ExampleImages/Portrait.jpg" alt="Profile Picture"/>
              </div>
              {/* <FaUser size={42} /> */}
            </div>
            {isDropdownOpen && (
              <div className="header-dropdown-menu" ref={dropdownRef}>
                <div
                  className="header-dropdown-item"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    navigate('/Snapshop-Frontend/editProfile');
                  }}
                >
                  Profile
                </div>
                <div
                  className="header-dropdown-item"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    navigate('/Snapshop-Frontend/sales');
                  }}
                >
                  Track Sales
                </div>
                <div className="header-dropdown-item" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
            </div>
            // <div className="header-icon" onClick={() => navigate('/profile')} style={{ color: location.pathname === '/profile' ? '#854219' : 'white' }}>
            //   <FaUser size={42} />
            // </div>
          ) : (
            <button className="login-button-header" onClick={() => navigate('/Snapshop-Frontend/login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
