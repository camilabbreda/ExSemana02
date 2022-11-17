package domain;
public abstract class  Colaborador extends Pessoa{
        String role;

        public Colaborador(Integer id, String name, String lastName, String birthDate, String cpf, String address) {
                super(id, name, lastName, birthDate, cpf, address);
        }
        public Colaborador() {
        }
        public void listDocuments(){
        }
        public void removeDocument(Documento documento) {
                System.out.println(documento);
        }
        public void addDocument(Documento document, String cpf){
                System.out.println(document + cpf);
        };
}
