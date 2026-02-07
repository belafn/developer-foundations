/*
===========================================================================================
   PRACTICE EXERCISES
===========================================================================================
*/
// Este arquivo reúne exercícios práticos desenvolvidos para consolidar
// os conceitos estudados na Week 2.
//
// O foco aqui é a aplicação da lógica de programação, utilizando:
// - operadores de comparação
// - operadores lógicos
// - estruturas condicionais(if / else)
// - switch statement
// - métodos de verificação simples(includes)
// - entrada e saída de dados(prompt / console.log)
//
// Os exercícios são independentes entre si e simulam
// cenários comuns encontrados no desenvolvimento em JavaScript.

//=========================================================================================
// Exercício 01
// Checar se um número é positivo ou negativo
//=========================================================================================

let number = -3;

if (number >= 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

//=========================================================================================
// Exercício 02
// Comparar valor e tipo
//=========================================================================================

let value = "10";

if (value === 10) {
  console.log("Same value and type");
} else {
  console.log("Different value or type");
}

//=========================================================================================
// Exercício 03
// Checar permissão de acesso
//=========================================================================================

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//=========================================================================================
// Exercício 04
// Checar acesso especial
//=========================================================================================

let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
  console.log("Special access granted");
} else {
  console.log("Standard access");
}

//=========================================================================================
// Exercício 05
// Validar formato de e-mail
//=========================================================================================

let email = "user@email.com";

if (email.includes("@")) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}

//=========================================================================================
// Exercício 06
// Classificação de notas 
//=========================================================================================

let grade = 8;

if (grade >= 9) {
  console.log("Excellent");
} else if (grade >= 6) {
  console.log("Approved");
} else {
  console.log("Reproved");
}
//=========================================================================================
// Exercício 07
// Dias da semana
//=========================================================================================

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

//=========================================================================================
// Exercício 08
// Perguntar idade do usuário para acesso
//=========================================================================================

let userAge = prompt("Enter your age:");

if (userAge >= 18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

//=========================================================================================
// Exercício 09
// Sistema de menu simples
//=========================================================================================

let option = prompt("Choose an option: start | pause | stop");

switch (option) {
  case "start":
    console.log("System started");
    break;
  case "pause":
    console.log("System paused");
    break;
  case "stop":
    console.log("System stopped");
    break;
  default:
    console.log("Invalid option");
}

//=========================================================================================
// Exercício 10
// Sistema de acesso do usuário
//=========================================================================================

let role = "admin";
let isLoggedIn = true;

if (isLoggedIn) {
  switch (role) {
    case "admin":
      console.log("Full access");
      break;
    case "user":
      console.log("Limited access");
      break;
    default:
      console.log("Unknown role");
  }
} else {
  console.log("User not logged in");
}


