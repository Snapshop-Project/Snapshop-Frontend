// src/components/SearchBar.js

import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; // Import the search icon
import './SearchBarr.css';

const SearchBarr = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState({
        people: '',
        orientation: '',
        size: '',
        color: '',
    });
    const colors = ["#FF0000", "#03c900", "#0000FF", "#fce703", "#9447ff" ,"#634325", "#ff7b00" ,"#FF00FF", "#00FFFF", "#FFFFFF", "#858585" , "#000000"];

    const toggleFilterPopup = () => {
        if (isFilterOpen) {
            // Reset filters when closing the popup
            // setActiveFilters({
            //     people: false,
            //     orientation: '',
            //     size: '',
            //     color: '',
            // });
        }
        setIsFilterOpen(!isFilterOpen);
    };

    const handleFilterChange = (category, value) => {
        setActiveFilters((prev) => ({
            ...prev,
            [category]: value,
        }));
    };

    const clearFilters = () => {
        // Reset active filters when clear filters is clicked
        setActiveFilters({
            people: '',
            orientation: '',
            size: '',
            color: '',
        });
    };

    const filterCount = (() => {
        let count = 0;
        if (activeFilters.people) count += 1;
        if (activeFilters.orientation) count += 1;
        if (activeFilters.size) count += 1;
        if (activeFilters.color) count += 1;
        return Math.min(count, 4);
    })();

    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <FaSearch className="search-icon" />
            </div>
            <div className="filter-button-wrapper">
                <button className="filter-button" onClick={toggleFilterPopup}>
                    <FaFilter className="filter-icon" />
                    {filterCount > 0 && (
                        <span className="filter-count-badge">{filterCount}</span>
                    )}
                </button>
            </div>

            {isFilterOpen && (
                <div className="filter-popup">
                    <h4>Filter Options</h4>
                    <h5>People</h5>
                    <label>
                        <input type="radio" name="people-filter" value="people" onChange={() => handleFilterChange('people', 'people')} checked={activeFilters.people === 'people'}/>
                        People
                    </label>
                    <label>
                        <input type="radio" name="people-filter" value="no-people" onChange={() => handleFilterChange('people', 'no-people')} checked={activeFilters.people === 'no-people'}/>
                        No People
                    </label>

                    <h5>Orientation</h5>
                    <label>
                        <input type="radio" name="orientation-filter" value="vertical" onChange={() => handleFilterChange('orientation', 'vertical')} checked={activeFilters.orientation === 'vertical'}/>
                        Vertical
                    </label>
                    <label>
                        <input type="radio" name="orientation-filter" value="horizontal" onChange={() => handleFilterChange('orientation', 'horizontal')} checked={activeFilters.orientation === 'horizontal'}/>
                        Horizontal
                    </label>

                    <h5>Size</h5>
                    <label>
                        <input type="radio" name="size-filter" value="small" onChange={() => handleFilterChange('size', 'small')} checked={activeFilters.size === 'small'}/>
                        Small
                    </label>
                    <label>
                        <input type="radio" name="size-filter" value="medium" onChange={() => handleFilterChange('size', 'medium')} checked={activeFilters.size === 'medium'}/>
                        Medium
                    </label>
                    <label>
                        <input type="radio" name="size-filter" value="large" onChange={() => handleFilterChange('size', 'large')} checked={activeFilters.size === 'large'}/>
                        Large
                    </label>

                    <h5>Color</h5>
                    <div className="color-options">
                    {colors.map((color, index) => (
                        <button
                        key={index}
                        className="color-option"
                        style={{
                            backgroundColor: color,
                            border: '1px solid rgb(217, 217, 217)'
                        }}
                        onClick={() => handleFilterChange('color', color)}
                        // onClick={() => alert(`Filter by color: ${color}`)}
                        // aria-label={`Filter by color ${color}`}
                        />
                    ))}
                    </div>

                    <div className="filter-actions">
                        <button className="clear-button" onClick={clearFilters}>Clear Filters</button>
                        <button className="close-button2" onClick={toggleFilterPopup}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SearchBarr;