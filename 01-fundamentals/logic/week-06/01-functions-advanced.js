/* =================================================================================================
   ADVANCED FUNCTIONS - FUNÇÕES AVANÇADAS
================================================================================================= */

/*
OBJETIVO:
Aprofundar conceitos de funções em JavaScript moderno (ES6+), incluindo:

- Function Expression
- Arrow Functions (revisão técnica)
- Parâmetros default
- Rest Parameters
- Higher-Order Functions
- Callback Functions
- Closures
- Pure vs Impure Functions

Este arquivo consolida fundamentos essenciais para escrever código modular,
legível e alinhado a boas práticas profissionais.
*/


/* ================================================================================================
   01- FUNCTION EXPRESSION
================================================================================================= */

// Function Expression é quando armazenamos uma função dentro de uma variável.

const sum = function (a, b) {
    return a + b;
};

console.log("Function Expression:", sum(10, 5));


/* ================================================================================================
   02- ARROW FUNCTIONS (REVISÃO TÉCNICA)
================================================================================================= */

// Forma tradicional
function multiply(a, b) {
    return a * b;
}

// Arrow Function equivalente
const multiplyArrow = (a, b) => {
    return a * b;
};

// Arrow Function com retorno implícito
const multiplyShort = (a, b) => a * b;

console.log("Arrow Function:", multiplyArrow(4, 3));
console.log("Arrow Short:", multiplyShort(4, 3));

/*
IMPORTANTE:
Arrow functions NÃO possuem:

- próprio "this"
- próprio "arguments"
- não podem ser usadas como construtor (new)

Isso é fundamental em contextos de objetos e classes.
*/


/* ================================================================================================
   03- DEFAULT PARAMETERS
================================================================================================= */

const greet = (name = "Visitante") => {
    return `Olá, ${name}!`;
};

console.log(greet());
console.log(greet("Isabela"));


/* ================================================================================================
   04- REST PARAMETERS
================================================================================================= */

// Rest Parameter agrupa múltiplos argumentos em um array.

const calculateTotal = (...values) => {
    return values.reduce((acc, current) => acc + current, 0);
};

console.log("Total:", calculateTotal(10, 20, 30, 40));


/* ================================================================================================
   05- HIGHER-ORDER FUNCTIONS
================================================================================================= */

/*
Higher-Order Function é uma função que:

- recebe outra função como argumento
OU
- retorna uma função
*/

const applyOperation = (a, b, operation) => {
    return operation(a, b);
};

const subtract = (a, b) => a - b;

console.log("Higher-Order:", applyOperation(10, 5, subtract));


/* ================================================================================================
   06- CALLBACK FUNCTIONS
================================================================================================= */

/*
Callback é uma função passada como argumento para ser executada depois.
Muito comum em:

- Array methods (map, filter, reduce)
- Eventos
- Operações assíncronas
*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log("Callback:", number);
});


/* ================================================================================================
   07- CLOSURE
================================================================================================= */

/*
Closure acontece quando uma função interna
mantém acesso ao escopo da função externa,
mesmo após a execução da função externa.
*/

const createCounter = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    };
};

const counter = createCounter();

console.log("Closure:", counter());
console.log("Closure:", counter());
console.log("Closure:", counter());


/* ================================================================================================
   08- PURE vs IMPURE FUNCTIONS
================================================================================================= */

/*
Pure Function:
- Mesmo input -> mesmo output
- Não modifica estado externo

Impure Function:
- Depende de estado externo
OU
- Modifica algo fora do escopo local
*/

// Pure Function
const addTax = (price, tax) => price + price * tax;

// Impure Function
let totalSales = 0;

const registerSale = (amount) => {
    totalSales += amount; // modifica estado externo
};

console.log("Pure:", addTax(100, 0.2));
registerSale(500);
console.log("Impure (estado externo):", totalSales);


/* ================================================================================================
   09- BOAS PRÁTICAS
================================================================================================= */

/*
✔ Prefira arrow functions para callbacks.
✔ Use nomes descritivos.
✔ Evite efeitos colaterais desnecessários.
✔ Prefira funções puras quando possível.
✔ Separe responsabilidade (Single Responsibility Principle).
*/


/* ================================================================================================
   DESAFIO
================================================================================================= */

/*
1. Crie uma função chamada createMultiplier que:
   - Receba um número (factor)
   - Retorne uma nova função
   - Essa nova função deve multiplicar qualquer número pelo factor

2. Crie uma função processArray que:
   - Receba um array
   - Receba uma função callback
   - Retorne um novo array transformado pela callback

3. Explique (em comentário) por que createMultiplier é um exemplo de closure.
*/

// RESOLUÇÃO:

const createMultiplier = (factor) => {
   return(number) => number * factor;
};

const processArray = (array, callback) => {
   return array.map(callback);
};

const double = createMultiplier(2);
console.log(double(10)); // 20

const num = [1, 2, 3];
console.log(processArray(num, n => n * 3)); // [3, 6, 9]

/*
createMultiplier cria uma função interna que "lembra"
da variável factor, mesmo após a execução da função externa.

Isso acontece porque:

- A função interna mantém acesso ao escopo léxico onde foi criada.
- factor continua existindo dentro da função retornada.

Esse comportamento é chamado de CLOSURE.
*/
