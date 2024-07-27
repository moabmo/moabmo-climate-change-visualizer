// src/pages/EducationalResources.js
import React from 'react';
import './EducationalResources.css';

const educationalResources = [
  { title: 'Climate Change 101', description: 'An introduction to the basics of climate change.' },
  { title: 'How You Can Help', description: 'Simple actions you can take to reduce your carbon footprint.' },
  { title: 'The Science of Climate Change', description: 'Understanding the scientific principles behind climate change.' },
  { title: 'Global Impacts', description: 'How climate change is affecting different regions around the world.' },
  { title: 'Policy and Legislation', description: 'The role of policy and legislation in combating climate change.' }
];

const EducationalResources = () => {
  return (
    <div className="container">
      <h2>Educational Resources</h2>
      {educationalResources.map((resource, index) => (
        <div key={index} className="resource">
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationalResources;
