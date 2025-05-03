/*
const notas = [10, 6.5, 8, 7.5,];

let somaDasNotas = 0;

for(let nota of notas){ // Usando o for of criamos a variável nota dentro do nosso for que armazenará o nosso array notas direto, dessa forma ao invés dele acessar o indice ele acessa o elemento diretamente
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`)
*/

const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;

console.log("A média dos números é:", media);