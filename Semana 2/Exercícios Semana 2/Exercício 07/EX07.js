
var cont = 0; var ruim = 0; var bom = 0; var excelente = 0;


while(cont<=4) {

avaliacao = window.prompt ("Como você avalia Stranger Things (excelente, bom ou ruim):");

switch (avaliacao) {
    case 'ruim':
        ruim++;
    break;
    case 'bom':
        bom++;
    break;
    case 'excelente':
        excelente++;
    break;

}
cont++
}

document.write ("<h3> Excelente:" + excelente);
document.write ("<h3> Bom:" + bom);
document.write ("<h3> Ruim:" + ruim);