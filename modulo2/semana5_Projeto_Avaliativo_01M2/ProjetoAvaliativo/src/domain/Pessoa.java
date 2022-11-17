package domain;

import java.time.LocalDate;

public class Pessoa {

    private Integer id;
    private String name;

    private String lastName;
    private String birthDate;
    private String cpf;
    private String address;

    public Pessoa(Integer id,String name, String lastName, String birthDate,String cpf, String address) {
            this.id = id;
            this.name = name;
            this.lastName = lastName;
            this.birthDate = birthDate;
            this.cpf = cpf;
            this.address = address;

    }

    public  Pessoa(){}

    public Boolean VerifyCpf (String cpf){

        return cpf.length() == 14;

    }



    public Integer getId(){
        return id;
    }

    public String getName() {
        return name;
    }


    public String getLastName() {
        return lastName;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public String getCpf() {
        return cpf;
    }

    public String getAddress() {
        return address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
