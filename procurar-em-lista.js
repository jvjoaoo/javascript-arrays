const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota (aluno){
    if (lista[0].includes(aluno)){ // Consulta se o aluno está na lista com o includes(), retorna um resultado booleano (true ou falso)
        
        const indice = lista[0].indexOf(aluno); // Pegamos o índice do aluno com o indexOf() 
        const mediaAluno = lista[1][indice]; // mediaAluno recebe lista[1][indice] -> Acessamos o índice 1(medias) e o índice das médias com o indexOf()
        
        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
        console.log('Aluno não registrado na lista');
    }
}

exibeNomeENota('Caio')
exibeNomeENota('Guilherme')

