const recebeElementos=()=>{
const imagem = document.getElementById("capturaImagem")
const nome = document.getElementById("capturaNome");
const descricao = document.getElementById("capturaDescricao");
return{
   imagem, nome, descricao
}
}

export{recebeElementos}