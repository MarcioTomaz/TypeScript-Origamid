

type NumberOrString = string | number;
//A palavra-chave type cria um atalho (alias) para um tipo customizado.

let total: NumberOrString = 20;
total = "30";

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado? ${dados.teclado ? 'Sim' : 'Não'}  </p>
  </div>`
}

const computador: Produto = {
  nome: "Computador",
  preco: 2000,
  teclado: true
}

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



type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  if (categoria === 'design') {
    console.log('Pintar vermelho');
  } else if (categoria === 'codigo') {
    console.log('Pintar verde');
  } else if (categoria === 'descod') {
    console.log('Pintar roxo');
  }
}

pintarCategoria('codigo');


//============= Interfaces
//interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos e tipos primitivos utilizamos o type.

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados2(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
