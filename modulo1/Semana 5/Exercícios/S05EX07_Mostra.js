import {recebeElementos} from "./S05EX07_Recebe.js"
var botao = document.getElementById("enviarInformacoes");
const form = document.querySelector('form');
botao.addEventListener("click", function(){
    event.preventDefault();
    const div2 = document.getElementById("div2")
    div2.setAttribute("Style","background-color:rgb(90, 146, 153);left-border:300px; margin-top:35px; text-align: center;margin-left:200px; padding:15px")
    div2.innerHTML += `<img src= ${recebeElementos().imagem.value} style= "width: 300px  ">`
    div2.innerHTML += "</br>";
    div2.innerHTML += `<h2 style = " color:rgb(248,248,248); text-align: center;"> ${recebeElementos().nome.value} </h2>`
    div2.innerHTML += "</br>";
    div2.innerHTML += `<h3 style = " color:rgb(248,248,248); text-align: center;"> ${recebeElementos().descricao.value}</h3>`
    form.reset()

})
mostrarInformacoesRecebidas()