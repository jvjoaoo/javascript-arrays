/*1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua
 valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.*/

const arrayEsparso = [3, , 8, , 9];

//console.log(arrayEsparso.length);

/*2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array.
 Em seguida, exiba o array antes e depois da alteração.*/

let listaDeCompras = ["banana", "Laranja", "Ovos", "Açucar", "chocolate"];

//console.log(`Lista de compras antes da alteração: ${listaDeCompras}`)

listaDeCompras[0] = "Maracujá";

//console.log(`Lista de compras depois da alteração: ${listaDeCompras}`)

/*3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os
  números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.*/

const meuArray = [];

meuArray.push(4, 5, 7);
meuArray[0] *= 2;

//console.log(meuArray.length);
//console.log(meuArray);

/*4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o
   array resultante.*/

const listaNumerica = [];

listaNumerica.push(45, 8, 29);

//console.log(listaNumerica);

/*5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a
 chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.*/

const clinica = [];

clinica.push("Cachorro", " Gato", " Calopsita");
//console.log(`Primeiros da fila: ${clinica}`);

const atendido1 = clinica.shift();
//console.log(`${atendido1} foi atendido. Fila agora: ${clinica.join(', ')}`);

const atendido2 = clinica.shift();
//console.log(`${atendido2} foi atendido. Fila agora: ${clinica.join(', ')}`);

const atendido3 = clinica.shift();
//console.log(`${atendido3} foi atendido. Fila agora: ${clinica.join(', ')}`);

/* 1. Crie uma função que receba dois arrays e os concatene em um único array.   --> Implementado sem adicionar parâmetros na function.
 function turmasEad(){
  const turmaPrimeiroA = ['Maria','Carlos', 'Luiza', 'Pedro'];
  const turmaPrimeiroB = ['João', 'Isabel', 'Gyovana', 'Eduardo'];

  const juncaoTurmas = turmaPrimeiroA.concat(turmaPrimeiroB);

  return `Lista de alunos que estão presente ${juncaoTurmas}`;
 }

 console.log(turmasEad());
*/ // --> Implementando com parâmetros.

function turmasEad(array1, array2) {
  return array1.concat(array2);
}

const turmaPrimeiroA = ["Maria", "Carlos", "Luiza", "Pedro"];
const turmaPrimeiroB = ["João", "Isabel", "Gyovana", "Eduardo"];

//console.log(turmasEad(turmaPrimeiroA, turmaPrimeiroB));

/* 2. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.*/

const contagemNumerica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = contagemNumerica.slice(3, 8);

//console.log(parteNumeros);

/* 3. Dado o array frutas contendo frutas que desejamos comprar na feira: const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'] Utilize o método splice para remover as 
 frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices. */

const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];

//console.log(frutas);

frutas.splice(2, 2, "Kiwi", "Pêssego"); // Removemos dois elementos do indice 2 e 3 e adicionamos no lugar mais dois elementos.

//console.log(frutas); // Saída: [ 'Maçã', 'Banana', 'Kiwi', 'Pêssego', 'Abacaxi' ]

/* 4. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto
  contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas. */

function cardapioDoDia() {
  const menuPrincipal = ["Lasanha", "Frango a passarinho", "Picadinho"];
  const menuDeSobremesas = ["Pudin", "Bolo de Cenoura", "Gelatina Colorida"];

  const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

  return `${menuCompleto}`;
}

//console.log(cardapioDoDia());

/* 5. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento. */

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

//console.log('Matriz de duas dimensões:');
//console.log(matriz);
//matriz.forEach(row => console.log(row));

/* 5.1. Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior. */
//console.log('Acessando a segunda linha e selecionando o terceiro elemento:', matriz[1][2]); // Saída: 6

/* 5.2. Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente. */
matriz[2][1] = 15;

//matriz.forEach(row => console.log('Matriz atualizada com o novo elemento:', row));

/* -> laço de repetição for
const matriculados = ["Ygor", "Carlos", "Fernanda", "Maria"];

for (let i = 0; i < matriculados.length; i++) {
  console.log(matriculados[i]);
}
*/

// -> laço de repetição while
const matriculados = ["Ygor", "Carlos", "Fernanda", "Maria"];

//let i = 0;

//while(i < matriculados.length){
//  console.log(matriculados[i])
//  i++
//}

const contador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for (let i = 0; i < contador.length; i++){
//  console.log(contador[i])

//}

const contadorInverso = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//let i = 0;

//while(i < contadorInverso.length){
//console.log(contadorInverso[i])

//i++;
//}

let i = 5;
let valorA = i++;
let valorB = ++i;

//console.log("O valor de valorA é:", valorA);
//console.log("O valor de valorB é:", valorB);

//O operador i++ faz um pós-incremento, o que significa que primeiro atribui o valor atual de i a valorA e depois incrementa i. 
// Em seguida, o operador ++i incrementa o valor de i e atribui esse valor a valorB.

/* Novos exercícios
1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const numeros = [10, 6.5, 8, 7.5,];

let somaDosNumeros = 0;

for(let numero of numeros){
    somaDosNumeros += numero;
}

const somaFinal = somaDosNumeros;
console.log('A soma dos números é', somaFinal)

/*
2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function imprimaArray(){
  const listaCompras = ['Banana', 'Maçã', 'Uva', 'Abacaxi'];

  return `Lista de compras completa ${listaCompras.length}`
}

console.log(imprimaArray());

/*
3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
*/
function somaDeValores(){
  const numerosInteiros = [44, 5, 145, 640];
  let soma = 0;

  for(let i = 0; i < numerosInteiros.length; i++){
    soma += numerosInteiros[i];
  }
  
  const valorFinal = soma;

  return 'A soma dos valores é igual a: ' + valorFinal
}

console.log(somaDeValores());


/*
4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

 */
