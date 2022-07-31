// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda
    
    const ImprimeTabuada = imprimir =>{console.log(imprimir)};

const montaTabuadaEImprime = (numero,funcao) => {
    const multiplicadores = [0,1,2,3,4,5,6,7,8,9,10];
    const tabuada = multiplicadores.map((multiplicador) => multiplicador*numero);
    funcao(tabuada);
}

montaTabuadaEImprime(2,ImprimeTabuada)