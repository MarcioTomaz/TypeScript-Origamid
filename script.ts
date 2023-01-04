
let produto = "Livro"; //inferencia o typescript ja sabe q é uma string
let preco: number = 200;

//produto = 300; mostra o erro
//preco = "300"

const carro: {//sem inferencia
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

const carro2 = {// com inferencia
  marca: "Audi",
  portas: 5,
};
//carro.marca = 3 evita o erro

//------------------------------------------

function somar(a: number, b: number) {
  return a + b;
}

somar(5, 10);
// somar("10", "10");

const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = 'R$ ' + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);


//==========================================
// Exercício 1

//Conserte a função com TypeScript

// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }

// Resolução
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto(" TESTE "));

// Exercício 2
// Conserte as funções com TypeScript

// const input = document.querySelector('input');

// const total = localStorage.getItem('total');
// input.value = total;
// calcularGanho(input.value);

// function calcularGanho(value) {
//   const p = document.querySelector('p');
//   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }

// function totalMudou() {
//   const value = Number(input.value);
//   localStorage.setItem('total', value);
//   calcularGanho(value);
// }

// input.addEventListener('keyup', totalMudou);


// Resolução: 
const input = document.querySelector('input');
const total = localStorage.getItem('total');

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value);
    calcularGanho(Number(input.value));
  }

}

if (input) {
  input.addEventListener('keyup', totalMudou);
}

