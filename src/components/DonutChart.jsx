import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({ labels, values, colors }) {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1e3a8a',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        cornerRadius: 8,
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.parsed + '%';
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1200,
    },
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DonutChart;