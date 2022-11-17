package application;

import entities.Account;
import entities.BusinessAccount;
import entities.SavingsAccount;

public class Program {
    public static void main(String[] args) {

        // downcast


        Account acc2 = new BusinessAccount(1002, "Freddie", 0.0, 200.0);

        Account acc3 = new SavingsAccount(1003, "Camila", 0.0, 0.01);

        BusinessAccount acc4 = (BusinessAccount) acc2;

        acc4.setLoanLimit(3500.00);
        acc4.loan(500.00);

        System.out.println(acc4.getBalance());

        if (acc2 instanceof BusinessAccount) {
            ((BusinessAccount) acc2).setLoanLimit(300.0);
            BusinessAccount acc5 = (BusinessAccount) acc2;
            acc5.setLoanLimit(2000.00);
            acc5.loan(200.00);
            System.out.println(acc5.getBalance());
        }

        if (acc3 instanceof BusinessAccount) {
            System.out.println("instance of!");
        } else {
            System.out.println("Warning!");
        }
    }
}