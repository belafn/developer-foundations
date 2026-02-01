/*
===========================================================================================
   DEBUG
===========================================================================================
*/
// Códigos de programação podem conter erros de lógica ou de sintaxe.
// Muitas vezes, esses erros não geram mensagens claras e são considerados silenciosos.
// O processo de identificar e corrigir esses problemas é chamado de debugging.

// A maioria dos browsers modernos possuem JS Debugger integrado.
// Normalmente são acionados no navegador pela tecla F12.

// Durante o debug, é importante:
// 1. Ler a mensagem de erro no console
// 2. Verificar a linha indicada
// 3. Conferir os valores com console.log()
// 4. Corrigir o problema e testar novamente

// ========================================================================================
// 01- Método console.log()
// ========================================================================================
// Confirmar valores de variáveis e resultados de operações
let a = 5;
let b = 6;
let c = a + b;
console.log(c); // 11

// ========================================================================================
// 02- Operador typeof
// ========================================================================================
// O operador typeof indica o tipo de dado de uma variável ou valor

let num = 42;
console.log(typeof num); // "number"

let name = "Sônia";
console.log(typeof name); // "string"

// Atenção: existe um comportamento peculiar relacionado ao null

let exampleVariable = null;
console.log(typeof exampleVariable); // "object"

// Esse comportamento é um bug antigo do JavaScript, herdado de sua implementação inicial.
// Embora confuso, faz parte da linguagem e precisa ser conhecido.

// ========================================================================================
// 03- Erro de variável não definida (ReferenceError)
// ========================================================================================

// console.log(userName); 
// ReferenceError: userName is not defined
// O erro ocorre porque a variável não foi declarada antes do uso.

let userName = "Ana";
console.log(userName); // Correção do erro

// ========================================================================================
// 04- Erro de ordem de execução
// ========================================================================================

// console.log(age);
// ReferenceError: Cannot access 'age' before initialization

let age = 25;
console.log(age); // Correto: a variável é usada após ser declarada

// ========================================================================================
// 05- Erro de digitação (case sensitive)
// ========================================================================================

let city = "São Paulo";

// console.log(City);
// ReferenceError: City is not defined
// JavaScript diferencia letras maiúsculas de minúsculas.

console.log(city); // Correto

// ========================================================================================
// 06- Erro lógico (resultado inesperado)
// ========================================================================================

// O código não gera erro, mas o resultado não é o esperado

let value = "10";
console.log(value + 5); // "105"

// Investigando o tipo do dado
console.log(typeof value); // "string"

// Correção: garantir que o valor seja numérico
value = 10;
console.log(value + 5); // 15
