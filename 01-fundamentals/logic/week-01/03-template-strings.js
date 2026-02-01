/*
===========================================================================================
   TEMPLATE-STRINGS
===========================================================================================
*/
//=========================================================================================
// 01- Noções gerais 
//=========================================================================================
// Em JS, uma string é uma sequencia de caracteres usada para representar dados textuais.

// Strings podem ser criadas usando aspas simples ('), aspas duplas (") ou crase (`).

let singleQuotes = 'this is a string';
console.log(singleQuotes);

let doubleQuotes = "this is also a string";
console.log(doubleQuotes);

// Strings são imutáveis, não podem ser alteradas diretamente.
// Toda operação gera uma nova string;

let developer = "Jessica";
console.log(developer);

developer = "Quincy";
console.log(developer);

//=========================================================================================
// 02- Concatenação de strings
//=========================================================================================
// Concatenação de strings é o processo de unir textos em JavaScript.
// Isso pode ser feito com +, += ou concat().

let firstname = "Mary";
let lastname = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // Mary Doe

// O operador += permite adicionar conteúdo a uma string existente

let greeting = "Hello";
greeting += ", Mary!";
console.log(greeting); // "Hello, Mary!"

// Também é possível usar o método concat()

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2);
console.log(result); // Hello World

//=========================================================================================
// 03- Introdução às Template Strings
//=========================================================================================
// Template strings utilizam crase (`) em vez de aspas.
// Elas tornam o código mais legível, principalmente quando há variáveis ou textos longos.

let message = `Hello World`;
console.log(message);

//=========================================================================================
// 04- Interpolação de variáveis (${ })
//=========================================================================================
// Com template strings, é possível inserir variáveis diretamente no texto
// usando a sintaxe ${}.

let name = "Mary";
let age = 25;

let sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence);

// Comparação com concatenação tradicional:

let sentenceConcat =
  "My name is " + name + " and I am " + age + " years old.";
console.log(sentenceConcat);

//=========================================================================================
// 05- Expressões dentro de template strings
//=========================================================================================
// Além de variáveis, template strings aceitam expressões JavaScript.

let a = 10;
let b = 5;

console.log(`The sum of a and b is ${a + b}`);

//=========================================================================================
// 06- Strings multilinha
//=========================================================================================
// Template strings permitem criar textos com múltiplas linhas
// sem a necessidade de caracteres especiais.

let multilineText = `
Hello,
This is an example
of a multiline string
using template strings.
`;

console.log(multilineText);

//=========================================================================================
// 07- Uso de lógica simples em template strings
//=========================================================================================
// É possível usar operadores e expressões condicionais simples.
let isAdmin = true;

let accessMessage = `Access: ${isAdmin ? "Allowed" : "Denied"}`;
console.log(accessMessage);

//=========================================================================================
// CONCLUSÕES
//=========================================================================================
// - Template strings usam crase (`)
// - Permitem interpolação com ${}
// - Facilitam o uso de variáveis e expressões dentro do texto
// - Suportam strings multilinha de forma simples
// - Melhoram a legibilidade do código
//
// Concatenação tradicional ainda é válida em casos simples,
// mas template strings são preferíveis em textos mais complexos.

