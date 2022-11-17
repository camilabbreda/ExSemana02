import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Produto produto = new Produto("Cacau", LocalDate.of(2022,5,10), 12.00);

        Produto produto1 = new Produto();
        produto1.data= LocalDate.of(2024,12,10);
        produto1.nome = "Café";
        produto1.preco=15.00;

        if(produto.VerificaVencimento(produto)){
            System.out.println("O Produto está vencido");
        }else{
            System.out.println("O Produto não está vencido");
        }

        if(produto.VerificaVencimento(produto1)){
            System.out.println("O Produto está vencido");
        }else{
            System.out.println("O Produto não está vencido");
        }
    }
}