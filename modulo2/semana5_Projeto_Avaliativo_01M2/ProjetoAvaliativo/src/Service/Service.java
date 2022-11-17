package Service;

import domain.*;
import enums.Status;

import java.util.Scanner;

public class Service {

    // TELA DE REGISTRO DE USUÁRIO E VERIFICAÇÃO DE CPF
    public void userRegister() {
        Pessoa person = new Pessoa();

        Scanner scannerInt = new Scanner(System.in);
        Scanner scannerStr = new Scanner(System.in);
        System.out.println("Digite seu primeiro nome:");
        String name = scannerStr.nextLine();
        System.out.println("Digite seu sobrenome: ");
        String lastname = scannerStr.nextLine();
        System.out.println("Digite sua data de nascimento (DD/MM/AAAA): ");
        String birthDate = scannerStr.nextLine();
        System.out.println("Digite seu cpf (XXX.XXX.XXX-XX): ");
        String cpf = scannerStr.nextLine();
        if (!person.VerifyCpf(cpf)) {
            do {
                System.out.println("cpf inválido, por favor, digite novamente neste formato -> XXX.XXX.XXX-XX :");
                cpf = scannerStr.nextLine();
            } while (!person.VerifyCpf(cpf));
        }
        System.out.println("Digite seu endereço completo:");
        String address = scannerStr.nextLine();
        System.out.println("Digite seu Cargo:" +
                "\n 1 - Funcionário" +
                "\n 2 - Supervisor" +
                "\n 3 - Gerente"
        );
        int role = scannerInt.nextInt();

        switch (role) {
            case 1:
                Funcionario personRegister = new Funcionario(name, lastname, birthDate, cpf, address);
                Funcionario.addEmployee(personRegister);
                System.out.println("Cadastro Realizado!");
                break;
            case 2:
                Supervisor supervisorRegister = new Supervisor(name, lastname, birthDate, cpf, address);
                Supervisor.addEmployee(supervisorRegister);
                System.out.println("Cadastro Realizado!");
                break;
            case 3:
                Gerente managerRegister = new Gerente(name, lastname, birthDate, cpf, address);
                Gerente.addEmployee(managerRegister);
                System.out.println("Cadastro Realizado!");
                break;
        }
    }

    //TELA DE LOGIN + USUÁRIO LOGADO
    public void Login() {
        Documento document = new Documento();
        Pessoa person = new Pessoa();
        Funcionario funcionario = new Funcionario();
        Scanner scannerInt = new Scanner(System.in);
        Scanner scannerStr = new Scanner(System.in);

        System.out.println("Digite seu cpf (XXX.XXX.XXX-XX): ");
        String cpf = scannerStr.nextLine();
        if (!person.VerifyCpf(cpf)) {
            do {
                System.out.println("cpf inválido, por favor, digite novamente neste formato -> XXX.XXX.XXX-XX :");
                cpf = scannerStr.nextLine();
            } while (!person.VerifyCpf(cpf));
        }
        System.out.println("Qual a sua função" +
                "\n 1 - Funcionário" +
                "\n 2 - Supervisor" +
                "\n 3 - Gerente"
        );
        int choosenPost = scannerInt.nextInt();

        //VERIFICA SE O FUNCIONÁRIO ESTÁ CADASTRADO ATRAVÉS DA LISTA ESCOLHIDA NA SELEÇÃO ACIMA;
        verificationUserRegistry(choosenPost, cpf);
        switch (choosenPost) {
            case 1:
                // TELA DO FUNCIONÁRIO LOGADO
                verifyEmployeeCommands(choosenPost, cpf);
                break;
            case 2:
                // TELA DO SUPERVISOR LOGADO
                verifySupervisorCommands(choosenPost, cpf);
                break;
            case 3:
                //TELA DO GERENTE LOGADO
                verifyManagerCommands(choosenPost, cpf);
                break;
        }
    }


    //MÉTODO COM A LISTA DE COMANDOS DO FUNCIONÁRIO

    public void verifyEmployeeCommands(Integer choosenPost, String cpf) {
        Scanner scannerInt = new Scanner(System.in);
        int choosen = 0;
        do {
            System.out.println("O que deseja fazer:" +
                    "\n 1 - Criar Documento;" +
                    "\n 2 - Listar documentos" +
                    "\n 3 - Sair"
            );
            choosen = scannerInt.nextInt();
            switch (choosen) {
                case 1:
                    registerDocument(cpf, choosenPost);
                    break;
                case 2:
                    try {
                        Funcionario employee = new Funcionario();
                        employee.listDocuments();
                        System.out.println("Digite o id do documento para enviar ou 1 - Sair");
                        choosen = scannerInt.nextInt();

                        switch (choosen) {
                            case 1:
                                break;
                            default:
                                Supervisor supervisor = new Supervisor();
                                Documento documentById = Funcionario.returnDocumentById(choosen);
                                employee.removeDocument(documentById);
                                supervisor.addDocument(documentById, cpf);
                                break;
                        }
                    } catch (NullPointerException exception) {
                        System.out.println("Id inválido");

                    }
                    ;
                    break;
                case 3:
                    break;
            }
        } while (choosen != 3);
    }

    //MÉTODO COM A LISTA DE COMANDOS DO SUPERVISOR
    public void verifySupervisorCommands(Integer choosenPost, String cpf) {
        Scanner scannerInt = new Scanner(System.in);
        int choosen = 0;
        do {

            System.out.println("O que deseja fazer:" +
                    "\n 1 - Enviar para o gerente" +
                    "\n 2 - Retornar para o Funcionário" +
                    "\n 3 - Cadastrar Novo Documento" +
                    "\n 4 - Ver todos os documentos Funcionários" +
                    "\n 5 - Ver documentos Análise Supervisor" +
                    "\n 6 - Sair"
            );
            choosen = scannerInt.nextInt();
            switch (choosen) {
                case 1:
                    try {
                        Supervisor supervisor = new Supervisor();
                        supervisor.listDocuments();
                        System.out.println("Digite o id do documento para enviar ou 1 - Sair");
                        choosen = scannerInt.nextInt();
                        switch (choosen) {
                            case 1:
                                break;
                            default:
                                Gerente manager = new Gerente();
                                Documento supervisorDocumentById = Supervisor.returnSupervisorDocumentById(choosen);
                                supervisor.removeDocument(supervisorDocumentById);
                                manager.addDocument(supervisorDocumentById, cpf);
                                break;
                        }
                    } catch (NullPointerException exception) {
                        System.out.println("Id inválido");

                    }
                    ;
                    break;
                case 2:
                    try {
                        Supervisor supervisor = new Supervisor();
                        supervisor.listDocuments();
                        System.out.println("Digite o id do documento para enviar ou 1 - Sair");
                        choosen = scannerInt.nextInt();
                        switch (choosen) {
                            case 1:
                                break;
                            default:
                                Funcionario funcionario = new Funcionario();
                                Documento supervisorDocumentById = Supervisor.returnSupervisorDocumentById(choosen);
                                supervisor.removeDocument(supervisorDocumentById);
                                funcionario.addDocument(supervisorDocumentById, cpf);
                                break;
                        }
                    } catch (NullPointerException exception) {
                        System.out.println("Id inválido");

                    }
                    ;
                    break;
                case 3:
                    registerDocument(cpf, choosenPost);
                    break;
                case 4:
                    Funcionario employee = new Funcionario();
                    employee.listDocuments();
                    break;
                case 5:
                    try {
                        Supervisor supervisor = new Supervisor();
                        supervisor.listDocuments();
                        System.out.println("Digite o id do documento para enviar ou 1 - Sair");
                        choosen = scannerInt.nextInt();
                        switch (choosen) {
                            case 1:
                                break;
                            default:
                                Gerente manager = new Gerente();
                                Funcionario funcionario = new Funcionario();
                                Documento supervisorDocumentById = Supervisor.returnSupervisorDocumentById(choosen);
                                supervisor.removeDocument(supervisorDocumentById);
                                manager.addDocument(supervisorDocumentById, cpf);
                                break;
                        }
                    } catch (NullPointerException exception) {
                        System.out.println("Id inválido");
                    }
                    break;
                default:
                    break;
            }
        } while (choosen != 6);
    }

    //MÉTODO COM AS LISTA DE COMANDOS DO GERENTE
    public void verifyManagerCommands(Integer choosenPost, String cpf) {
        Scanner scannerInt = new Scanner(System.in);
        int choosen = 0;
        do {
            System.out.println("O que deseja fazer:" +
                    "\n 1 - Arquivar Documento" +
                    "\n 2 - Cadastrar Novo Documento" +
                    "\n 3 - Ver todos os Documentos" +
                    "\n 4 - Sair"
            );
            choosen = scannerInt.nextInt();
            switch (choosen) {
                case 1:
                    Gerente manager = new Gerente();
                    manager.listDocuments();
                    System.out.println("Digite o id do documento para Arquivar ou 1 - Sair");
                    choosen = scannerInt.nextInt();
                    switch (choosen) {
                        case 1:
                            break;
                        default:
                            Documento managerDocumentById = Gerente.returnManagerDocumentById(choosen);
                            manager.removeDocument(managerDocumentById);
                            Gerente.archiveManagerDoc(managerDocumentById);
                            System.out.println("Os documentos Arquivados são:");
                            Gerente.listArchivedDocuments();
                            break;
                    }
                    break;
                case 2:
                    registerDocument(cpf, choosenPost);
                    break;
                case 3:
                    System.out.println("Você deseja visualizar:" +
                            "\n 1 - Documentos Arquivados" +
                            "\n 2 - Documentos Ativos Análise" +
                            "\n 3 - Listar todos os Documentos Ativos" +
                            "\n 4 - Sair"

                    );
                    choosen = scannerInt.nextInt();
                    switch (choosen) {
                        case 1:
                            System.out.println("Os documentos Arquivados são:");
                            Gerente.listArchivedDocuments();
                            break;
                        case 2:
                            System.out.println("Os documentos Ativos são:");
                            Gerente gerente = new Gerente();
                            gerente.listDocuments();
                            break;
                        case 3:
                            Funcionario employee = new Funcionario();
                            employee.listDocuments();
                            Supervisor supervisor = new Supervisor();
                            supervisor.listDocuments();
                            Gerente gerente2 = new Gerente();
                            gerente2.listDocuments();
                            break;
                    }
                    break;
                default:
                    break;
            }
        } while (choosen != 4);
    }

    //MÉTODO PARA REGISTRAR DOCUMENTOS E ESCOLHER SE ENVIA OU NÃO
    public void registerDocument(String cpf, Integer choosen) {
        Scanner scannerString = new Scanner(System.in);
        Scanner scannerInt = new Scanner(System.in);
        System.out.println("Digite o Link do documento:");
        String link = scannerString.nextLine();
        switch (choosen) {
            case 1:
                //REGISTRO DE DOCUMENTO POR FUNCIONÁRIO
                Funcionario funcionario = new Funcionario();
                int idOwner = Funcionario.getIdFunctionary(cpf);
                int idCreator = Funcionario.getIdFunctionary(cpf);
                Documento document = new Documento(idOwner, idCreator, link, Status.Ativo);
                funcionario.addDocument(document, cpf);
                System.out.println("Deseja enviar documento para  o Supervisor?" +
                        "\n 1 - Sim" +
                        "\n 2 - Não"
                );
                int choosen2 = scannerInt.nextInt();
                switch (choosen2) {
                    case 1:
                        try {
                            Supervisor supervisor = new Supervisor();
                            Funcionario employee = new Funcionario();
                            employee.removeDocument(document);
                            supervisor.addDocument(document, cpf);
                            System.out.println("documento enviado!");
                            do {
                                employee.listDocuments();
                                System.out.println("Digite o id do documento para enviar ou 1 - Sair");
                                choosen = scannerInt.nextInt();
                                switch (choosen) {
                                    case 1:
                                        break;
                                    default:
                                        Documento documentById = Funcionario.returnDocumentById(choosen);
                                        employee.removeDocument(documentById);
                                        supervisor.addDocument(documentById, cpf);
                                        break;
                                }
                            } while (choosen != 1);
                        } catch (NullPointerException exception) {
                            System.out.println("Id inválido");

                        }
                        ;
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                //REGISTRO DE DOCUMENTO POR SUPERVISOR
                Supervisor supervisor = new Supervisor();
                idOwner = Supervisor.getIdSupervisor(cpf);
                idCreator = Supervisor.getIdSupervisor(cpf);
                document = new Documento(idOwner, idCreator, link, Status.Ativo);
                supervisor.addDocument(document, cpf);
                System.out.println("Deseja enviar documento para  o Gerente?" +
                        "\n 1 - Sim" +
                        "\n 2 - Não"
                );
                choosen2 = scannerInt.nextInt();
                switch (choosen2) {
                    case 1:
                        try {
                            Gerente manager = new Gerente();
                            supervisor.removeDocument(document);
                            manager.addDocument(document, cpf);
                            System.out.println("documento enviado!");

                            do {
                                supervisor.listDocuments();
                                System.out.println("Digite o id do documento para enviar ou 1 - Sair");
                                choosen = scannerInt.nextInt();
                                switch (choosen) {
                                    case 1:
                                        break;
                                    default:
                                        Documento documentById = Supervisor.returnSupervisorDocumentById(choosen);
                                        supervisor.removeDocument(documentById);
                                        manager.addDocument(documentById, cpf);
                                        break;
                                }
                            } while (choosen != 1);
                        } catch (NullPointerException exception) {
                            System.out.println("Id inválido");

                        }
                        ;
                        break;
                }
                break;
            case 3:
                //REGISTRO DE DOCUMENTO POR GERENTE
                Gerente manager = new Gerente();
                idOwner = Gerente.getIdManager(cpf);
                idCreator = Gerente.getIdManager(cpf);
                document = new Documento(idOwner, idCreator, link, Status.Ativo);
                manager.addDocument(document, cpf);

                System.out.println("Deseja arquivar o Documento?" +
                        "\n 1 - Sim" +
                        "\n 2 - Não"

                );
                choosen2 = scannerInt.nextInt();
                switch (choosen2) {
                    case 1:
                        Gerente.archiveManagerDoc(document);
                        manager.removeDocument(document);
                        System.out.println("documento arquivado!");
                        try {
                            do {
                                manager.listDocuments();
                                System.out.println("Digite o id do documento para arquivar ou 1 - Sair");
                                choosen = scannerInt.nextInt();
                                switch (choosen) {
                                    case 1:
                                        break;
                                    default:
                                        Documento documentById = Gerente.returnManagerDocumentById(choosen);
                                        Supervisor supervisor1 = new Supervisor();
                                        supervisor1.removeDocument(documentById);
                                        manager.addDocument(documentById, cpf);
                                        break;
                                }
                            } while (choosen != 1);
                        } catch (NullPointerException exception) {
                            System.out.println("Id inválido");

                        }
                        ;
                        break;
                    case 2:
                        manager.listDocuments();
                        break;
                }
        }
    }
    public void verificationUserRegistry(Integer choosen, String cpf) {
        Scanner scannerInt = new Scanner(System.in);
        switch (choosen) {
            case 1:
                if (Funcionario.verifyIfEmployeeIsRegistered(cpf)) {
                    System.out.println("Usuário Logado");
                } else {
                    System.out.println("cpf inválido. Deseja:" +
                            "\n 1 - Cadastrar novo usuário" +
                            "\n 2 - Tentar novamente"
                    );
                    int choosen2 = scannerInt.nextInt();
                    switch (choosen2) {
                        case 1:
                            userRegister();
                            break;
                        case 2:
                            Login();
                            break;
                    }
                }
                break;
            case 2:
                if (Supervisor.verifyIfEmployeeIsRegistered(cpf)) {
                    System.out.println("Usuário Logado");
                } else {
                    System.out.println("cpf inválido. Deseja:" +
                            "\n 1 - Cadastrar novo usuário" +
                            "\n 2 - Tentar novamente"
                    );
                    int choosen2 = scannerInt.nextInt();
                    switch (choosen2) {
                        case 1:
                            userRegister();
                            break;
                        case 2:
                            Login();
                            break;
                    }
                }
                break;
            case 3:
                if (Gerente.verifyIfEmployeeIsRegistered(cpf)) {
                    System.out.println("Usuário Logado");
                } else {
                    System.out.println("cpf inválido. Deseja:" +
                            "\n 1 - Cadastrar novo usuário" +
                            "\n 2 - Tentar novamente"
                    );
                    int choosen2 = scannerInt.nextInt();
                    switch (choosen2) {
                        case 1:
                            userRegister();
                            break;
                        case 2:
                            Login();
                            break;
                    }
                }
                break;
        }
    }
}


