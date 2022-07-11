var peso = parseFloat (window.prompt ("Digite seu Peso:"));
var alt = parseFloat (window.prompt ("Digite sua Altura em centímetros:"));

imc = peso / ((alt/100)**2);

console.log (imc);

if(imc>=25) {

    window.alert ("Seu IMC é " + imc + ", você está acima do peso, procure um médico.");
}
 
else if(imc > 18.5 && imc < 24.9) {

    document.write ("Seu IMC é " + imc + ". PARABÉNS!! Você está no peso ideal!");
}


else if (imc <= 18.5) {
    document.write6 ("Seu IMC é " + imc + ". Você está abaixo do peso, procure um médico.");
}