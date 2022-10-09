// Crie um código javascript para verificar se todos os alunos do array de 
// objetos arrayAlunos abaixo estão acima da média que será 7.
// Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", 
// porem se não for imprima em uma lista html 
// todos os alunos que ficaram na "recuperação".

let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
]
var listaDeNotas = [];var listaDeNomes = []; var reprovados=[]; var reprovado = 0;
arrayAlunos.forEach(function (aluno) {
    listaDeNotas.push (aluno.media);
    listaDeNomes.push (aluno.nome);
    })
listaDeNotas.forEach(function (nota, i){
    if (nota<7){
        reprovados.push(listaDeNomes[i]);
        reprovado++ ;
        }
    }
    )
var resultado = document.getElementById("resultado");
if (reprovado!=0){
resultado.innerHTML = "Reprovados: "+ reprovados;
}
else{
    resultado.innerHTML= "Parabéns a todos da turma!";
}
