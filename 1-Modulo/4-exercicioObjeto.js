// Calculem as médias das notas dos alunos de um proofessor 
// e digam se a turma do Professor está na média.

let professor = {
    nome: 'Strak Parker',
    materia: 'Física',
    notas: {
        aluno1: [5,2],
        aluno2: [3,7]
    }
}

//console.log(professor.notas);

let soma = 0;
let numeroAlunos = 0
for(let numero in professor.notas){
    soma += Array.isArray(professor.notas[numero]) ? 
    professor.notas[numero].reduce((acc, nota) => acc + nota, 0) / professor.notas[numero].length : 
    professor.notas[numero]

    numeroAlunos++
}

let media = soma/numeroAlunos

if(media >= 6){
    console.log(`acima do padrão ${media}`);
}else{
    console.log(`Abaixo do padrão ${media}`); 
}


console.table(professor.notas);
