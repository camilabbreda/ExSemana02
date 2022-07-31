// Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena
const informaQuinzena = dia => (1<=dia && 31>=dia) ?((dia <= 15 ) ? "Este dia pertence à primeira quinzena":"Este dia pertence à segunda quinzena"):"Valor inválido";

console.log (informaQuinzena(12))
console.log (informaQuinzena(23))
console.log (informaQuinzena(32))