const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];

function maiorQue10(data: number[]) {
  return data.filter(n => n > 10)
}

function maiorQue102(data: Array<number) { //sintaxe alternativa
  return data.filter(n => n > 10)
}

function filtrarValores(data: (string | number)[]) {
  return data.filter(item => typeof item === 'number');
}

function filtrarValores2(data: Array<number | string>) {//sintaxe alternativa
  return data.filter(item => typeof item === 'number');

  console.log(filtrarValores(valores));
  console.log(maiorQue10([10, 11, 12]));

  const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120]
  ]
