"use strict";
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];
function maiorQue10(data) {
    return data.filter(n => n > 10);
}
function maiorQue102(data) {
    return data.filter(n => n > 10);
}
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
function filtrarValores2(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(filtrarValores(valores));
console.log(maiorQue10([10, 11, 12]));
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120]
];
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML +=
            `
      <div>
      <h2 style="color: ${color};">${curso.nome}</h2>
      <p> Horas: ${curso.horas}</p>
        <p> Aulas: ${curso.aulas}</p>
        <p> Tipos: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>   
        
      </div>
    `;
    });
}
