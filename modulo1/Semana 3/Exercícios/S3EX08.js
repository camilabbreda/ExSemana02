// Crie um site com os seguintes requisitos:

// - um campo de texto (input) onde o usuário irá digitar uma mensagem

// - três botões:
//   - um botão “adicionar”, que no momento do clique insira a mensagem na tela

//   - um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
// opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

//   - um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela
// opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”

// Function para imprimir mensagem




const botao1 = document.getElementById("btn1");

botao1.addEventListener ("click", function(){
    const input = document.getElementById ("captura");
    const body = document.querySelector ("body");
    const linha = document.createElement("div");
    var item = document.createTextNode(input.value);
    linha.appendChild (item);
    body.appendChild (linha);
}
)

const botao2 = document.getElementById("btn2");
botao2.addEventListener("click", function(){
    const input = document.getElementById("captura");
    localStorage.setItem("id", JSON.stringify(input.value));
}
)

const botao3 = document.getElementById("btn3");
botao3.addEventListener("click", function(){
    const input = document.getElementById("captura");
    const body = document.querySelector("body");
    const linha = document.createElement ("div")
    var nome = localStorage.getItem("id")
    body.appendChild (linha);
    linha.innerHTML = JSON.parse(nome);
}
)