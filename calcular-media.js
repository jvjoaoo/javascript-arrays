function calcularMedia() {
  const aluno1 = 'João';  
  const notasJoao = [8, 10, 6];
  notasJoao.push(9) // Método push() serve para adiciona um novo elemento ao final do nosso array.

  let mediaJoao = (notasJoao[0] + notasJoao[1] + notasJoao[2] + notasJoao[3]) / notasJoao.length;

  const aluno2 = 'Pedro';  
  const notasPedro = [6, 5, 8, 7, 9];

  notasPedro.pop(); // A função pop() serve para remover o último elemento do nosso array. 
  let mediaPedro = (notasPedro[0] + notasPedro[1] + notasPedro[2] + notasPedro[3]) / notasPedro.length;



  return ` A média final do aluno ${aluno1} é: ${mediaJoao}
 `+`A média final do aluno ${aluno2} é: ${mediaPedro}`;
}

console.log(calcularMedia());


