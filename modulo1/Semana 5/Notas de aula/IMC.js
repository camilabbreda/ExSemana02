function calculaImc (pesoUsuario,alturaUsuario){
    let calculo = pesoUsuario/(alturaUsuario*alturaUsuario);
    return calculo
}
const imc = calculaImc(71,1.60);

function escreveImc(imc){
   document.write ("<h3>" + imc + "</h3>");
   
}

function verificaImc(imc){
    if(imc>=25){
        return alert("Você está acima do pedo, procure um médico");
    }
    else if (imc>=18.5 && imc<25){
       return document.write("<h3>PARABÉNS!! Você está no peso ideal! </h3>")
    }
}

escreveImc(imc)
verificaImc(imc)
