const notas = [10, 8.5, 5, 6.5, 8, 7.5];


//primeira expressão: executar apenas uma vez (declaração da variável > let indice = 0)
//segunda expressão: condição de execução(PARA cada vez que o indice for menor que notas.length incrementa 1 em indice (indice++))
//terceira expressão: executa sempre ao final do bloco
for(let indice = 0; indice < notas.length; indice++){ // Iniciando nosso laço de repetição para percorrer o array      
    console.log(indice, '>', notas[indice]);
}