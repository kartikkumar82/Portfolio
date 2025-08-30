import React from 'react';
import { Bar } from 'react-chartjs-2';
import sampleData from '../data/sample-data';

const DataVisualization = () => {
  const data = {
    labels: sampleData.map(item => item.label),
    datasets: [
      {
        label: 'Sample Data',
        data: sampleData.map(item => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Data Visualization</h2>
      <Bar data={data} />
    </div>
  );
};

export default DataVisualization;