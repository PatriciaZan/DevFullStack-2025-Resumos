/*
let livraria = [
    {titulo: "1984", autor: "George Orwell", ano: 1984},
    {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
    {titulo: "Código Limpo", autor: "Martin", ano: 2010},
    {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910},
    {titulo: "O Príncipe", autor: "Maquiável", ano: 2002},
]

// For Of para iterar e verificar os livros publicados antes do ano 2000.
for(let livro of livraria){
    console.log(livro.ano);   
}

for(let key of livraria){
    if(key.ano < 2000){
        console.log(key);
    }
}
*/
/*
let filmes = [
    {titulo: "Sempre ao seu lado", genero: "De Chorar"},
    {titulo: "Massacre da Serra Eletrica", genero: "Terror"},
    {titulo: "Minha Mãe é uma Peça", genero: "Comédia"},
    {titulo: "Tarzan", genero: "Aventura"},
    {titulo: "Como eu Era Antes de você", genero: "De Chorar"},
    {titulo: "Top Gun", genero: "Guerra"},
    {titulo: "Your Name", genero: "Romance"},
    {titulo: "Deadpool", genero: "Herói"},
    {titulo: "Batman", genero: "Herói"},
]

// Listem a contagem de generos desses filmes

let contagemFilmes = {}
filmes.forEach((filme) => {
    if(contagemFilmes[filme.genero]){
        contagemFilmes[filme.genero]++
    } else {
        contagemFilmes[filme.genero] = 1
    }
    
})

console.table(contagemFilmes)
*/

// #### Construa uma função que calcule o fatorial de um número

/*
function calculaFatorial(numero){
    let fatorial = 1

    for(let i = 1; i <= numero; i++){
        fatorial = fatorial * i
    }

    console.log(fatorial);
}

calculaFatorial(5)
*/

// Imprima os primiros 10 números da sequência de Fibonacci
/*
function questao14() {
    const numero = Number(input("Informe um número: "));
    let fatorial = 1;
    
    while (numero > 1) {
        fatorial *= numero;
        numero--;
    }

    console.log("O fatorial desse número é:", fatorial);
}
*/

/* ################
function fibonacci(){
    let a = 0, b = 1, temp
    console.log(a);
    console.log(b);

    for(let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp);
        a = b 
        b= temp
    }
}
fibonacci()
*/

//Função de PA - Progressão Aritmética
function pa(primeiroTermo, razao){
    let soma = 0
    for(let i = 0; i < 10; i++){
        let termo = primeiroTermo + i * razao
        console.log(termo);
        soma += termo
    }

    console.log(`A soma dos termos é ${soma}`);
}

pa(1,3)
