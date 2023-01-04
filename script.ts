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
