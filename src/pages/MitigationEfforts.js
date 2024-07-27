// src/pages/MitigationEfforts.js
import React from 'react';
import './MitigationEfforts.css';

const mitigationEfforts = [
  { title: 'Renewable Energy Initiatives', description: 'Countries are investing in renewable energy sources.' },
  { title: 'Reforestation Projects', description: 'Efforts to plant more trees to combat deforestation.' },
  { title: 'Clean Water Programs', description: 'Programs to ensure access to clean water in affected areas.' },
  { title: 'Sustainable Agriculture', description: 'Promoting agricultural practices that are sustainable and resilient.' },
  { title: 'Education and Awareness', description: 'Raising awareness about climate change and its impacts.' }
];

const MitigationEfforts = () => {
  return (
    <div className="container">
      <h2>Mitigation Efforts</h2>
      {mitigationEfforts.map((effort, index) => (
        <div key={index} className="effort">
          <h3>{effort.title}</h3>
          <p>{effort.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MitigationEfforts;
