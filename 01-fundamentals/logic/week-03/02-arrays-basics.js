/*
===========================================================================================
   ARRAYS — CONCEITOS BÁSICOS
===========================================================================================
*/

// Em JavaScript, arrays são estruturas usadas para armazenar múltiplos valores
// dentro de uma única variável.
// Cada valor ocupa uma posição, chamada de índice, que começa em 0.

//=========================================================================================
// 01- Criação de arrays
//=========================================================================================

// Array vazio
let emptyArray = [];
console.log(emptyArray);

// Array com valores
let numbers = [10, 20, 30, 40];
console.log(numbers);

// Array de strings
let names = ["Ana", "Bruno", "Carlos"];
console.log(names);

// Array com tipos mistos
let mixedData = [1, "text", true, null];
console.log(mixedData);

//=========================================================================================
// 02- Acesso a elementos (índices)
//=========================================================================================

// O índice indica a posição do elemento dentro do array.
// O primeiro elemento sempre está no índice 0.

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30

// Acessar um índice inexistente retorna undefined
console.log(numbers[10]); // undefined

//=========================================================================================
// 03- Modificação de valores
//=========================================================================================

// É possível alterar o valor de um elemento acessando seu índice

numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40]

//=========================================================================================
// 04- Propriedade length
//=========================================================================================

// length indica a quantidade de elementos do array

console.log(numbers.length); // 4

// O último índice sempre é length - 1
console.log(numbers[numbers.length - 1]); // 40

//=========================================================================================
// 05- Arrays e referência
//=========================================================================================
// Arrays são tipos de referência.
// Alterar um array afeta todas as variáveis que apontam para ele.

let original = [1, 2, 3];
let copy = original;

copy[0] = 99;

console.log(original); // [99, 2, 3]
console.log(copy);    // [99, 2, 3]

//=========================================================================================
// 06- Percorrendo arrays (introdução)
//=========================================================================================
// Um array pode ser percorrido usando loops.
// Aqui apenas uma introdução — o aprofundamento virá depois.

for (let i = 0; i < numbers.length; i++) {
    console.log("Index:", i, "Value:", numbers[i]);
}

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Arrays armazenam múltiplos valores em uma única estrutura
// - Os índices começam em 0
// - length indica o tamanho do array
// - Arrays são mutáveis
// - Arrays são tipos de referência
// - Loops permitem acessar cada elemento individualmente
