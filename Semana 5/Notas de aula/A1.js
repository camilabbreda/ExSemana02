// =======================ENCONTRAR A MAIOR STRING====================================

// const estados = ['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa Catarina', 'Rio Grande do Norte', 'Sergipe']
// function maiorStringDoArray (array = []){
//     var longest = array.reduce(
//     function (a, b) {
//         return a.length > b.length ? a : b;
//     }
//     );
//     return longest
//     }

// console.log(maiorStringDoArray(estados))



// var longest = estados.reduce(
//     function (a, b) {
//         return a.length > b.length ? a : b;
//     }
// );
// console.log(longest)

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
//   }
//   reverseString('hello');


// ===============FUNÇÃO CALLBACK==========================

// function voceClicou() {
//     alert('A curiosidade matou o gato');
//   }
  
//   const botao1 = document.getElementById('botao');
//   botao1.addEventListener('click', voceClicou);

// =====================FUNCAO CALL BACK PAR OU IMPAR==================



function ePar (numero){
    if(numero%2==0){
        let par = true
        return par
    }
 
}

function eImpar(numero){
    if (numero%2==1){
        let impar = true
        return impar
    }
}


function arrayFiltrado (array=[],funcao){
    var arrayFiltrado = array.filter(funcao)
    console.log(arrayFiltrado)
}

arrayFiltrado([1,2,6,5,4,9,10],ePar)
arrayFiltrado([1,2,6,5,4,9,10],eImpar)



// function arraysFiltradoParEImpar (array=[],funcaopar, funcaoimpar){
//     array.forEach(element => {
//         if(funcaopar(element) == true){
//          arrayPares.push (element)
//         }
//         else if(funcaoimpar(element) == true){
//            arrayImpares.push (element)
//         }
//     });
//     console.log(arrayPares)
//     console.log(arrayImpares)
// }
