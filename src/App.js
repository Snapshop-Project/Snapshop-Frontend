import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesTree from './RoutesTree';
import { AuthProvider } from './components/store/Authentication';

function App() {
  return (
    <AuthProvider>
    <Router>
      <RoutesTree />
    </Router>
    </AuthProvider>
  );
}

export default App;