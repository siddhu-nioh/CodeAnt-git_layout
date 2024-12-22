import React from 'react';
import './App.css';

import Login from './Components/Login';
import Repo from './pages/repo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Repo />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
