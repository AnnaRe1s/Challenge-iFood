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
      pointBackgroundColor: '#ee6829'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function editTransaction(button) {
  const movimento = button.closest('.movimento');
  const descricao = movimento.querySelector('.descricao').innerText;
  const valor = movimento.querySelector('.valor').innerText.replace(/[^\d,-]/g, '').replace(',', '.');
  const tipo = valor < 0 ? 'saida' : 'entrada';

  openModal(descricao, parseFloat(valor), tipo);
}


//// Configuração do gráfico de faturamento
//const ctx = document.getElementById('faturamentoChart').getContext('2d');
//const faturamentoChart = new Chart(ctx, {
//  type: 'line',
//  data: {
//    labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
//    datasets: [{
//      label: 'Faturamento',
//      data: [10000, 20000, 15000, 30000, 20000, 25000, 15000, 18000, 22000],
//      backgroundColor: 'rgba(238, 104, 41, 0.2)',
//      borderColor: '#ee6829',
//      borderWidth: 2,
//      pointBackgroundColor: '#ee6829'
//    }]
//  },
//  options: {
//    responsive: true,
//    maintainAspectRatio: false, // Desativa a razão de aspecto para ocupar mais espaço vertical
//    scales: {
//      y: {
//        beginAtZero: true
//      }
//    }
//  }
//});

// Função para cancelar a edição e resetar os valores
function cancelEdit() {
  document.getElementById('nomeEntrada').value = 'ifood ltda';
  document.getElementById('valorEntrada').value = 'R$ 410,78';
}

// Função de envio do formulário para salvar (opcional)
document.getElementById('editForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nomeEntrada').value;
  const valor = document.getElementById('valorEntrada').value;

  console.log('Nome editado:', nome);
  console.log('Valor editado:', valor);
  // Aqui você pode aplicar lógica para salvar os dados
});
