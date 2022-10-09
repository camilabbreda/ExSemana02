
var nome = 0; var lista = []; var soma =0; var lista1= []; var media = 0;var lista3 = [];
cont=0
for (i=0; i<=4; i++){
        var nome = window.prompt ("Aluno:");
        lista1.push (nome);
        index = 0;
        soma = 0;
        lista = [];
        for (let index = 0; index <= 3; index++) {
        var nota = parseFloat(window.prompt("nota "+ (index+1) + ":"));
        lista.push (nota);
        soma = soma + lista[index];
        console.log (lista);
        console.log (soma);
        }
        media = soma/4
        lista3.push (media);
        console.log (lista1[i], lista3[i]);
          
        if(media<7){
            document.write ("O(a) "+ lista1[i] +" tirou a média " + lista3[i] + " e está Reprovado(a)!" + "<br/>");
        }
        else if (media >=7){
            document.write ("O(a) "+ lista1[i] +" tirou a média " + lista3[i] + " e está Aprovado(a)!"+ "<br/>");
        }
    }




