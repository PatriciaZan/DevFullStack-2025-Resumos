// array -> locação de memoria ordenada contigua e limitada

// Lista -> dinamico
// posições - nó com um valro contido/String/obj/number
// proximo

// OBJ oque tem, como está está, faz
let car = {
    nome: "McQueen",
    cor: "Vermelho"
}

let car2 = {
    nome: "Sally",
    cor: "Azul"
}

class CarExemplo {
    constructor(nome, cor){
        this.nome = nome
        this.cor = cor
    }
}

let car3 = new CarExemplo("Camaro", "Amarelo")

console.log(car.nome);
console.log(car3.nome);

// posição na lista é um nó
class Node {
    constructor(valor){ // methodo que entra em ação quando a classe é instanciada
        this.valor = valor
        this.proximo = null
    }
}

new Node()

// linkedList
class LinkedList{
    constructor(){
        this.head = null
    }
    // methodos para inserir/remover/imprimir
    inserirInicio(v){
        let novo = new Node(v)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir(){
        let atual = this.head
        let str = ""
        while(atual){
            str += atual.valor + "->"
            atual = atual.proximo
        }
        str += "null"
        console.log(str);
        
    }
}

let lista = new LinkedList()

lista.inserirInicio(10)
lista.inserirInicio(9)

lista.imprimir()

// ---------------------------
//Nó unico da lista

class Node {
    constructor(valor){ 
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }

    inserirInicio(v){
        let novo = new Node(v)
        if(!this.head){
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }
        this.length++
    }

    inserirFim(){
        let novo = new Node(v)
        if(!this.head){
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }

        length++
    }

    inserirEm(indice, valor){
        if(indice < 0 || indice > this.length) throw RangeError("Índice está fora dos limites!")
        if(indice === 0) return this.inserirInicio(valor)
        if(indice === this.length) return this.inserirFim(valor)

        let atual = this.head
        for(let i = 0; i < indice; i++){
            atual = atual.proximo
        }

        let novo = new Node(v)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.length++
    }

    removerEm(indice){
        if(indice < 0 || indice > this.length) throw RangeError("Índice está fora dos limites!")

        let remover

        if(this.length === 1){
            removido = this.head
            this.head = this.tail = null
        } else if(index === 0){
            removido = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if(indice === this.length - 1){
            removido = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else{
            let atual = this.head

            for(let i = 0; i< indice; i++){
                atual = atual.proximo
            }

            removido = atual
            const { proximo, anterior} = atual
            anterior.proximo = proximo
            proximo.anterior = anterior
        }

        this.length--
    }

    
}