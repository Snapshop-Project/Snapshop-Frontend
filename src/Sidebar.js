// src/components/Sidebar.js
import React from 'react';
import { FaUser, FaDollarSign, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-icon">
        <FaUser size={35} />
      </div>
      <div className="sidebar-icon">
        <FaDollarSign size={35} />
      </div>
      <div className="sidebar-icon">
        <FaShoppingCart size={35} />
      </div>
    </nav>
  );
};

export default Sidebar;



