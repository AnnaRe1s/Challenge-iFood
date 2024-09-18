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

//
// Função para abrir a edição de uma entrada específica
function openEdit(data, descricao, valor) {
  // Atualiza a área de edição com os novos valores
  document.getElementById('editDate').innerText = data;
  document.getElementById('nomeEntrada').value = descricao;
  document.getElementById('valorEntrada').value = valor;
}

// Função para cancelar a edição e resetar os valores
function cancelEdit() {
  // Pode-se resetar para o estado anterior ou deixar como está
  document.getElementById('nomeEntrada').value = '';
  document.getElementById('valorEntrada').value = '';
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



// Função para abrir a edição no próprio card
function openEditInCard(cardId, data, descricao, valor) {
  // Localizar o card específico
  const card = document.getElementById(cardId);

  // Substituir o conteúdo estático por campos de edição
  card.innerHTML = `
    <div class="extrato-header">
      <span>${data}</span>
    </div>
    <div class="entradas">
      <p class="entradas-titulo">entradas</p>
      <form id="editForm_${cardId}">
        <div class="form-group">
          <label for="nomeEntrada_${cardId}">Nome</label>
          <input type="text" id="nomeEntrada_${cardId}" name="nomeEntrada" value="${descricao}" />
        </div>
        <div class="form-group">
          <label for="valorEntrada_${cardId}">Valor</label>
          <input type="text" id="valorEntrada_${cardId}" name="valorEntrada" value="${valor}" />
        </div>
        <div class="form-buttons">
          <button type="submit" class="save-button" onclick="saveEdit('${cardId}')"><i class="fas fa-check"></i></button>
          <button type="button" class="cancel-button" onclick="cancelEditInCard('${cardId}', '${data}', '${descricao}', '${valor}')"><i class="fas fa-times"></i></button>
        </div>
      </form>
    </div>
  `;
}

//// Função para cancelar a edição e voltar ao estado anterior
//function cancelEditInCard(cardId, data, descricao, valor) {
//  const card = document.getElementById(cardId);
//
//  // Substituir o conteúdo editável pelos valores originais
//  card.innerHTML = `
//    <div class="extrato-header">
//      <span>${data}</span>
//    </div>
//    <div class="entradas">
//      <p class="movimento">
//        <span class="descricao">${descricao}</span>
//        <span class="valor positivo">${valor}</span>
//        <button class="edit-button" onclick="openEditInCard('${cardId}', '${data}', '${descricao}', '${valor}')">✎</button>
//      </p>
//    </div>
//  `;
//}
//
//// Função para salvar a edição no card (a lógica de salvar pode ser customizada)
//function saveEdit(cardId) {
//  // Obter os valores editados
//  const nome = document.getElementById(`nomeEntrada_${cardId}`).value;
//  const valor = document.getElementById(`valorEntrada_${cardId}`).value;
//
//  console.log('Nome editado:', nome);
//  console.log('Valor editado:', valor);
//
//  // Aqui você pode adicionar a lógica para salvar os dados no backend ou em um estado global
//
//  // Atualizar o card com os novos valores após salvar
//  cancelEditInCard(cardId, 'Data Atualizada', nome, valor); // Atualiza o conteúdo do card após salvar
//}


// Função para abrir a edição no próprio card (apenas nome e valor de entrada)
function openEditInCard(cardId, data, descricao, valor) {
  // Localizar o card específico
  const card = document.getElementById(cardId);

  // Substituir o conteúdo estático de entradas por campos de edição
  card.innerHTML = `
    <div class="extrato-header">
      <span>${data}</span>
    </div>
    <div class="entradas">
      <p class="entradas-titulo">entradas</p>
      <form id="editForm_${cardId}">
        <div class="form-group">
          <label for="nomeEntrada_${cardId}">Nome</label>
          <input type="text" id="nomeEntrada_${cardId}" name="nomeEntrada" value="${descricao}" />
        </div>
        <div class="form-group">
          <label for="valorEntrada_${cardId}">Valor</label>
          <input type="text" id="valorEntrada_${cardId}" name="valorEntrada" value="${valor}" />
        </div>
        <div class="form-buttons">
          <button type="submit" class="save-button" onclick="saveEdit('${cardId}')"><i class="fas fa-check"></i></button>
          <button type="button" class="cancel-button" onclick="cancelEditInCard('${cardId}', '${data}', '${descricao}', '${valor}')"><i class="fas fa-times"></i></button>
        </div>
      </form>
    </div>
    <!-- As saídas permanecem inalteradas -->
    <div class="saidas">
      <p class="saidas-titulo">saídas</p>
      <p class="movimento">
        <span class="descricao">Loja de embalagens</span>
        <span class="valor negativo">R$ 721,10</span>
      </p>
    </div>
  `;
}

// Função para cancelar a edição e voltar ao estado anterior (apenas para entradas)
function cancelEditInCard(cardId, data, descricao, valor) {
  const card = document.getElementById(cardId);

  // Substituir o conteúdo editável pelos valores originais
  card.innerHTML = `
    <div class="extrato-header">
      <span>${data}</span>
    </div>
    <div class="entradas">
      <p class="movimento">
        <span class="descricao">${descricao}</span>
        <span class="valor positivo">${valor}</span>
        <button class="edit-button" onclick="openEditInCard('${cardId}', '${data}', '${descricao}', '${valor}')">✎</button>
      </p>
    </div>
    <!-- As saídas permanecem inalteradas -->
    <div class="saidas">
      <p class="saidas-titulo">saídas</p>
      <p class="movimento">
        <span class="descricao">Loja de embalagens</span>
        <span class="valor negativo">R$ 721,10</span>
      </p>
    </div>
  `;
}

// Função para salvar a edição no card (a lógica de salvar pode ser customizada)
function saveEdit(cardId) {
  // Obter os valores editados
  const nome = document.getElementById(`nomeEntrada_${cardId}`).value;
  const valor = document.getElementById(`valorEntrada_${cardId}`).value;

  console.log('Nome editado:', nome);
  console.log('Valor editado:', valor);

  // Aqui você pode adicionar a lógica para salvar os dados no backend ou em um estado global

  // Atualizar o card com os novos valores após salvar
  cancelEditInCard(cardId, 'Data Atualizada', nome, valor); // Atualiza o conteúdo do card após salvar
}


document.getElementById('addCostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const valor = document.getElementById('value').value;
    const tipo = document.getElementById('type').value;
    const data = document.getElementById('date').value;

    console.log(`Nome: ${nome}`);
    console.log(`Valor: R$ ${valor}`);
    console.log(`Tipo: ${tipo}`);
    console.log(`Data: ${data}`);

    // Aqui você pode adicionar lógica para salvar o novo custo no sistemaok
});