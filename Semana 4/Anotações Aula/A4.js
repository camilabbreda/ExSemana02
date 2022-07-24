// // // EXERCICIO SLIDE 7
// let array = [
//     {
//       nome: "Rayane",
//       sobrenome: "Cristina",
//       idade: 21
//     },
//     {
//       nome: "Carlos",
//       sobrenome: "Henrique",
//       idade: 17
//     },
//     {
//       nome: "Julio",
//       sobrenome: "Cesar",
//       idade: 19
//     },
//     {
//       nome: "Camila",
//       sobrenome: "Fernandes",
//       idade: 18
//     },
//     {
//         nome: "Julia",
//         sobrenome: "Fernandes",
//         idade: 10
//       },
//       {
//         nome: "Bruno",
//         sobrenome: "Albuquerque",
//         idade: 31
//       },
//       {
//         nome: "Túlio",
//         sobrenome: "Bastos",
//         idade: 22
//       },
//       {
//         nome: "Cristiane",
//         sobrenome: "Maria",
//         idade: 41
//       },
//     ]

//     let maiorDeIdade = array.filter(function(item){ 
//         return item.idade >= 18
//     }
//     )
//     // console.log(maiorDeIdade);

// // EXERCICIO SLIDE 09

// const maiorQueTrinta = maiorDeIdade.find ((pessoa)=> pessoa.idade >=30 );

// console.log("<h1>" + maiorQueTrinta.nome + " " + maiorQueTrinta.sobrenome + "</h1>");
// // ^Deveria ser document.write


//EXERCÍCIO SLIDE 17 - REDUCE AEROFUNCTION

const array = [1, 22, 31, 40, 3, 5];
const valorInicial = 0;
const maiorValor = array.reduce(
  (valorAnterior, valorAtual) => {
    if (valorAtual>valorAnterior){
      valorAnterior=valorAtual
      
    }
    return valorAnterior
  },  
    valorInicial
    );
console.log (maiorValor)

// FEITO EM GRUPO
// const array = [1, 22, 31, 40, 3, 5];
// const valorInicial = 0;
// const maiorValor = array.reduce(
//   function (valorAnterior, valorAtual){
//     debugger;
//     if (valorAtual>valorAnterior){
//         valorAnterior = valorAtual
//     }
//     debugger;
//   return valorAnterior;
//   },
// valorInicial
// );

// console.log(maiorValor);