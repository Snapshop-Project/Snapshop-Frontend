// import logo from './logo.svg';
import Header from '../../components/main-header/Header.js';
import Sidebar from '../../components/side-bar/Sidebar.js';
import SearchBarr from '../../components/search-bar/SearchBarr.js';
import PhotoGrid from '../../components/photo-grid/PhotoGrid.js';
import './styles.css'

function Browser() {
  return (
    <div className="app-container">
      {/* Header at the top */}
      <Header />

      <div className="main-content">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <div className="content-area">
          {/* You can add main content here */}
          {/* <div className="browse-header">
            <h1>BROWSE</h1>
          </div> */}
          <SearchBarr />
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
        
        
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a */}
           {/* className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a> */}
       {/* </header> */}
    
}

export default Browser;
