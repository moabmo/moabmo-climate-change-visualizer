// src/components/DataVisualization.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { sampleData } from '../data/sampleData';
import './DataVisualization.css';

const DataVisualization = () => {
  useEffect(() => {
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', 600)
      .attr('height', 400)
      .style('background', '#fff')
      .style('border-radius', '10px')
      .style('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)')
      .style('padding', '1rem');

    svg.selectAll('rect')
      .data(sampleData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 100)
      .attr('y', d => 400 - d.value * 5)
      .attr('width', 80)
      .attr('height', d => d.value * 5)
      .attr('fill', '#3498db');

    svg.selectAll('text')
      .data(sampleData)
      .enter()
      .append('text')
      .attr('x', (d, i) => i * 100 + 40)
      .attr('y', d => 400 - d.value * 5 - 10)
      .attr('text-anchor', 'middle')
      .text(d => d.value);
  }, []);

  return <div id="chart"></div>;
};

export default DataVisualization;
