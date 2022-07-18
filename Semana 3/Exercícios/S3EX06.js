// Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
// um campo de input do item um botão para criar um item na lista

// =================Com função Apenas========================

// function adicionarNaLista (){
//     const input = document.getElementById("elementoDaLista")
//     var paragrafo = document.createElement ("li");
//     var texto = document.createTextNode ( input.value);
//     paragrafo.appendChild(texto);
//     var body = document.querySelector ('body');  
//     body.appendChild(paragrafo);

// }

// ============Com GetElementListener=================

const botao = document.getElementById ("adicionar");

botao.addEventListener ("click", function() {
    const input = document.getElementById("elementoDaLista")
    var paragrafo = document.createElement ("li");
    var body = document.querySelector ('body');  
    var texto = document.createTextNode ( input.value);
    paragrafo.appendChild(texto);
    body.appendChild(paragrafo);
})
