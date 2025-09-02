public class GerenciadorFilaAtendimento {
    // tipo atendimento
    // logica de senhas
    // if else

    // enum se comporta como uma constante
    enum Tipo { PREFERENCIAL, NORMAL}

    // nested class, uma classe independente
    static final class Senha {
        final Tipo tipo; // final -> imutavél
        final string senha;
        final LocalDateTime chegada;
        LocalDateTime atendimento;

        Senha(Tipo tipo, String codigo, LocalDateTime chegada){
            this.tipo = tipo;
            this.codigo = codigo;
            this.chegada = chegada;
            this.atendimento = LocalDateTime.now()
        }
    }

    private static void imprimir(){
        System.out.println(
                "=== Gerenciador de Fila (2 Preferenciais : 1 Normal) ==="
                        + "Comandos: "
                        + "- Chegar P : Adiciona senha preferencial "
                        + "\n - Chegar N : Adiciona senha normal "
                        + "\n - Atender: Chama a proxima senha (Regra 2P : 1N) "
                        + "\n - Histórico: Mostra histórico de chamada "
                        + "\n - Sair: Encerra imprimir o histórico"

        )
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        Deque<Senha> filaPref = new ArrayDeque<>();
        Deque<Senha> filaNormal = new ArrayDeque<>();
        List<Senha> historico = new ArrayList<>();

        int seqPref = 1;
        int seqNormal = 1;

        int preferenciaisAtendidasSeguidas = 0;

        imprimir()

        while(true){
            String linha = sc.nextLine().trim();

            if(linha.isEmpty()) continue;

            String in = linha.toLowerCase(Locale.ROOT);

            switch (in){
                case "atender":
                    if(filaPref.isEmpty() && filaNormal.isEmpty()){
                        System.out.println("Nenhuma senha aguardando. (filas vazias)");
                        continue
                    }

                    if(preferenciaisAtendidasSeguidas < 2 && !filaPref.isEmpty()){
                        atender(filaPref, historico);
                        preferenciaisAtendidasSeguidas++;
                    } else if(!filaNormal.isEmpty()){
                        atender(filaNormal, historico);
                        preferenciaisAtendidasSeguidas = 0;
                    }else if(!filaPref.isEmpty()){
                        atender(filaPref, historico);

                        if(preferenciaisAtendidasSeguidas < 2) preferenciaisAtendidasSeguidas++;
                    }else{
                        System.out.println("Nenhuma senha disponível para etendimento!");
                    }

                case "histórico":
                    imprimirHistorico(historico);
                default: {
                    if(in.startWith("Chegar")){
                        String qual = in.substring("Chegar ".length()).trim();
                        if(qual.equals("p") || qual.equals("pref")){
                            String codifo = "p" + String.format("%03d", seqPref++);
                            var s = new codigo(Tipo.PREFERENCIAL, codigo. localDateTime.now());
                            filaPref.addLast(s);
                            System.out.println("Chegada registrada: "+ codigo+ "(Preferencial). Em espera: " + filaPref.size());
                        } else if(qual.equals("n") || qual.equals("normal")){
                            String codigo = "n" + String.format("%03d", seqNormal++);
                            var s = new codigo(Tipo.NORMAL, codigo. localDateTime.now());
                            filaNormal.addLast(s);
                            System.out.println("Chegada registrada: "+ codigo+ "(Preferencial). Em espera: " + filaNormal.size());
                        } else{
                            System.out.println("Comando não conhecido");
                        }
                    }

                    sc.close()
                }


            }
        }
        private static void atender(Deque<codigo> fila, List<Senha> historico){
            Senha s = fila.pollFirts()
                    if(s == null){
                        System.out.println("Fila vazia");
                        return
                    }
                    s.atendimento = LocaleDateTime.now();
                    historico.add(s);
                    System.out.println("Chamando: "+ s.codigo + "(" + (s.tipo == Tipo.PREFERENCIAL ? "Preferencial" : "Normal"));
        }

        private static void imprimirHistorico (List<Senha> historico){
            if(historico.isEmpty()){
                System.out.println("Historico vazio");
                return;
            }
        }
    }

}




















