public class ExemplosDeHeranca {

    static class Animal {
        void fazerSom() {
            System.out.println("Animal fazendo som");
        }
    }

    static class Cachorro extends Animal {
        @Override
        void fazerSom() {
            System.out.println("Au au au au au au au");
        }
    }

    static class Mamifero extends Animal {
        void amamentar() {
            System.out.println("Mamífero está amamentando");
        }
    }

    static class Gato extends Mamifero {
        @Override
        void fazerSom() {
            System.out.println("Miau miau miau miau");
        }

        void fazerSom(String som) {
            System.out.println(som);
        }
    }

    static final class Peixe extends Animal {
        @Override
        void fazerSom() {
            System.out.println("Peixe está fazendo bolhas");
        }
    }

    public static void main(String[] args) {
        System.out.println("==== Herança Simples ====");
        Cachorro cachorro = new Cachorro();
        cachorro.fazerSom();

        System.out.println("==== Herança Multinível ====");
        Gato gato = new Gato();
        gato.fazerSom();
        gato.amamentar();

        gato.fazerSom("Gato Mia e Cachorro Late");
    }
}
