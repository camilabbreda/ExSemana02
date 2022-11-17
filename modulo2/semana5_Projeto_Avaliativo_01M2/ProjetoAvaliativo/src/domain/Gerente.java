package domain;

import enums.Status;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Gerente extends Colaborador{
    public static Integer count =30000;
    static List<Gerente> managerList = new ArrayList<Gerente>();
    static List<Documento> managerDocuments = new ArrayList<>();

    static List<Documento> ActiveDocuments = new ArrayList<>();

    private static List<Documento> archivedManagerDocuments = new ArrayList<>();
    public Gerente(String name, String lastName, String birthDate, String cpf, String address) {
        super(count++, name, lastName, birthDate, cpf, address);
    }
    public Gerente(){}

    public static void addEmployee(Gerente employee){
        managerList.add(employee);
    }

    public static Boolean verifyIfEmployeeIsRegistered(String cpf){
        boolean loggedIn = false;
            for (int i = 0; i <= managerList.size()-1; i++) {
                if (Objects.equals(managerList.get(i).getCpf(), cpf)) {

                    loggedIn = !loggedIn;
                }
            }
        return loggedIn;
    }
    public static Integer getIdManager(String cpf) {
        int id = 0;
        for (int i = 0; i <= managerList.size() - 1; i++) {
            if (Objects.equals(managerList.get(i).getCpf(), cpf)) {
                id = managerList.get(i).getId();
            }
        }
        return id;
    }

    public static void archiveManagerDoc(Documento document){
        document.setStatus(Status.Arquivado);
        archivedManagerDocuments.add(document);
    }

    public static void listArchivedDocuments() {
        for (int i = 0; i <= archivedManagerDocuments.size() - 1; i++) {
            System.out.println("Id do documento:" + archivedManagerDocuments.get(i).getIdDocument());
            System.out.println("Id Criador: " + archivedManagerDocuments.get(i).getIdCreator());
            System.out.println("Link do documento: " + archivedManagerDocuments.get(i).getLink());
            System.out.println("Status: " + archivedManagerDocuments.get(i).getStatus());
            System.out.println("Id proprietário atual: " + archivedManagerDocuments.get(i).getIdOwner());
            System.out.println("______________________________________");
        }
    }
    @Override
    public void addDocument (Documento document, String cpf) {
        document.setIdOwner(getIdManager(cpf));
        managerDocuments.add(document);
    }
    @Override
    public void removeDocument(Documento document) {
        managerDocuments.remove(document);
    }
    public static Documento returnManagerDocumentById(Integer idDocument) {
        Documento doc = null;
        for (int i = 0; i <= managerDocuments.size() - 1; i++) {
            if (Objects.equals(managerDocuments.get(i).getIdDocument(), idDocument)) {
                doc = managerDocuments.get(i);
            }
        }
        return doc;
    }
    @Override
    public  void listDocuments () {
        for (int i = 0; i <= managerDocuments.size() - 1; i++) {
            System.out.println("Id do documento:" + managerDocuments.get(i).getIdDocument());
            System.out.println("Id Criador: " + managerDocuments.get(i).getIdCreator());
            System.out.println("Link do documento: " + managerDocuments.get(i).getLink());
            System.out.println("Status: " + managerDocuments.get(i).getStatus());
            System.out.println("Id proprietário atual: " + managerDocuments.get(i).getIdOwner());
            System.out.println("______________________________________");
        }
    }

}
