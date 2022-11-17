public class Funcionario {
    private String nome;
    private String funcional;
    private Double salario;
    private Double saldo;

//    Construtores
//    Construtor vazio ou Default

    Funcionario(){};

//    Construtor com parâmetros


    public Funcionario(String nome, String funcional, Double salario) {
        this.nome = nome;
        this.funcional = funcional;
        this.salario = salario;
    }

    public Funcionario (String nome, String funcional){
        this.nome = nome;
        this.funcional= funcional;
    }

    public String adicionaValorNome (String novoNome){
     this.nome = novoNome;
     return this.nome;
    }


    public Double recebeSalario(){
        return saldo += salario;
    }
    public Double adicionaBonus( Double bonus){
       salario = salario + bonus;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
