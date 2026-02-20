/*
===========================================================================================
   ARROW FUNCTIONS (FUNÇÕES DE SETA)
===========================================================================================

Arrow functions foram introduzidas no ES6.
Elas oferecem uma sintaxe mais curta para escrever funções.

São muito utilizadas em:
- métodos de array (map, filter, reduce)
- callbacks
- funções simples e objetivas
*/

//=========================================================================================
// 01- Sintaxe Básica
//=========================================================================================
// Forma tradicional:

function greet() {
    console.log("Hello!");
}

greet();

// Forma com arrow function:

const greetArrow = () => {
    console.log("Hello!");
};

greetArrow();

//=========================================================================================
// 02- Arrow Function com Parâmetro
//=========================================================================================
// Quando há apenas um parâmetro, os parênteses são opcionais.

const greetUser = name => {
    console.log("Hello, " + name);
};

greetUser("Alice");

//=========================================================================================
// 03- Retorno Implícito
//=========================================================================================
// Quando a função possui apenas uma expressão,
// o return pode ser implícito (sem chaves).

const multiply = (a, b) => a * b;

let result = multiply(4, 5);
console.log(result);

//=========================================================================================
// 04- Arrow Functions em Métodos de Array
//=========================================================================================

let numbers = [10, 20, 30];

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let greaterThan15 = numbers.filter(num => num > 15);
console.log(greaterThan15);

//=========================================================================================
// 05- Diferenças Importantes
//=========================================================================================
// - Arrow functions não possuem seu próprio "this"
// - Não são indicadas para métodos de objetos que dependem de "this"
// - São ideais para funções curtas e callbacks

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Arrow functions tornam o código mais conciso
// - São amplamente utilizadas em JavaScript moderno
// - Melhoram legibilidade quando usadas corretamente
// - Devem ser usadas com entendimento, não apenas por estilo