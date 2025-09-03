public class Pessoa{
    String nome;
    int idade;
    String sexo;

    public Pessoa(String nome, int idade, String sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    public void apresentar(){
        System.out.println('Meu nome é ' + nome + 'tenho ' + idade + 'anos e sou do sexo ' + sexo);
    }

    public String getNome(){
        return  this.nome;
    }
}

class Main{
    public static void main(String[] args){
        Pessoa p1 = new Pessoa(nome: "Pedro", idade: 20, sexo: "masculino")
        p1.apresentar();

        System.out.println(p1.nome);

        Pessoa p2 = new Pessoa(nome: "Maria", idade: 23, sexo: "feminino");
        p2.apresentar();

        System.out.println(p2.nome);
    }
}