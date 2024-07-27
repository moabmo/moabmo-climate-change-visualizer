// src/pages/ImpactStories.js
import React from 'react';
import './ImpactStories.css';

const impactStories = [
  { title: 'Wildfires in California', description: 'Severe wildfires have devastated large areas.' },
  { title: 'Heatwaves in Europe', description: 'Record-breaking heatwaves are becoming more common.' },
  { title: 'Flooding in Asia', description: 'Heavy rains have caused widespread flooding in many areas.' },
  { title: 'Drought in Africa', description: 'Prolonged droughts have affected millions of people.' },
  { title: 'Coral Bleaching in Australia', description: 'Rising sea temperatures have led to extensive coral bleaching.' }
];

const ImpactStories = () => {
  return (
    <div className="container">
      <h2>Impact Stories</h2>
      {impactStories.map((story, index) => (
        <div key={index} className="story">
          <h3>{story.title}</h3>
          <p>{story.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactStories;
