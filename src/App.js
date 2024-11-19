import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 導入 Navbar
import Home from './components/Home';
import IPhoneList from './components/IPhoneList';
import IPhoneDetail from './components/IPhoneDetail';

function App() {
  return (
    <Router>
      <Navbar /> {/* 添加 Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphones" element={<IPhoneList />} />
        <Route path="/iphones/:id" element={<IPhoneDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
