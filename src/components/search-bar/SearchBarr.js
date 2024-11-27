// src/components/SearchBar.js

import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; // Import the search icon
import './SearchBarr.css';

const SearchBarr = ({ filters, setFilters, searchQuery, setSearchQuery }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleFilterPopup = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // const [activeFilters, setActiveFilters] = useState({
    //     people: '',
    //     orientation: '',
    //     size: '',
    //     color: '',
    // });
    const colors = ["#FF0000", "#03c900", "#0000FF", "#fce703", "#9447ff" ,"#634325", "#ff7b00" ,"#FF00FF", "#00FFFF", "#FFFFFF", "#858585" , "#000000"];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (category, value) => {
        setFilters((prev) => {
            const updatedFilters = { ...prev, [category]: value };
            console.log(updatedFilters); // Debug: check updated filters
            return updatedFilters;
        });
    };

    const clearFilters = () => {
        // Reset active filters when clear filters is clicked
        setFilters({
            people: '',
            orientation: '',
            size: '',
            // color: '',
        });
    };

    const filterCount = (() => {
        let count = 0;
        if (filters.people) count += 1;
        if (filters.orientation) count += 1;
        if (filters.size) count += 1;
        // if (filters.color) count += 1;
        return Math.min(count, 4);
    })();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchQuery(inputValue.trim()); // Trigger search with trimmed value
        }
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Listen for Enter key
                />
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
                        <input type="radio" name="people-filter" value="people" onChange={() => handleFilterChange('people', 'people')} checked={filters.people === 'people'}/>
                        With People
                    </label>
                    <div className="radio-gap"></div>
                    <label>
                        <input type="radio" name="people-filter" value="no-people" onChange={() => handleFilterChange('people', 'no-people')} checked={filters.people === 'no-people'}/>
                        Without People
                    </label>

                    <h5>Orientation</h5>
                    <label>
                        <input type="radio" name="orientation-filter" value="vertical" onChange={() => handleFilterChange('orientation', 'vertical')} checked={filters.orientation === 'vertical'}/>
                        Vertical
                    </label>
                    <div className="radio-gap"></div>
                    <label>
                        <input type="radio" name="orientation-filter" value="horizontal" onChange={() => handleFilterChange('orientation', 'horizontal')} checked={filters.orientation === 'horizontal'}/>
                        Horizontal
                    </label>

                    <h5>Resolution Size</h5>
                    <label>
                        <input type="radio" name="size-filter" value="small" onChange={() => handleFilterChange('size', 'small')} checked={filters.size === 'small'}/>
                        Small ({'<'}= 1 MP)
                    </label>
                    <div className="radio-gap"></div>
                    <label>
                        <input type="radio" name="size-filter" value="medium" onChange={() => handleFilterChange('size', 'medium')} checked={filters.size === 'medium'}/>
                        Medium ({'<'}= 6 MP)
                    </label> 
                    <div className="radio-gap"></div>
                    <label>
                        <input type="radio" name="size-filter" value="large" onChange={() => handleFilterChange('size', 'large')} checked={filters.size === 'large'}/>
                        Large
                    </label>

                    {/* <h5>Color</h5>
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
                    </div> */}

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