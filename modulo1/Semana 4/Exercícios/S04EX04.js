// Construa um código javascript que irá remover de 
// um array um item que irá ser passado no parâmetro 
// desse método. O fluxo consiste em capturar em um 
// input html um item do array e ao apertar em um botão 
// fazer com que esse item seja excluído 
// (utilize o addEventListener de click). Pode conferir 
// no console.log() como está o array após a exclusão.

var lista = [];

const botaoAdicionar = document.getElementById("adiciona")
botaoAdicionar.addEventListener ("click", function (){
    let input = document.getElementById("captura");
    lista.push (input.value);
    let alunos = document.getElementById("listaDeAlunos");
    alunos.innerHTML = lista;
}
)


const botaoRemover = document.getElementById("remove")
botaoRemover.addEventListener ("click", function(){
    let input = document.getElementById("captura");
    let posicao = lista.indexOf (input.value);
    listaFiltrada = lista.filter ((aluno)=> aluno!=lista[posicao]);
    lista=listaFiltrada;
    let alunos = document.getElementById("listaDeAlunos");
    alunos.innerHTML = lista;
}
)









