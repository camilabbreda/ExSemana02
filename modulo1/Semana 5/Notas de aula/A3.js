// =================================EXERCICIO 01============================================
// const informaQuinzena = numero => numero<=15 ? "Pertence à primeira quinzena":"Não pertence à primeira quinzena "

// console.log (informaQuinzena(2));
// console.log (informaQuinzena(16));

// =================================EXERCÍCIO 2 ============================================

// let maiorNumero = (array) => Math.max(...array);

// console.log(maiorNumero([1,2,5,10,20,10,4]));

// ================================================

// let numeros = [-1,-78,-4,-5,-6,-7,-9];

// const maiorValor = (numeros=[]) => numeros.reduce((maior,menor) => {return maior > menor ? maior : menor});

// console.log(maiorValor(numeros))

// ==================================================
// var array = [-10, -20, -30, -120, -1000];

// const localizarMaior = (array=[]) => {
//     var maior = array[0];
//     array.forEach(item => {
//         if (item > maior) {
//             maior = item;
//         }
//     });
//     return maior;
// }

// console.log(`O maior valor é ${localizarMaior(array)}`);

// ===================================EXERCICIO 3=============================================

// const ordenaArray = (array)=>{
//     return array.sort ((a,b) => a-b)
// }
// console.log (ordenaArray([5,1,2,4,7,8,6]))

// ===================================EXERCICIO 4=============================================

// const calcularRaizQuadrada = numero => {
//     if(numero<0){
//         return "Não é um número válido";
//     }
//     else{
//     let raiz = Math.sqrt(numero);
//     return Math.trunc(raiz);
//     }
// }

// console.log(calcularRaizQuadrada(9))
// console.log(calcularRaizQuadrada(-2))

// ===================================EXERCICIO 5=============================================

// const devolveObjeto = (palavra) => {
//     const objeto = {
//         numeroDeCaracteres: palavra.length,
//         primeiraLetra: palavra[0],
//         ultimaLetra: palavra[palavra.length - 1],
    
//     }
//     return `O tamanho do nome é ${objeto.numeroDeCaracteres}, A primeira letra é ${objeto.primeiraLetra} e a última letra é ${objeto.ultimaLetra}`;
// }


// console.log(devolveObjeto("FRANCISCO"));