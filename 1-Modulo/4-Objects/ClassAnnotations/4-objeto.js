/*
let livro = {
    nome: 'Marley e Eu',
    anoLancamento: '2024',
    autor: 'Will Smith',
    numeroPg: 12,
    genero: 'comédia',
    atores: ['Scooby', 'Super Cão', 'Batcão'],

    // methodo
    mostrarCaracteristicas: function(){
        return `${this.nome} é um livro para ficar alegre`
    }
}

console.log(livro.mostrarCaracteristicas());
console.log(livro);

let livro2 = livro
livro2.preco = 20.2
console.log(livro2);

let filme = {
    titulo: "Narnia",
    atores: 2007,
    atores: ['Ator1', 'Ator2', 'Ator3'],
    genero: 'Aventura',

    mostrarCaracteristicas: function(){
        return `${this.nome} é um livro de ${this.genero}`
    }
}


function Anime(nome, personagem, maisFraco, nota){
    return {
        nome,
        maisForte,
        maisFraco,
        nota
    }
}

let anime1 = Anime("Naruto", "Gemna", "Konohamaru", 5)
console.log(anime1);
*/
// For in -> indice
/*
let jogadores = ['Caça Rato', 'Ganso', 'Pato']

for(let key in jogadores){
    console.log(jogadores[key]);
}
*/

// For of -> valor -> iteraveis
/*
let palavras = 'Grêmio'
for(let char in palavras){
    console.log(char);
}
for(let value of Object.keys(anime1)){
    console.log(anime1[value]);
}
*/
/* 
function Anime(nome, maisForte, maisFraco, nota){
    return {
        nome,
        maisForte,
        maisFraco,
        nota
    }
}
let anime1 = Anime("Naruto", "Gemna", "Konohamaru", 5)

for(let i = 0; i < Object.keys(anime1); i++){
    console.log(anime1.nome);
}

*/
