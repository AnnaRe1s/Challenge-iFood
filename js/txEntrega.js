document.addEventListener("DOMContentLoaded", function () {
    const ctxPagamento = document.getElementById('grafico-pagamento').getContext('2d');
    
    // Verifique se o elemento existe antes de tentar acessá-lo
    let ctxTaxas = null;
    if (document.getElementById('grafico-taxas')) {
        ctxTaxas = document.getElementById('grafico-taxas').getContext('2d');
    }

    const graficoPagamento = new Chart(ctxPagamento, {
        type: 'bar',
        data: {
            labels: ['Dez 23', 'Jan 24', 'Fev 24'],
            datasets: [{
                label: 'Valor Pago',
                data: [45, 85, 55], // Exemplo de dados
                backgroundColor: '#e6761f'
            }]
        },
        options: {
            plugins: {
                legend: { display: true },
                tooltip: { enabled: true }
            },
            scales: {
                y: { beginAtZero: true }
            },
            backgroundColor: '#ffffff'  // Define o fundo da área de plotagem
        }
    });

    if (ctxTaxas) {
        const graficoTaxas = new Chart(ctxTaxas, {
            type: 'bar',
            data: {
                labels: ['Dez 23', 'Jan 24', 'Fev 24'],
                datasets: [{
                    label: 'Valor Taxas',
                    data: [30, 90, 40], // Exemplo de dados
                    backgroundColor: '#e6761f'
                }]
            },
            options: {
                plugins: {
                    legend: { display: true },
                    tooltip: { enabled: true }
                },
                scales: {
                    y: { beginAtZero: true }
                },
                backgroundColor: '#ffffff'  // Define o fundo da área de plotagem
            }
        });
    }

    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            atualizarDados(this.id);
        });
    });

    function atualizarDados(periodo) {
        if (periodo === 'mes') {
            // Atualize com os dados para o mês
        } else if (periodo === 'tres-meses') {
            // Atualize com os dados para 3 meses
        } else if (periodo === 'ano') {
            // Atualize com os dados para 1 ano
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const abrirModalBtn = document.getElementById('abrirModal');
    const fecharModalBtn = document.querySelector('.fechar');

    // Abre o modal
    abrirModalBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Fecha o modal
    fecharModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});