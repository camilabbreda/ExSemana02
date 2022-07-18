// Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
// 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).

var paragrafo1 = document.createElement ("div");
var texto1 = document.createTextNode ("Azul como o Céu");
paragrafo1.appendChild(texto1);
var body = document.querySelector("body");
body.appendChild(paragrafo1);


var paragrafo2 = document.createElement ("div");
var texto2 = document.createTextNode ("Verde como as Árvores");
paragrafo2.appendChild(texto2);
var body = document.querySelector("body");
body.appendChild(paragrafo2);

var paragrafo3 = document.createElement ("div");
var texto3 = document.createTextNode ("Amarelo como o Sol");
paragrafo3.appendChild(texto3);
var body = document.querySelector("body");
body.appendChild(paragrafo3);

var paragrafo4 = document.createElement ("div");
var texto4 = document.createTextNode ("Encantado como as Flores");
paragrafo4.appendChild(texto4);
var body = document.querySelector("body");
body.appendChild(paragrafo4);

var paragrafo5 = document.createElement ("div");
var texto5 = document.createTextNode ("de um Novo dia que Nasce!");
paragrafo5.appendChild(texto5);
var body = document.querySelector("body");
body.appendChild(paragrafo5);







// Tentativa 1
// const primeiro = document.getElementById ("Paragrafo1")
// primeiro.innerHTML = " Azul como o Céu ";
// const segundo = document.getElementById ("Paragrafo2")
// segundo.innerHTML = " Verde como as Árvores ";
// const terceiro = document.getElementById ("Paragrafo3")
// terceiro.innerHTML = "Amarelo como o Sol";
// const quarto = document.getElementById ("Paragrafo4")
// quarto.innerHTML = "Encantado como as Flores";
// const quinto = document.getElementById ("Paragrafo5")
// quinto.innerHTML = "de um Novo dia que Nasce!";
    