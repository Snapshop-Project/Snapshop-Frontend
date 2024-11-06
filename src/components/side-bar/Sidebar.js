// src/components/Sidebar.js
import React from 'react';
import { FaUser, FaDollarSign, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import './Sidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="sidebar">
      <div className="sidebar-icon" onClick={() => navigate('/profile')}>
        <FaUser size={42} />
      </div>
      <div className="divider"></div>
      <div className="sidebar-icon">
        <FaDollarSign size={42} />
      </div>
      <div className="divider"></div>
      <div className="sidebar-icon" onClick={() => navigate('/cart')} style={{ color: location.pathname === '/cart' ? 'rgb(242, 141, 77)' : 'inherit' }}>
        <FaShoppingCart size={42} />
      </div>
      <div className="divider"></div>
    </nav>
  );
};

export default Sidebar;



