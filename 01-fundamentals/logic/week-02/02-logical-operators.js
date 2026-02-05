/*
===========================================================================================
   LOGICAL OPERATORS (OPERADORES LÓGICOS)
===========================================================================================
*/
// Operadores lógicos são usados para combinar ou inverter
// expressões booleanas (true ou false).

// Eles são muito usados em:
// - estruturas condicionais (if / else)
// - validações mais complexas
// - controle de fluxo do programa

//=========================================================================================
// 01- Operador AND (&&)
//=========================================================================================
// Retorna true APENAS se TODAS as condições forem verdadeiras.

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID === true); // true
console.log(age < 18 && hasID === true);  // false

//=========================================================================================
// 02- Operador OR (||)
//=========================================================================================
// Retorna true se PELO MENOS UMA condição for verdadeira.

let hasInvitation = false;
let isVIP = true;

console.log(hasInvitation || isVIP); // true
console.log(false || false);         // false

//=========================================================================================
// 03- Operador NOT (!)
//=========================================================================================
// Inverte o valor booleano.

let isLoggedIn = false;

console.log(!isLoggedIn);  // true
console.log(!!isLoggedIn); // false (conversão para boolean)

//=========================================================================================
// 04- Combinando operadores lógicos
//=========================================================================================

let score = 75;

console.log(score >= 70 && score <= 100); // true
console.log(score < 50 || score > 90);    // false

//=========================================================================================
// 05- Operadores lógicos com comparações
//=========================================================================================
// Comparações retornam boolean, que podem ser combinados.

let temperature = 30;

console.log(temperature > 25 && temperature < 35); // true
console.log(temperature <= 0 || temperature >= 40); // false

//=========================================================================================
// 06- Curto-circuito (short-circuit)
//=========================================================================================
// O JavaScript para a avaliação assim que o resultado é definido.

console.log(false && true); // false
console.log(true || false); // true

//=========================================================================================
// 07- Valores truthy e falsy
//=========================================================================================
// Nem tudo é true ou false explicitamente.

console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

console.log(Boolean(1));        // true
console.log(Boolean("text"));   // true
console.log(Boolean([]));       // true

//=========================================================================================
// 08- Uso comum em validações
//=========================================================================================

let username = "admin";
let password = "1234";

let isValidLogin = username === "admin" && password === "1234";
console.log(isValidLogin); // true

//=========================================================================================
// CONCLUSÃO
//=========================================================================================
// Operadores lógicos permitem criar condições mais completas.
// Principais operadores:
// - &&  (AND)
// - ||  (OR)
// - !   (NOT)
//
// Eles são fundamentais para:
// - decisões no código
// - validações
// - controle de fluxo

