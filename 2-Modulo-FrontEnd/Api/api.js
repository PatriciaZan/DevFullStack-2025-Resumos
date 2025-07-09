const inputCep = document.getElementById('cep')
const btnBuscar = document.getElementById('buscar')
const divResultado = document.getElementById('resultado')


async function consultarCEP() {
    const cep = inputCep.value

    const url = `https://viacep.com.br/ws/${cep}/json/`

    try{
        const resp = await fetch(url, {method: 'GET'})

        const data = await resp.json()

        divResultado.innerHTML = `
         <h2>Endereço encontrado:</h2>
            <ul>
                <li>CEP: ${data.cep}</li>
                <li>Logradouro: ${data.logradouro}</li>
                <li>Complemento: ${data.complemento}</li>
                <li>Bairro: ${data.bairro}</li>
                <li>Cidade: ${data.localidade}</li>
                <li>Estado: ${data.uf}</li>
            </ul>
            
        `
    }catch(error){
        divResultado.innerHTML = `Erro ao requisitar o CEP`
    }
}

btnBuscar.addEventListener('click', consultarCEP)


// resumo
// uma promise é um OBJ 
// que representa uma expectatica de uma tarefa que não temos o result/conclusão dela no momento

// pode ser True ou False
// tres estados fullfild , pendente , rejeitda

// existe para evitar o callback hell
// operações assincronas -> ocorrer em paralelo com outras estruturas do código

const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true
        if(sucesso){
            resolve('Dados carregados com sucesso')
        } else{
            reject(new Error('Falha ao carregar os dados.'))
        }
    }, 3000)
})

minhaPromise.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log('Erro: ', error);
}).finally(() => {
    console.log('Operação concluída.');
})

// async await
// faz parecer, "respeita"

const minhaPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true
        if(sucesso){
            resolve('Dados carregados com sucesso')
        } else{
            reject(new Error('Falha ao carregar os dados.'))
        }
    }, 3000)

    console.log('Testeee');
    
})

minhaPromise2.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log('Erro: ', error);
}).finally(() => {
    console.log('Operação concluída.');
})