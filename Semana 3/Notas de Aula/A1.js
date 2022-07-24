// const soma(1,2); 
// function soma (a,b){
//     console.log (a+b);
// }

var informarParImpar = function (num1){
    var resultado;
    if(num1 % 2 == 0){
        resultado = 'Par'
    } else if(num1 %2 == 1){
        resultado = 'Ímpar'
    } else{ resultado = "inválido"}

    return resultado
}

console.log(informarParImpar(2));