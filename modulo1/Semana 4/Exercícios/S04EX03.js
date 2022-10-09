// Crie uma classe chamada Pessoa com os atributos nome, idade, cpf e anoAniversario. 
// Agora construa um método chamado podeDirigir dentro dessa classe para verificar 
// se a idade é maior ou menor que 18, se for maior ou igual a 18 o retorno desse 
// método será true se não false. Agora, fora dessa classe crie uma instância (usando o new ) 
// inicialize ela (usando o acesso a um atributo " . ") para uma variável const e 
// verifique o retorno com os seus dados em seus atributos.

class Pessoa {
    nome;
    idade;
    cpf;
    anoAniversario;

    podeDirigir(){
            
        if (this.idade>= 18){
          return  true;
        }
        else{
          return false;
        }
       
    }
}

const essaPessoaPodeDirigir = new Pessoa ()
essaPessoaPodeDirigir.nome = "Camila";
essaPessoaPodeDirigir.idade = 32;
essaPessoaPodeDirigir.cpf = "1234567890";
essaPessoaPodeDirigir.anoAniversario = 1990;



console.log(essaPessoaPodeDirigir)
console.log(essaPessoaPodeDirigir.podeDirigir())