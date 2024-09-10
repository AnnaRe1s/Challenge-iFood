document.addEventListener('DOMContentLoaded', () => {
    // Informações dos bairros e faturamento
    const bairros = [
        { nome: "Bairro Santa Terezinha - SP", valor: 8124.76 },
        { nome: "Bairro Dona Maria - SP", valor: 2137.91 },
        { nome: "Bairro Drice Madalena - SP", valor: 1437.12 }
    ];

    // Informações dos produtos
    const produtos = [
        { nome: "Vegan Burger - Abobrinha", pedidos: 251 },
        { nome: "Big Bacon Burger", pedidos: 197 },
        { nome: "Batata Premium", pedidos: 197 },
        { nome: "Refrigerante", pedidos: 194 }
    ];

    // Atualizar informações principais
    document.getElementById("bairro-destaque").textContent = bairros[0].nome;
    document.getElementById("faturamento-destaque").textContent = `R$ ${bairros[0].valor.toFixed(2)}`;

    // Atualizar progress bars e valores de bairros
    bairros.forEach((bairro, index) => {
        document.getElementById(`bairro${index + 1}-label`).textContent = bairro.nome;
        document.getElementById(`bairro${index + 1}-progress`).value = bairro.valor;
        document.getElementById(`bairro${index + 1}-progress`).max = bairros[0].valor;
        document.getElementById(`bairro${index + 1}-total`).textContent = `${bairro.valor.toFixed(2)} total`;
    });

    // Atualizar progress bars e valores de produtos
    produtos.forEach((produto, index) => {
        document.getElementById(`produto${index + 1}-label`).textContent = produto.nome;
        document.getElementById(`produto${index + 1}-progress`).value = produto.pedidos;
        document.getElementById(`produto${index + 1}-progress`).max = produtos[0].pedidos;
        document.getElementById(`produto${index + 1}-total`).textContent = `${produto.pedidos} Pedidos`;
    });
});
