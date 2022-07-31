// Crie 2 funções, ambas recebem um número e retorna true ou false:
// - a primeira verifica se é par;
// - a segunda verifica se é ímpar.

// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.


// =========================================1============================================
function ePar (numero){if(numero%2==0){return true}}

function eImpar(numero){if (numero%2==1){return true}}




function arrayFiltrado (array=[],funcao){
    var arrayFiltrado = array.filter(funcao)
    console.log(arrayFiltrado)
}

arrayFiltrado([1,2,6,5,4,9,10],ePar)
arrayFiltrado([1,2,6,5,4,9,10],eImpar)


// =========================================2============================================

function verificarSeEhPar(numero){if(numero%2== 0){return true};}
function verificarSeEhImpar (numero){if (numero%2 == 1){return true}}

function criaNovoArrayParOuImpar (array=[], funcao){
    let novoArray=[];
    for (const item of array) { 
        if (funcao(item) == true){
            novoArray.push(item);   
        }}
    console.log(novoArray)
    }


criaNovoArrayParOuImpar([1,2,3,4,5],verificarSeEhImpar)
criaNovoArrayParOuImpar([1,2,3,4,5],verificarSeEhPar)