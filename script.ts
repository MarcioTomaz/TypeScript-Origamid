
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
