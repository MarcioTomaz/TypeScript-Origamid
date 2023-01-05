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
