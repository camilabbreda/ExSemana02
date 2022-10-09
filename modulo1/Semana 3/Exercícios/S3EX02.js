function imprimeItemLista (lista){
    for (var item of lista){
        console.log (item);
    }
}
function imprimeTamanhoDaLista (lista){
     return console.log ("O tamanho da lista é de "+ lista.length + " itens.");
}

function descreveLista (lista=[]){
    imprimeItemLista(lista)
    imprimeTamanhoDaLista (lista)
}

descreveLista (['oi', 'turu', 'bom']);