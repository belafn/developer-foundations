/*
===========================================================================================
   CONDITIONALS — IF / ELSE
===========================================================================================
*/
// Estruturas condicionais permitem que o código execute
// diferentes blocos de acordo com uma condição.
//
// As decisões são baseadas em valores booleanos (true / false),
// normalmente vindos de comparações ou operadores lógicos.
//=========================================================================================
// 01- Estrutura básica do if
//=========================================================================================
// O bloco if executa o código apenas se a condição for verdadeira.

let age = 18;

if (age >= 18) {
  console.log("Access allowed");
}

//=========================================================================================
// 02- Estrutura if / else
//=========================================================================================
// O else define o que deve acontecer quando a condição é falsa.

let userAge = 16;

if (userAge >= 18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

//=========================================================================================
// 03- Comparações dentro de condicionais
//=========================================================================================
// Condições normalmente utilizam operadores de comparação.

let temperature = 30;

if (temperature > 25) {
  console.log("Hot weather");
} else {
  console.log("Mild weather");
}

//=========================================================================================
// 04- Operadores lógicos em condicionais
//=========================================================================================
// Operadores lógicos permitem combinar mais de uma condição.

let hasTicket = true;
let isAdult = true;

if (hasTicket && isAdult) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}

//=========================================================================================
// 05- else if (múltiplas condições)
//=========================================================================================
// Utilizado quando existem mais de dois cenários possíveis.

let score = 7;

if (score >= 9) {
  console.log("Excellent");
} else if (score >= 6) {
  console.log("Approved");
} else {
  console.log("Reproved");
}

//=========================================================================================
// 06- Truthy e Falsy
//=========================================================================================
// Alguns valores são avaliados como false automaticamente.
//
// Falsy mais comuns:
// false, 0, "", null, undefined, NaN

let userName = "";

if (userName) {
  console.log("User name provided");
} else {
  console.log("User name not provided");
}

//=========================================================================================
// 07- Uso do método includes()
//=========================================================================================
// includes() verifica se uma string contém determinado valor
// e retorna true ou false.

let email = "user@gmail.com";

if (email.includes("@")) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}

//=========================================================================================
// 08- Uso do prompt() em condicionais
//=========================================================================================
// prompt() recebe dados do usuário através de uma caixa de diálogo.
// O valor retornado é sempre do tipo string.

let inputAge = prompt("Enter your age:");

if (inputAge >= 18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

//=========================================================================================
// 09- Condicionais com template strings
//=========================================================================================
// Template strings facilitam a construção de mensagens dinâmicas.

let isLoggedIn = false;

let statusMessage = isLoggedIn
  ? "User is logged in"
  : "User is not logged in";

console.log(`Status: ${statusMessage}`);

//=========================================================================================
// CONCLUSÕES
//=========================================================================================
// - Estruturas condicionais controlam o fluxo do programa
// - if executa um bloco quando a condição é verdadeira
// - else define um caminho alternativo
// - else if permite múltiplas decisões
// - Condições utilizam comparações e operadores lógicos
// - includes() e prompt() são comumente usados em decisões
