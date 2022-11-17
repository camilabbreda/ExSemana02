public class Main {
    public static void main(String[] args) {
        Funcionario funcionario = new Funcionario();
        Funcionario funcionario1 = new Funcionario("Maria", "12454", 1500.00);
        Funcionario funcionario2 = new Funcionario("Joana", "54645646");

        System.out.println(funcionario.getNome());
        System.out.println(funcionario1.getNome());
        System.out.println(funcionario2.getNome());

        funcionario2.setNome("Cecilia");
        System.out.println(funcionario2.getNome());


    }
}