"use strict";
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];
function maiorQue10(data) {
    return data.filter(n => n > 10);
}
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(filtrarValores(valores));
console.log(maiorQue10([10, 11, 12]));
