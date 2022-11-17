package domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Funcionario extends Colaborador {
    public String role;
    public static Integer count =10000;
    static List<Funcionario> employeeList = new ArrayList<>();
    static List<Documento> employeeDocuments = new ArrayList<>();

    public Funcionario(String name, String lastName, String birthDate, String cpf, String address) {
        super(count ++, name, lastName, birthDate, cpf, address);
        this.role = "Funcionário";
    }

    public Funcionario(){
        super();
    }

    public static void addEmployee(Funcionario employee){
        employeeList.add(employee);
    }

    public static Boolean verifyIfEmployeeIsRegistered(String cpf){
        boolean loggedIn = false;
            for (int i = 0; i <= employeeList.size()-1; i++) {
                if (Objects.equals(employeeList.get(i).getCpf(), cpf)) {

                    loggedIn = !loggedIn;
                }
            }
        return loggedIn;
    }

    public static Integer getIdFunctionary(String cpf){
        int id = 0;
        for (int i = 0; i <= employeeList.size()-1; i++) {
            if (Objects.equals(employeeList.get(i).getCpf(), cpf)) {
                id = employeeList.get(i).getId();
            }
        }
        return id;
    }

    public static Documento returnDocumentById(Integer idDocument) {
        Documento doc = null;
        for (int i = 0; i <= employeeDocuments.size() - 1; i++) {
            if (Objects.equals(employeeDocuments.get(i).getIdDocument(), idDocument)) {
                doc = employeeDocuments.get(i);
            }
        }
        return doc;
    }
    @Override
    public void addDocument(Documento document, String cpf){
        document.setIdOwner( getIdFunctionary(cpf));
        employeeDocuments.add(document);
    }

    @Override
    public void listDocuments(){
        for (int i=0; i<=employeeDocuments.size()-1;i++){
            System.out.println("Id do documento:" + employeeDocuments.get(i).getIdDocument());
            System.out.println("Id Criador: " + employeeDocuments.get(i).getIdCreator());
            System.out.println("Link do documento: " + employeeDocuments.get(i).getLink());
            System.out.println("Status: " + employeeDocuments.get(i).getStatus());
            System.out.println("Id proprietário atual: " + employeeDocuments.get(i).getIdOwner());
            System.out.println("______________________________________");
        }
    }
    @Override
    public void removeDocument(Documento document){
        employeeDocuments.remove(document);
    }

}

