import java.time.LocalDate;
import java.util.Date;


public class Produto {
    String nome;
    LocalDate data;
    Double preco;

    public Produto(String nome, LocalDate data, Double preco) {
        this.nome = nome;
        this.data = data;
        this.preco = preco;
    }

    public Produto() {
    }

    Boolean VerificaVencimento (Produto produto){
        Date hojeData = new Date();
       boolean vencido = produto.data.isBefore(LocalDate.now());
       return  vencido;
    }
}
