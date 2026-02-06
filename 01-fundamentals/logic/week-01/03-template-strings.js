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
// 08- Propriedade length
//=========================================================================================
// A propriedade length retorna a quantidade de caracteres da string.

let language = "JavaScript";
console.log(language.length); // 10

//=========================================================================================
// 09- Acesso a caracteres (indexação)
//=========================================================================================
// Strings possuem índices baseados em zero.
// É possível acessar caracteres usando colchetes [].

console.log(language[0]); // J
console.log(language[4]); // S

//=========================================================================================
// 10- Caracteres de escape
//=========================================================================================
// Caracteres de escape permitem representar símbolos especiais em strings.

let text = "She said: \"JavaScript is awesome!\"";
console.log(text);

// \n -> nova linha
// \t -> tabulação

let escapedText = "Line 1\nLine 2";
console.log(escapedText);

//=========================================================================================
// 11- Métodos comuns de strings
//=========================================================================================

let course = " JavaScript Basics ";

// toUpperCase() e toLowerCase()
console.log(course.toUpperCase());
console.log(course.toLowerCase());

// trim() remove espaços extras no início e no fim
console.log(course.trim());

// includes() verifica se um texto existe dentro da string
console.log(course.includes("Basics")); // true

// slice() extrai parte da string
console.log(course.slice(1, 11)); // JavaScript

// replace() substitui parte do texto
console.log(course.replace("Basics", "Fundamentals"));

//=========================================================================================
// 12- Comparação de strings
//=========================================================================================
// Strings podem ser comparadas usando operadores relacionais.

let x = "apple";
let y = "banana";

console.log(x === "apple"); // true
console.log(x > y); // false (ordem alfabética)

//=========================================================================================
// CONCLUSÕES
//=========================================================================================
// - Strings são imutáveis
// - Podem ser criadas com aspas simples, duplas ou crase
// - Template strings facilitam interpolação e multilinhas
// - Métodos ajudam a manipular e analisar textos
// - São amplamente usadas para exibição de mensagens e dados textuais

