import {recebeImagem, recebeNome, recebeDescricao} from "./A4_RecebeInformacoes.js"

function mostrarInformacoesRecebidas(){

    const div2 = document.getElementById("div2")
    div2.innerHTML += `<img src= ${recebeImagem()}>`
    div2.innerHTML += "</br>";
    div2.innerHTML += recebeNome();
    div2.innerHTML += "</br>";
    div2.innerHTML += recebeDescricao();
  
    
}
mostrarInformacoesRecebidas()

