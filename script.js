"use strict";
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto('A guerra dos tronos', 100);
console.log(livro.precoReal());
// ================== Instanceof ==========
// Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo(1);
    }
    return null;
}
const produto = buscarProduto('O Hobbit');
if (produto instanceof Livro) {
    produto.autor;
}
