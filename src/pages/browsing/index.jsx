// import logo from './logo.svg';
import React, { useState } from 'react'; // Import useState
import Header from '../../components/main-header/Header.js';
// import Sidebar from '../../components/side-bar/Sidebar.js';
import SearchBarr from '../../components/search-bar/SearchBarr.js';
import PhotoGrid from '../../components/photo-grid/PhotoGrid.js';
import './styles.css'

function Browser() {
  const [filters, setFilters] = useState({
    people: '',
    orientation: '',
    size: '',
    fileType: '',
    // color: '',
  });

  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="app-container">
      {/* Header at the top */}
      <Header />

      <div className="main-content">
        {/* Sidebar on the left */}
        {/* <Sidebar /> */}

        {/* Main content area */}
        <div className="content-area">
          {/* You can add main content here */}
          {/* <div className="browse-header">
            <h1>BROWSE</h1>
          </div> */}
          <SearchBarr
              filters={filters}
              setFilters={setFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          <PhotoGrid filters={filters} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );

    
}

export default Browser;
