// Crie uma arrow function que recebe um array de números e calcula a média deles
//================================================1===============================================
const mediaDosElementosDoArray = (array) =>{
const valorInicial = 0
let soma = array.reduce((valorAnterior, valorAtual)=> valorAnterior+valorAtual,valorInicial);
return soma/array.length;};

console.log(mediaDosElementosDoArray([1,2,3,4,5]));

