let total: string | number = 200;
total = '4000';

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber('200'));

const button = document.querySelector('button');

if (button) {
  button.click();
}

button?.click();// mesma coisa que o de cima mas mais moderno, ele só vai adicionar o click se for diferente de null ou undefined

// =========================== Exercício

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return Number(value);
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'Value deve ser um número ou uma string'
  }
}

console.log(toNumber(5));
console.log(toNumber('5'));
console.log(toNumber({}));


