// src/pages/Home.js
import React from 'react';
import Map from '../components/Map';
import DataVisualization from '../components/DataVisualization';
import './Home.css';

const Home = () => {
  return (
    <div className="container content">
      <h1>Climate Change Impact Visualizer</h1>
      <p>Explore the impacts of climate change on various regions.</p>
      <div className="map">
        <Map />
      </div>
      <div className="chart">
        <DataVisualization />
      </div>
    </div>
  );
};

export default Home;
