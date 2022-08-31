import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
const { faker } = require('@faker-js/faker');

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data =
{
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 10 }, () => ({
        x: faker.datatype.float({ min: 0, max: 10 }),
        y: faker.datatype.float({ min: 0, max: 10 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export function App() {
  console.log(JSON.stringify(data));
  return <Scatter options={options} data={data} />;
}
