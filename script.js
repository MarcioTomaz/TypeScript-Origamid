"use strict";
//A palavra-chave type cria um atalho (alias) para um tipo customizado.
let total = 20;
total = "30";
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado? ${dados.teclado ? 'Sim' : 'Não'}  </p>
  </div>`;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true
};
preencherDados(computador);
preencherDados({
    nome: "Computador",
    preco: 2500,
    teclado: true
});
preencherDados({
    nome: "Notebook",
    preco: 2000,
    teclado: false
});
function pintarCategoria(categoria) {
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    }
    else if (categoria === 'codigo') {
        console.log('Pintar verde');
    }
    else if (categoria === 'descod') {
        console.log('Pintar roxo');
    }
}
pintarCategoria('codigo');
function preencherDados2(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
// ================Exercício==========================
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h2>${data.preco}</h2>
      <h2>${data.descricao}</h2>
      <h2>${data.garantia}</h2>
      <h2>${data.seguroAcidentes ? 'Possui Seguro' : 'Não possui seguro'}</h2>
      <div>
      <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
    </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
    </div>
  `;
}
