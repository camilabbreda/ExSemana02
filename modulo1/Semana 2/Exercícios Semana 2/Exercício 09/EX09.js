var horti=0; var lati = 0; var carne =0; var peixe = 0; var aves = 0; var opcao = 0;
var lista = [
    {
        produto:"Hortifruti",
        qtd:0
    },
    {
        produto: "Laticínios",
        qtd:0 
    },
    {
        produto:"Carnes",
        qtd: 0
    },
    {
        produto: "Peixes",
        qtd: 0
    },
    {
        produto: "Aves",
        qtd: 0
    }
    ]

while (opcao !=6) {
    
    var opcao = parseFloat ( window.prompt("Qual produto o cliente deseja comprar? (1) Hortifruti, (2) Laticínios, (3) Carnes, (4) Peixes, (5) Aves, (6) Fechar pedido"));
    
    if (opcao < 6 && opcao >=1){
        for (let index = 1; index <= lista.length; index++) {
            if (index == opcao) {
                let qtd = parseFloat( window.prompt ("Quantas unidades?"));
                lista[index - 1].qtd = qtd + lista[index - 1].qtd;
            }
            
        }
    } 
    }
    if (opcao == 6){
       const listaordenada = (lista.sort((firstposition, secondposition)=> secondposition.qtd - firstposition.qtd));
        document.write (listaordenada[0].produto +" "+ listaordenada[0].qtd + " unidades.");
    console.log (lista);
    }