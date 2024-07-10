// client/src/components/Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Armoire', 'Etagère'],
    datasets: [
      {
        label: 'Nombre de meubles',
        data: [12, 19],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2>Tableau de Bord</h2>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
