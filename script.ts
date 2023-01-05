

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