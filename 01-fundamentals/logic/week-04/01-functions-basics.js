/*
===========================================================================================
   FUNÇÕES — CONCEITOS BÁSICOS
===========================================================================================

Funções permitem agrupar blocos de código reutilizáveis.
Elas ajudam a organizar a lógica, evitar repetição e melhorar a legibilidade.

Uma função é definida uma vez e pode ser executada diversas vezes.
*/

//=========================================================================================
// 01- Declaração de Função
//=========================================================================================

// Estrutura básica:
// function nomeDaFuncao() {
//      código a ser executado
// }

function greet() {
    console.log("Hello!");
}

greet(); // chamada da função

//=========================================================================================
// 02- Função com Lógica Interna
//=========================================================================================

function showMessage () {
    let message = "Welcome to week 04";
    console.log(message);
}

showMessage();

//=========================================================================================
// 03- Reutilização
//=========================================================================================
// Funções evitam repetição de código

function printSeparator() {
    console.log("--------------------");
}

printSeparator();
printSeparator();
printSeparator();

//=========================================================================================
// 04- Fluxo de Execução
//=========================================================================================
// Uma função só é executada quando é chamada

function sayGoodbye() {
    console.log("Goodbye!");
}

console.log("Before function call");
sayGoodbye();
console.log("After function call");

//=========================================================================================
// 05- Declaração vs Expressão de Função
//=========================================================================================

// Function Declaration
function multiply() {
    console.log("Multiplication function");
}

// Function Expression 
const divide = function () {
    console.log("Division function");
};

multiply();
divide();

//=========================================================================================
// 06- Boas práticas de Nomeação
//=========================================================================================
// - Utilizar nomes descritivos
// - Utilizar camelCase
// - Preferir verbos para indicar ação

function calculateTotal() {
    console.log("Calculating total...");
}

calculateTotal();

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Funções organizam a lógica
// - Evitam repetição
// - Melhoram legibilidade
// - Devem ter nomes claros e objetivos
// - Só executam quando chamadas