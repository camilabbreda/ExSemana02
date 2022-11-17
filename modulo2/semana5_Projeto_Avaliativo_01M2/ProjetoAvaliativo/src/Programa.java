import Service.Service;
import domain.*;
import enums.Status;

import java.util.Scanner;


public class Programa {
    public static void main(String[] args) {
        Pessoa pessoa1 = new Pessoa(12, "José", "Maria", "12/09/1986", "073.038.709-70", "Servidão");


        Funcionario funcionario1 = new Funcionario("Jordana", "Jorgens", "12/09/1986", "073.038.709-70", "Rua");

        Funcionario funcionario2 = new Funcionario("Juliana", "Jaqueline", "12/09/1986", "073.038.709-80", "Rua");
        Funcionario.addEmployee(funcionario1);
        Funcionario.addEmployee(funcionario2);

        Supervisor supervisor1 = new Supervisor("Camila", "Breda", "12/09/1986", "073.038.709-70", "Merlene Silva");
        Supervisor supervisor2 = new Supervisor("Jacinta", "Pinta", "12/09/1986", "073.038.709-10", "Merlene Silva");
        Supervisor.addEmployee(supervisor1);
        Supervisor.addEmployee(supervisor2);

        Gerente gerente1 = new Gerente("Macella", "Chá", "12/09/1986", "073.038.709-70", "Merlene Silva");
        Gerente gerente2 = new Gerente("Mariele", "Chá", "12/09/1986", "073.038.709-30", "Merlene Silva");
        Gerente.addEmployee(gerente2);
        Gerente.addEmployee(gerente1);

        Documento documento1 = new Documento(1234, 1235, "http://", Status.Ativo);
        funcionario1.addDocument(documento1,"073.038.709-10");
        Documento documento2 = new Documento(1234, 1235, "http://", Status.Ativo);
        funcionario1.addDocument(documento2, "073.038.709-10");


        //Program first screen
        Service service = new Service();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Seja Bem-Vindo! Selecione a opção pelo número. Gostaria de:" +
                "\n 1 - Cadastrar Novo Usuário" +
                "\n 2 - Fazer Login" +
                "\n Entre a opção escolhida:");

        int choosen = scanner.nextInt();

        switch (choosen) {
            case 1:
                service.userRegister();
                do {
                    System.out.println("Por gentileza, selecione:" +
                            "\n 1 - Fazer Login" +
                            "\n 2 - Cadastrar Novo Usuário"
                    );
                    choosen = scanner.nextInt();
                    if (choosen == 1) {
                        service.Login();
                    } else if (choosen == 2) {
                        service.userRegister();
                    }
                } while (choosen == 2);

                break;
            case 2:
                service.Login();
                break;
        }

        int leave = 0;
        do {
            System.out.println("Deseja:" +
                    "\n 1 - Entrar com outra conta" +
                    "\n 2 - Sair");
            leave = scanner.nextInt();
            if(leave == 1 ){
                service.Login();
            }

        }while (leave!=2);
    }

}
