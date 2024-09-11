// Este arquivo pode conter funções para filtrar o extrato, ordenar as transações, etc.

// Configuração do gráfico de faturamento
const ctx = document.getElementById('faturamentoChart').getContext('2d');
const faturamentoChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Faturamento',
      data: [10000, 20000, 15000, 30000, 20000, 25000, 15000, 18000, 22000],
      backgroundColor: 'rgba(238, 104, 41, 0.2)',
      borderColor: '#ee6829',
      borderWidth: 2,
      pointBackgroundColor: '#ee6829',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ee6829'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

