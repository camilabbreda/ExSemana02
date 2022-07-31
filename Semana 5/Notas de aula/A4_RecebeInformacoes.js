// var fotinho = <a href = "imagem.value" >Images</a>

// var imagem = document.getElementById("capturaImagem");
var botao = document.getElementById("enviarInformacoes");
function recebeImagem(){
    botao.addEventListener("click", function(){
    const imagem = document.getElementById("capturaImagem")
    return imagem.value
})}

function recebeNome(){
    botao.addEventListener("click", function(){
    const nome = document.getElementById("capturaNome");
    return nome.value
})}


function recebeDescricao(){
botao.addEventListener("click", function(){
    const descricao = document.getElementById("capturaDescricao");
    return descricao.value
})}
export{
    recebeImagem,
    recebeNome,
    recebeDescricao
}

    

// function appendTheFile (addEventListener()){
// let img = document.createElement('img')
// img.src = url.toString() 
// document.getElementById('container').appendChild(img)
// }


// document.getElementById("imagem").setAttribute("src", imagem)

// function appendTheFile (url) {     
//     url = new URL(url)     
//     se for uma imagem, adicionamos uma imagem     
//     if (url.pathname.match(/\.(jpe?g|png|svg|webp|gif)/)) 
//     {       let img = document.createElement('img') 
//               img.src = url.toString()       
//               document.getElementById('container').appendChild(img)
//             }

// )
// var input = document.createTextNode(nome.value);
// criaElemento.appendChild(input);
// var descreve = document.createTextNode(descricao.value);
// criaElemento.appendChild(descreve);
// const botao1 = document.getElementById("btn1");

// botao1.addEventListener ("click", function(){
//     const input = document.getElementById ("captura");
//     const linha = document.createElement("div");
//     var item = document.createTextNode(input.value);
//     linha.appendChild (item);
//     body.appendChild (linha);
// }
