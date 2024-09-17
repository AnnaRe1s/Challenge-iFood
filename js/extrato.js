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
//      pointBackgroundColor: '#ee6829',
//      pointBorderColor: '#fff',
//      pointHoverBackgroundColor: '#fff',
//      pointHoverBorderColor: '#ee6829'
//    }]
//  },
//  options: {
//    responsive: true,
//    scales: {
//      y: {
//        beginAtZero: true
//      }
//    }
//  }
//});
// Inicialização do gráfico de faturamento
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
    maintainAspectRatio: false, // Desativa a razão de aspecto para ocupar mais espaço vertical
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Função para filtrar o extrato com base na descrição
function filterExtrato() {
  const input = document.getElementById('filterInput');
  const filter = input.value.toLowerCase();
  const cards = document.getElementsByClassName('extrato-card');

  for (let i = 0; i < cards.length; i++) {
    const entradas = cards[i].getElementsByClassName('entradas')[0];
    const saidas = cards[i].getElementsByClassName('saidas')[0];
    const entradasText = entradas.textContent || entradas.innerText;
    const saidasText = saidas.textContent || saidas.innerText;

    if (entradasText.toLowerCase().indexOf(filter) > -1 || saidasText.toLowerCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Função para editar o valor da transação
function editTransaction(button) {
  const valorElement = button.previousElementSibling;
  const currentValue = valorElement.innerText;

  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentValue;

  // Substitui o valor pelo input
  valorElement.parentNode.replaceChild(input, valorElement);

  // Adiciona evento para salvar a edição
  input.addEventListener('blur', function() {
    const newValue = input.value;
    const span = document.createElement('span');
    span.classList = valorElement.classList;
    span.innerText = newValue;

    input.parentNode.replaceChild(span, input);
  });
}

// Função para adicionar uma nova transação ao extrato
function addTransaction() {
  const extratoContainer = document.querySelector('.extrato-detalhado-container');

  // Criando um novo card de trans
}



// Abrir e fechar modal
const modal = document.getElementById("editModal");
const closeButton = document.querySelector(".close-button");
const form = document.getElementById("editTransactionForm");

function openModal(descricao, valor, tipo) {
  document.getElementById("descricao").value = descricao;
  document.getElementById("valor").value = valor;
  document.getElementById("tipo").value = tipo;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Fechar o modal quando clicar no "X"
closeButton.addEventListener("click", closeModal);

// Fechar o modal quando clicar fora da caixa de conteúdo
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Função para abrir o modal com dados de uma transação
function editTransaction(button) {
  const movimento = button.closest('.movimento');
  const descricao = movimento.querySelector('.descricao').innerText;
  const valor = movimento.querySelector('.valor').innerText.replace(/[^\d,-]/g, '').replace(',', '.');
  const tipo = valor < 0 ? 'saida' : 'entrada';

  openModal(descricao, parseFloat(valor), tipo);
}

// Submeter a edição (você pode personalizar a lógica aqui)
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Aqui você pode atualizar os dados da transação
  const descricao = document.getElementById("descricao").value;
  const valor = document.getElementById("valor").value;
  const tipo = document.getElementById("tipo").value;

  console.log('Descrição:', descricao, 'Valor:', valor, 'Tipo:', tipo);

  // Fechar o modal após salvar
  closeModal();
});
