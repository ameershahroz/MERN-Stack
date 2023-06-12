import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

const PopulationChart = ({ data }) => {
  
  const totalPopulation = data.reduce((sum, { population }) => sum + population, 0);


  const dataWithPercentage = data.map(({ country, population }) => ({
    country,
    population,
    percentage: ((population / totalPopulation) * 100).toFixed(2),
  }));

  return (
    <div className='App container-fluid'>
        <h1>Ten Most Highest Populated Countries</h1>
    <BarChart width={900} height={500} data={dataWithPercentage}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="population" fill="#8884d8">
        <LabelList dataKey="percentage" position="top" />
      </Bar>
    </BarChart>
    </div>
  );
};

export default PopulationChart;

