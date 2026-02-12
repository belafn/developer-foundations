/*
===========================================================================================
   ARRAYS — MÉTODOS FUNDAMENTAIS
===========================================================================================
*/

// Métodos de array permitem modificar, acessar ou transformar dados.
// Saber utilizá-los corretamente demonstra domínio de manipulação de dados,
// algo essencial para desenvolvimento real.

//=========================================================================================
// 01- push() e pop()
//=========================================================================================
// push() adiciona elemento ao final do array
// pop() remove o último elemento

let numbers = [10, 20, 30];

numbers.push(40);
console.log(numbers); // [10, 20, 30, 40]

numbers.pop();
console.log(numbers); // [10, 20, 30]

//=========================================================================================
// 02- shift() e unshift()
//=========================================================================================
// unshift() adiciona elemento no início
// shift() remove o primeiro elemento

numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30]

numbers.shift();
console.log(numbers); // [10, 20, 30]

//=========================================================================================
// 03- includes()
//=========================================================================================
// Verifica se determinado valor existe no array
// Retorna true ou false

let fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

//=========================================================================================
// 04- indexOf()
//=========================================================================================
// Retorna o índice do elemento
// Se não existir, retorna -1

console.log(fruits.indexOf("orange")); // 2
console.log(fruits.indexOf("kiwi"));   // -1

//=========================================================================================
// 05- slice()
//=========================================================================================
// Cria uma cópia parcial do array
// NÃO modifica o array original

let sliced = fruits.slice(0, 2);
console.log(sliced); // ["apple", "banana"]
console.log(fruits); // permanece igual

//=========================================================================================
// 06- splice()
//=========================================================================================
// Remove ou adiciona elementos em posição específica
// MODIFICA o array original

let colors = ["red", "blue", "green"];

colors.splice(1, 1); // remove 1 elemento a partir do índice 1
console.log(colors); // ["red", "green"]

colors.splice(1, 0, "yellow"); // adiciona sem remover
console.log(colors); // ["red", "yellow", "green"]

//=========================================================================================
// 07- forEach()
//=========================================================================================
// Executa uma função para cada elemento do array
// Não retorna novo array

numbers.forEach(function (num) {
    console.log("Value:", num);
});

//=========================================================================================
// 08- map()
//=========================================================================================
// Retorna um novo array transformado

let doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled); // [20, 40, 60]

//=========================================================================================
// 09- filter()
//=========================================================================================
// Retorna um novo array com elementos que atendem a uma condição

let greaterThan15 = numbers.filter(function (num) {
    return num > 15;
});

console.log(greaterThan15); // [20, 30]

//=========================================================================================
// 10- reduce()
//=========================================================================================
// Reduz o array a um único valor

let sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);

console.log(sum); // 60

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Alguns métodos modificam o array original (push, pop, shift, unshift, splice)
// - Outros retornam um novo array (slice, map, filter)
// - reduce permite consolidação de dados
// - Dominar esses métodos é essencial para trabalhar com dados em aplicações reais
