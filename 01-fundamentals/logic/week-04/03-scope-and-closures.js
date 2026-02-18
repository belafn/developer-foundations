/*
===========================================================================================
   ESCOPO E CLOSURES
===========================================================================================

Escopo define onde uma variável pode ser acessada.
Compreender escopo evita conflitos, bugs e comportamentos inesperados.

JavaScript possui:
- Escopo global
- Escopo de função
- Escopo de bloco

Closures permitem que uma função acesse variáveis do seu escopo externo,
mesmo após a execução da função externa.
*/

//=========================================================================================
// 01- Escopo Global
//=========================================================================================
// Variáveis globais podem ser acessadas em qualquer parte do código.

let globalMessage = "I am global";

function showGlobalMessage() {
    console.log(globalMessage);
}

showGlobalMessage();

//=========================================================================================
// 02- Escopo de função
//=========================================================================================
// Variáveis declaradas dentro de uma função só existem dentro dela.

function showLocalMessage() {
    let localMessage = "I am local";
    console.log(localMessage);
}

showLocalMessage();

// console.log(localMessage); // Error: not defined

//=========================================================================================
// 03- Escopo de bloco (let e const)
//=========================================================================================
// Vriáveis declaradas com let e const respeitam escopo de bloco.

if (true) {
    let blockVariable = "I exist inside this block";
    console.log(blockVariable);
}

// console.log(blockVariable); // Error: not defined

//=========================================================================================
// 04- Shadowing
//=========================================================================================
// Uma variável interna pode ter o mesmo nome de uma externa.
// A variável interna "sombreia" a externa dentro do seu escopo.

let count = 10;

function showCount() {
    let count = 5;
    console.log(count); // 5
}

showCount();
console.log(count); // 10

//=========================================================================================
// 05- Introdução a closure
//=========================================================================================
// Closure ocorre quando uma função interna mantém 
// acesso às variáveis da função externa.

function outerFunction() {
    let outerVariable = "I am from outer scope";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let closureExample = outerFunction();
closureExample();

//=========================================================================================
// 06- Por que closure é importante?
//=========================================================================================
// Closures permitem:
// - Encapsulamento
// - Criação de funções privadas
// - Preservação de estado entre execuções

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Escopo controla visibilidade de variáveis
// - let e const respeitam escopo de bloco
// - Variáveis internas não são acessíveis externamente
// - Closures mantêm acesso ao escopo externo

