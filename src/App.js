// import logo from './logo.svg';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import './App.css';

function App() {
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
          <h1>Content Area</h1>
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

export default App;
