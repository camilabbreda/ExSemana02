// Substitua as repetições do exercício anterior por uma função.

function inserirParagrafo(texto=[]){

    var body = document.querySelector("body");

    for (let i = 0; i < texto.length; i++) {
        var paragrafo = document.createElement ("div");
        var textoDoParagrafo = document.createTextNode (texto[i]);
        paragrafo.appendChild(textoDoParagrafo);
        body.appendChild(paragrafo);

        paragrafo.style.margin = '20px';
        paragrafo.style.backgroundColor = '#9999FF';
        paragrafo.style.padding ='30px'

    }
    body.style.color = 'blue';
    body.style.display = 'flex';
    body.style.flexDirection = 'row';
}

inserirParagrafo([" Joana ", " Maria", "Rafaela", "Lara", "Camila", "Elis", "Janice"]);