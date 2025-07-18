class ContaBancaria {
    constructor(titular){
        this.titular = titular
        this.saldo = 0
    }

    depositar(valor){
        if(valor <= 0){
            throw new Error()
        }
    }
}