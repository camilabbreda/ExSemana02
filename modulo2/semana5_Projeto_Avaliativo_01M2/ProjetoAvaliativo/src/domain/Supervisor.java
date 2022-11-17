package domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Supervisor extends Colaborador {
    public static Integer count = 20000;
    static List<Supervisor> supervisorList = new ArrayList<Supervisor>();
    static List<Documento> supervisorDocuments = new ArrayList<>();


    public Supervisor(String name, String lastName, String birthDate, String cpf, String address) {
        super(count++, name, lastName, birthDate, cpf, address);
    }

    public Supervisor() {
    }

    public static void addEmployee(Supervisor employee) {
        supervisorList.add(employee);

    }
    public static Boolean verifyIfEmployeeIsRegistered(String cpf) {
        boolean loggedIn = false;
        for (int i = 0; i <= supervisorList.size() - 1; i++) {
            if (Objects.equals(supervisorList.get(i).getCpf(), cpf)) {
                loggedIn = !loggedIn;
            }
        }
         return loggedIn;
    }
    public Boolean VerifyCpf(String cpf) {
        return super.VerifyCpf(cpf);
    }

    public static Integer getIdSupervisor(String cpf) {
        int id = 0;
        for (int i = 0; i <= supervisorList.size() - 1; i++) {
            if (Objects.equals(supervisorList.get(i).getCpf(), cpf)) {
                id = supervisorList.get(i).getId();
            }
        }
        return id;
    }

    public static  Documento returnSupervisorDocumentById(Integer idDocument) {
        Documento doc = null;
        for (int i = 0; i <= supervisorDocuments.size() - 1; i++) {
            if (Objects.equals(supervisorDocuments.get(i).getIdDocument(), idDocument)) {
                doc = supervisorDocuments.get(i);
            }
        }
        return doc;
    }

    @Override
    public void addDocument(Documento document, String cpf) {
        document.setIdOwner(getIdSupervisor(cpf));
        supervisorDocuments.add(document);
    }

    @Override
    public void listDocuments() {
        for (int i = 0; i <= supervisorDocuments.size() - 1; i++) {
            System.out.println("Id do documento:" + supervisorDocuments.get(i).getIdDocument());
            System.out.println("Id Criador: " + supervisorDocuments.get(i).getIdCreator());
            System.out.println("Link do documento: " + supervisorDocuments.get(i).getLink());
            System.out.println("Status: " + supervisorDocuments.get(i).getStatus());
            System.out.println("Id proprietário atual: " + supervisorDocuments.get(i).getIdOwner());
            System.out.println("______________________________________");
        }
    }
    @Override
     public void removeDocument(Documento document) {
        supervisorDocuments.remove(document);
    }

}
