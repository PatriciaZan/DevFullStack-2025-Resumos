const formAdicionar = document.getElementById('form-adicionar')
const inputItem = document.getElementById('input-item')
const listaItens = document.getElementById('lista-itens')
const btnLimpar = document.getElementById('btn-limpar')
const btnLimparComprados = document.getElementById('btn-limpar-comprados')
const quantiaItens = document.getElementById('numeroItens')

const listaFiltrada = document.getElementById('lista-itens-filtrados')
const btnFiltrarComprados = document.getElementById('btn-filtrar-comprados')
const btnFiltrarPendentes = document.getElementById('btn-filtrar-pendentes')


//Inicializa 
let itens = []
let comprados = []
let numeroItens = 0;
let comprado;

// Checa e carrega itens já salvos em localstorage -------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras')
    if(dados) {
        itens = JSON.parse(dados)
        renderizarLista()
    }
})

// Salva novos itens, itens já comprados -------------------------------------------------------
function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
    localStorage.setItem('comprados', JSON.stringify(comprados))
}

// Renderiazão ---------------------------------------------------------------------------------
// lista, btns
function renderizarLista() {
    listaItens.innerHTML = ''
    itens.forEach((item, index) => {
        const li = document.createElement('li')

        const span = document.createElement('span')
        span.textContent = item

        // Cria elementos Botoes Remover - Comprado  
        const btnRemover = document.createElement('button')
        const btnComprado = document.createElement('button')

        // adiciona classe - Conteudo - titulo
        btnRemover.classList.add('remover')
        btnRemover.textContent = '❌'
        btnRemover.title = 'Remover Item'
        btnComprado.classList.add('comprado')
        btnComprado.textContent = '🛒'
        btnComprado.title = 'Comprado'

        btnRemover.addEventListener('click', () => {
            removerItem(index)
        })

        // Marcar como comprado - Salvar esse Estado no localStorage
        btnComprado.addEventListener('click', () => {

            btnComprado.classList.toggle(true)
            if(btnComprado.classList.value !== 'comprado'){
                comprado = item
                //console.log(index);
                addCompra(index)
            }
        })

        li.append(span, btnRemover, btnComprado)
        listaItens.appendChild(li)
    })
}


formAdicionar.addEventListener('submit', (event) => {
    event.preventDefault()
    const novoItem = inputItem.value.trim()
    if(!novoItem) return

    itens.push(novoItem)
    salvarDados()
    renderizarLista()

    inputItem.value = ''
})

function removerItem(indice) {
    itens.splice(indice, 1)
    salvarDados()
    renderizarLista()
}

// Limpam a lista
btnLimpar.addEventListener('click', () => {
    if(confirm('Deseja limpar toda a lista?')) {
        itens = []
        numeroItens = 0
        salvarDados()
        renderizarLista()
    }
})
btnLimparComprados.addEventListener('click', () => {
    if(confirm('Deseja limpar todos os itens já comprados?')){
        comprados = []
        salvarDados()
        renderizarLista()
    }
})
//

// Adiciona na lista o item já comprado
function addCompra(index){
    // Previne ficar adiconando mesmo item
    if(!comprados.includes(comprado)){
        comprados.push(comprado)
    }

    itens[index].comprado = !itens[index].comprado
    //console.log('ADD');

    salvarDados(itens);
}

//Renderiza a quantia de itens
function RenderquantiaItens(){
    // Mostra o numero de itens e atualiza na página
    numeroItens = itens.length
    quantiaItens.textContent = `${numeroItens} Itens na Lista`
    //console.log(numeroItens);
}

// Opções de filtragem
btnFiltrarComprados.addEventListener('click', () => {
    filtrarComprados()
})

btnFiltrarPendentes.addEventListener('click', () => {
    filtrarPendentes()
})

function filtrarComprados(){
    listaFiltrada.innerHTML = ''
    comprados.forEach((comprado, index) => {
        console.log(comprado);
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = comprado
        li.append(span)
        listaFiltrada.appendChild(li)
    })
}

function filtrarPendentes(){
    listaItens.innerHTML = ''
    itens.forEach((item, index) => {
        console.log(item);
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = item
        li.append(span)
        listaFiltrada.appendChild(li)
    }) 
}

// Funcionalidades:

// ✔ Marcar como comprado - Salvar esse Estado no localStorage
// ✔ Contador de Itens - Mostrar quantos itens tem na lista, atualizando em tempo real
// Adicione filtros para itens 'comprados' e 'pedentes'
// Permita ordenar alfabeticamente ou por status