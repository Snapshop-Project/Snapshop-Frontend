import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesTree from './RoutesTree';

function App() {
  return (
    <Router>
      <RoutesTree />
    </Router>
  );
}

export default App;