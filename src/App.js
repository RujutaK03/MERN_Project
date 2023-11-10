import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/Index';

function App() {
  return (
    <Router>
      <div>
        {/* Common components like header or navigation can go here */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
