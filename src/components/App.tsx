import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import LeftMenu from './LeftMenu';
import Header from './Header';
import Dashboard from './Dashboard';
import Csgo from './Csgo';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <BrowserRouter>
          <LeftMenu />
          <div className="page-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/csgo" element={<Csgo/>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
