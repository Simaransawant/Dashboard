// Bar chart with custom tooltip
const dataBarCustomTooltip = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Traffic',
          data: [30, 15, 62, 65, 61, 65, 40],
          backgroundColor: '#5c6bc0',  // Adjust the color of the bars
          borderColor: '#3e4a89',
          borderWidth: 1
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += `${context.formattedValue} users`;
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,  // Ensures y-axis starts at 0
        },
      },
      responsive: true,  // Keeps the chart responsive
      maintainAspectRatio: false,  // Allows custom chart size
    },
  };
  
  // Initialize the chart using Chart.js
  const ctx = document.getElementById('bar-chart-custom-tooltip').getContext('2d');
  new Chart(ctx, dataBarCustomTooltip);
  