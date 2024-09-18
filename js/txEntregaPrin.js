// Gráfico de Pagamentos por Dia (Barras)
const ctxPagamento = document.getElementById('grafico-pagamento').getContext('2d');
const pagamentoChart = new Chart(ctxPagamento, {
    type: 'bar',
    data: {
        labels: ['01/01/24', '02/01/24', '03/01/24', '04/01/24', '05/01/24', '06/01/24'],
        datasets: [{
            label: 'Valor pago por entrega por dia',
            data: [300, 350, 280, 400, 450, 380], // Exemplo de dados
            backgroundColor: 'rgba(238, 104, 41, 0.8)',
            borderColor: '#EE6829',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }},
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Dias'
                }
            },
            y: {
                title: {
                    display: false,
                    text: 'Valor (R$)'
                },
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Taxas de Entrega por Dia (Barras)
const ctxTaxas = document.getElementById('grafico-taxas').getContext('2d');
const taxasChart = new Chart(ctxTaxas, {
    type: 'bar',
    data: {
        labels: ['01/01/24', '02/01/24', '03/01/24', '04/01/24', '05/01/24', '06/01/24'],
        datasets: [{
            label: false,
            data: [50, 55, 60, 58, 62, 64], // Exemplo de dados
            backgroundColor: 'rgba(238, 104, 41, 0.8)',
            borderColor: '#EE6829',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }},
        responsive: true,
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Dias'
                }
            },
            y: {
                title: {
                    display: false,
                    text: 'Valor (R$)'
                },
                beginAtZero: true
            }
        }
    }
});
