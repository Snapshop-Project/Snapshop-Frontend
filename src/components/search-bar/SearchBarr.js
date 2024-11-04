// src/components/SearchBar.js
import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; // Import the search icon
import './SearchBarr.css';

const SearchBarr = () => {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <FaSearch className="search-icon" />
            </div>
            <button className="filter-button">
                <FaFilter className="filter-icon" />
            </button>
        </div>
    );
};

export default SearchBarr;