// src/components/SearchBar.js

import React, { useState } from 'react';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'; // Import the search icon
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
    // const colors = ["#FF0000", "#03c900", "#0000FF", "#fce703", "#9447ff" ,"#634325", "#ff7b00" ,"#FF00FF", "#00FFFF", "#FFFFFF", "#858585" , "#000000"];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (category, value) => {
        setFilters((prev) => {
            // If the current value is already selected, remove it
            if (prev[category] === value) {
                return { ...prev, [category]: '' }; // Clear the filter for the category
            }
            // Otherwise, set the selected value
            return { ...prev, [category]: value };
        });
    };

    const removeFilter = (category) => {
        setFilters((prev) => ({
            ...prev,
            [category]: '', // Clear the specific filter
        }));
    };


    const clearFilters = () => {
        // Reset active filters when clear filters is clicked
        setFilters({
            people: '',
            orientation: '',
            size: '',
            fileType: '',
            // color: '',
        });
    };

    const filterCount = (() => {
        let count = 0;
        if (filters.people) count += 1;
        if (filters.orientation) count += 1;
        if (filters.size) count += 1;
        if (filters.fileType) count += 1;
        // if (filters.color) count += 1;
        return Math.min(count, 4);
    })();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchQuery(inputValue.trim()); // Trigger search with trimmed value
        }
    };
    
    const handleSearchSubmit = () => {
        setSearchQuery(inputValue.trim()); // Update the search query state
    };

    const clearSearch = () => {
        setInputValue(''); // Clear the input field
        setSearchQuery(''); // Reset the search query
    };

    const filterLabels = {
        people: 'With People',
        'no-people': 'Without People',
        vertical: 'Vertical',
        horizontal: 'Horizontal',
        small: 'Small (<= 1 MP)',
        medium: 'Medium (<= 6 MP)',
        large: 'Large',
        JPG: 'JPG',
        PNG: 'PNG',
        CR2: 'CR2',
        // Add more labels as needed
    };

    return (
        <div className="search-and-filter-container">
            <div className="search-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown} // Listen for Enter key
                    />

                    {searchQuery ? (
                        <FaTimes className="x-icon" onClick={clearSearch} /> // Show "X" if a search query exists
                    ) : (
                        <FaSearch className="search-icon" onClick={handleSearchSubmit} /> // Show search icon otherwise
                    )}
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
                        {/* <label>
                            <input type="radio" name="people-filter" value="people" onChange={() => handleFilterChange('people', 'people')} checked={filters.people === 'people'}/>
                            With People
                        </label>
                        <div className="radio-gap"></div>
                        <label>
                            <input type="radio" name="people-filter" value="no-people" onChange={() => handleFilterChange('people', 'no-people')} checked={filters.people === 'no-people'}/>
                            Without People
                        </label> */}
                        <div className="filter-buttons">
                            <button
                                className={`filter-option ${filters.people === 'people' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('people', 'people')}
                            >
                                <span className="filter-title">With People</span>
                            </button>
                            <button
                                className={`filter-option ${filters.people === 'no-people' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('people', 'no-people')}
                            >
                                <span className="filter-title">Without People</span>
                            </button>
                        </div>

                        <h5>Orientation</h5>
                        {/* <label>
                            <input type="radio" name="orientation-filter" value="vertical" onChange={() => handleFilterChange('orientation', 'vertical')} checked={filters.orientation === 'vertical'}/>
                            Vertical
                        </label>
                        <div className="radio-gap"></div>
                        <label>
                            <input type="radio" name="orientation-filter" value="horizontal" onChange={() => handleFilterChange('orientation', 'horizontal')} checked={filters.orientation === 'horizontal'}/>
                            Horizontal
                        </label> */}

                        <div className="filter-buttons">
                            <button
                                className={`filter-option ${filters.orientation === 'vertical' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('orientation', 'vertical')}
                            >
                                <span className="filter-title">Vertical</span>
                            </button>
                            <button
                                className={`filter-option ${filters.orientation === 'horizontal' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('orientation', 'horizontal')}
                            >
                                <span className="filter-title">Horizontal</span>
                            </button>
                        </div>

                        <h5>Resolution Size</h5>
                        {/* <label>
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
                        </label> */}
                        <div className="filter-buttons">
                            <button
                                className={`filter-option ${filters.size === 'small' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('size', 'small')}
                            >
                                <span className="filter-title">Small</span>
                                <span className="filter-subtitle">({`<= 1 MP`})</span>
                            </button>
                            <button
                                className={`filter-option ${filters.size === 'medium' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('size', 'medium')}
                            >
                                <span className="filter-title">Medium</span>
                                <span className="filter-subtitle">({`<= 6 MP`})</span>

                            </button>
                            <button
                                className={`filter-option ${filters.size === 'large' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('size', 'large')}
                            >
                                <span className="filter-title">Large</span>

                            </button>
                        </div>

                        <h5>File Type</h5>
                        <div className="filter-buttons">
                            <button
                                className={`filter-option ${filters.fileType === 'JPG' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('fileType', 'JPG')}
                            >
                                <span className="filter-title">JPG</span>
                            </button>
                            <button
                                className={`filter-option ${filters.fileType === 'PNG' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('fileType', 'PNG')}
                            >
                                <span className="filter-title">PNG</span>

                            </button>
                            <button
                                className={`filter-option ${filters.fileType === 'CR2' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('fileType', 'CR2')}
                            >
                                <span className="filter-title">CR2</span>

                            </button>
                        </div>
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
            {/* Filter Display Bar */}
            {Object.values(filters).some((value) => value) && (
                <div className="filter-display-bar">
                    <span className="applied-label">Filters Applied:</span>
                    {Object.entries(filters).map(([category, value]) => (
                        value && (
                            <div className="filter-chip" key={category}>
                                {filterLabels[value] || value} {/* Use label or fallback to value */}
                                <FaTimes
                                    className="remove-filter-icon"
                                    onClick={() => removeFilter(category)}
                                />
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBarr;