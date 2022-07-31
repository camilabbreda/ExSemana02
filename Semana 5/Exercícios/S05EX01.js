//Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

//Criando o botão
const body = document.querySelector("body");
body.innerHTML = "<button id="+"botao1"+">Não Clique Aqui</button>";

//Acessando o botão
const botao = document.getElementById("botao1");

//Criando função Alerta

function exibeAlerta(){
    return alert("Nãããããããããããoooooooo!!!!");
}

//Criando função evento de click que chama função exibeAlerta como callback

botao.addEventListener("click",function(){
    exibeAlerta()
})

