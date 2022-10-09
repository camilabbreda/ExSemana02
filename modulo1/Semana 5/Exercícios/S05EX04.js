// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos
const retornaApenasNumerosPositivos = ((array=[])=> {
    numerosPositivos = [];
    for (const item of array) {
        if(item>0){
            numerosPositivos.push (item)
        } 
    }
    console.log(numerosPositivos)
})

retornaApenasNumerosPositivos([-1,0-2,-8,3,7,-20])