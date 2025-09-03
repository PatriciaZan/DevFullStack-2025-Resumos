public class ExemplosDeClasses {
    public static class ClasseEstatica {
        public static void mostrarMensagem(){
            System.out.println('Mensagem da Classe Estatica');
        }
    }

    public class ClasseInterna{
        public  void  mostrarMensagem(){
            System.out.println("Mensagem Interna");
        }
    }

    public  void exemploCasseLocal(){
        class ClasseLocal{
            public void mostrarMensagem(){
                System.out.println("Mensagem da Classe Local");
            }
        }
        ClasseLocal classeLocal = new ClasseLocal();
        classeLocal.mostrarMensagem();
    }

    public abstract static class ClasseAbstrata{
        public  abstract void mostrarMensagem();
    }

    public static class SubClasseAbstrata extends ClasseAbstrata{
        @Override
        public  void mostrarMensagem(){
            System.out.println("Mensagem da SubClasse Abstrata");
        }
    }

    public sealed class ClasseSelada permits SubClasseSelada{
        public void mostrarMensagem(){
            System.out.println("Mensagem de classe selada");
        }
    }

    public final class SubclasseSelada extends ClasseSelada{
        @Override;
        public void mostrarMensagem(){
            System.out.println("Mensagem da SubClasse selada");
        }
    }

    public record CLasseRecord(String nome){}

    public static void main(String[] args){
        ClasseEstatica.mostrarMensagem();
        SubClasseAbstrata c1 = new SubClasseAbstrata();
        c1.mostrarMensagem();

        CLasseRecord c2 = new CLasseRecord((nome: "bob"))
        System.out.println(c2.nome);
    }
}