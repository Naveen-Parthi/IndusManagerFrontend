import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Import UserProvider
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <UserProvider> {/* Wrap your App component with UserProvider */}
      <App />
    </UserProvider>
  </Router>,
  document.getElementById('root')
);
