// src/components/Sidebar.js
import React from 'react';
import { FaUser, FaDollarSign, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-icon">
        <FaUser size={42} />
      </div>
      <div className="divider"></div>
      <div className="sidebar-icon">
        <FaDollarSign size={42} />
      </div>
      <div className="divider"></div>
      <div className="sidebar-icon">
        <FaShoppingCart size={42} />
      </div>
      <div className="divider"></div>
    </nav>
  );
};

export default Sidebar;



