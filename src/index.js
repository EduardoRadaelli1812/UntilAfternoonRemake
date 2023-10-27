import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga'; 
import './index.css';

import App from './App';
import Home from './pages/home/home';

function AppWithAnalytics() {
  useEffect(() => {
    ReactGA.initialize('G-MGXZFJ8F6Z'); 
  }, []);

  return (
    <React.StrictMode>
      <App />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<AppWithAnalytics />, document.getElementById('root'));
