const listaEstudantes = ['João Carlos', 'Enzo', 'Maria Fernanda', 'Beatriz', 'Gabriel Lima', 'Pedro', 'Renata', 'Isadora Carvalho', 
    'Brenda', 'Gabrieli', 'Lucas', 'Matheus', 'Aline', 'Carlos Henrique', 'Fabiana', 'Vinicius', 'Renan', 'Amanda', 'André', 'Paulo'];

    const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
    const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);

    console.log(`Lista de estudantes da sala 01: ${sala1}`);
    console.log(`Lista de estudantes da sala 02: ${sala2}`);