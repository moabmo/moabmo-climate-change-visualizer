// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImpactStories from './pages/ImpactStories';
import MitigationEfforts from './pages/MitigationEfforts';
import EducationalResources from './pages/EducationalResources';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impact-stories" element={<ImpactStories />} />
          <Route path="/mitigation-efforts" element={<MitigationEfforts />} />
          <Route path="/educational-resources" element={<EducationalResources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
