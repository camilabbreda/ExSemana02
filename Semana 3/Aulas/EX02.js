// 2 - Crie uma função nomeada que 
// recebe um array de elementos, 
// imprima cada um dos elementos e 
// em seguida retorne a quantidade 
// de elementos no array (seu tamanho).

function imprimeElementosDaLista (lista = []){
    
    for (let item of lista){
         console.log (item);
    }
    let quantidade = "A quantidade de elementos da lista são " + lista.length;
    return quantidade

}
console.log (imprimeElementosDaLista(["oi", "turu", "bom"]));