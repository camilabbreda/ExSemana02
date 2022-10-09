var eParOuImpar = function (valor){
    if (valor%2==0){
        console.log  ("o número " + valor + " é par.");
    }
    else if (valor%2==1){
        console.log  ("o número " + valor + " é ímpar.");
    }
    else {
        console.log  ("Valor indefinido.");
    }
}
eParOuImpar (200);