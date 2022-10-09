var inv = 0; var par = 0;var impar = 0;
function contarValoresPares(lista){
   
    for (let i = 0; i <= lista.length; i++) {
        if (lista[i]%2 == 0){
            par++;
        }
        else{
            inv++; 
        }
    }
    return par
}
function contarValoresImpares(lista){
    
    for (let i = 0; i <= lista.length; i++) {
        if (lista [i]%2==1) {
            impar++;
        }
        else{
            inv++; 
        }
    }
    return impar
}
function retornaQtdValoresParesEImpares(lista= []){
    contarValoresPares(lista)
    contarValoresImpares(lista)
    return console.log ("A quantidade informada foi "+ lista.length +", a de valores pares foi "+par+", e a de valores ímpares foi "+impar+".");
}
retornaQtdValoresParesEImpares ([1,2,3,6,5,7,4]);





// function contarValoresPares(lista = []){
//     var par = 0; var impar = 0; var inv = 0;
//     for (let i = 0; i <= lista.length; i++) {
//         if (lista[i]%2 == 0){
//             par++;
//         }
//         else if (lista [i]%2==1) {
//             impar++;
//         }
//         else{
//             inv++; 
//         }    
//     }
//     console.log ("A quantidade informada foi "+ lista.length +", a de valores pares foi "+par+", e a de valores ímpares foi "+impar+".");
// }
// contarValoresPares ([2,3,6]);