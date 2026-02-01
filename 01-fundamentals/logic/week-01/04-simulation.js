/*
===========================================================================================
   SIMULATION
===========================================================================================
*/
// Este arquivo tem como objetivo simular pequenos cenários
// utilizando os conceitos estudados até agora.
//
// Conceitos aplicados:
// - Variáveis
// - Strings e template strings
// - Expressões
// - console.log()

//=========================================================================================
// 01- Simulação básica
//=========================================================================================

let userName = "Alice";

console.log(`Welcome, ${userName}!`);

//=========================================================================================
// 02- Simulação com múltiplas informações
//=========================================================================================

let city = "Campinas";
let state = "SP";
let age = 28;

console.log(`User info:
City: ${city}
State: ${state}
Age: ${age}`);

//=========================================================================================
// 03- Simulação com expressões
//=========================================================================================

let yearOfBirth = 1996;
let currentYear = 2024;

let ageCalculated = currentYear - yearOfBirth;
 console.log(`The age calculated is ${ageCalculated}`);

//=========================================================================================
// 04- Simulação de mudança de valor
//=========================================================================================

let score = 0;
console.log(`Initial score: ${score}`);

score = 20;
console.log(`New score: ${score}`);

//=========================================================================================
// 05- Simulação livre
//=========================================================================================

let username = "Isabela";
let userAge = "25";
let userCity = "Campinas";

console.log(`
User profile: 
Name: ${username}
Age: ${userAge}
City: ${userCity}  
    `);
    
//

let productName = "Notebook";
let unitPrice = 3500;
let quantity = 2;

let totalPrice = unitPrice * quantity;

console.log(`
Order Summary
Product: ${productName}
Quantity: ${quantity}
Total: R$ ${totalPrice}
`);   

//

let week = 1;
let topic = "JavaScript Basics";
let studiedHours = 6;

console.log(`
Study Report
Week: ${week}
Topic: ${topic}
Hours studied: ${studiedHours}
`);

//

let balance = 1000;
console.log(`Initial balance: R$ ${balance}`);

balance = balance - 250;
console.log(`Updated balance: R$ ${balance}`);

//

let studentName = "Isabela";
let course = "JavaScript Fundamentals";

console.log(`Welcome ${studentName}!`);
console.log(`You are enrolled in: ${course}`);

//

let totalTasks = 20;
let completedTasks = 8;

let remainingTasks = totalTasks - completedTasks;

console.log(`Remaining tasks: ${remainingTasks}`);

//