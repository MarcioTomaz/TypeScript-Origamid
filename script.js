"use strict";
let produto = "Livro"; //inferencia o typescript ja sabe q é uma string
let preco = 200;
//produto = 300; mostra o erro
//preco = "300"
const carro = {
    marca: "Audi",
    portas: 5,
};
const carro2 = {
    marca: "Audi",
    portas: 5,
};
//carro.marca = 3 evita o erro
//------------------------------------------
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar("10", "10");
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
