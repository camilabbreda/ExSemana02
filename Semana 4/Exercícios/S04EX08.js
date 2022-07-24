// Crie uma classe chamada Serie com os seguintes 
// atributos: nome, anoLancamento, qttTemporada.

// Construa o construtor dessa classe com todos os atributos.
// Após isso, com um laço de repetição a sua escolha, instancie 
// a classe 4 vezes com os dados sendo capturados por um prompt 
// e depois adicione a classe a um array chamado series.
// Após isso imprima no documento (usando o innerHTML) a série 
// mais antiga (ou seja, a que possui o menor anoLancamento).
// Para percorrer o array com as 4 classes utilize o forEach.

class Serie {
    nome;
    anoLancamento;
    qttTemporada;

    constructor(nome, anoLancamento, qttTemporada){
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.qttTemporada = qttTemporada;
    }
}

let anoMaisAntiga, nomeAntigo;
for (let i = 0; i <= 3; i++) {
    let nome = prompt("Digite o nome da série:");
    let anoLancamento = parseInt(prompt("Digite o ano de lançamento da série:"));
    let qttTemporada = parseInt(prompt("Digite a quantidade de temporadas da série:"));
    
    const serie = new Serie(nome, anoLancamento, qttTemporada);
    if (i == 0) {
      anoMaisAntiga = serie.anoLancamento;
      nomeAntigo = serie.nome;
    } else {
      if (serie.anoLancamento < anoMaisAntiga) {
        anoMaisAntiga = serie.anoLancamento;
        nomeAntigo = serie.nome;
      }
    }
  }
  
  let tagH1 = document.getElementById("h1");
  tagH1.innerHTML += nomeAntigo;