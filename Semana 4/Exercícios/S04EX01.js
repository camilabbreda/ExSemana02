// Em um arquivo javascript crie 3 variáveis, cada uma delas com a seguinte instrução:
// 1- exampleLet - sendo uma variável não constante e de escopo local do tipo numérico com a sua idade como valor.
// 2- exampleConst - sendo uma variável constante e de escopo local do tipo string com o seu nome como valor.
// 3- exampleVar - sendo uma variável não constante e de escopo global do tipo string com a concatenação da seguinte 
// frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos”.

//===================== ExampleLet============================
function exampleLet (){
     let idade = 32;
     return idade;
    }
    console.log (`A idade da Camila é ${exampleLet()} anos.`);

//==================== ExampleConst===========================
function exampleConst (){
    const nome = "Camila Borba Breda";
    return nome;
}
console.log (`O nome da Aluna é ${exampleConst()}.`)

//====================ExampleVar==============================
function exampleVar(){
    var sentenca = `Olá meu nome é ${exampleConst()} e tenho ${exampleLet()} anos.`;
    return sentenca;
}
console.log(exampleVar());