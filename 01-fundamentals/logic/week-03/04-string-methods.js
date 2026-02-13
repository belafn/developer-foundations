/*
===========================================================================================
   STRING METHODS — MANIPULAÇÃO DE TEXTO
===========================================================================================
*/

// Strings são sequências de caracteres.
// Métodos de string permitem validar, transformar e extrair informações de textos,
// algo essencial em aplicações reais (inputs de usuário, formulários, APIs).

//=========================================================================================
// 01- length
//=========================================================================================
// Retorna a quantidade de caracteres da string

let message = "JavaScript";

console.log(message.length); // 10

//=========================================================================================
// 02- toUpperCase() e toLowerCase()
//=========================================================================================
// Transformam o texto para maiúsculo ou minúsculo

console.log(message.toUpperCase()); // JAVASCRIPT
console.log(message.toLowerCase()); // javascript

//=========================================================================================
// 03- trim()
//=========================================================================================
// Remove espaços no início e no fim da string

let userInput = "   admin   ";
console.log(userInput.trim()); // "admin"

// Muito usado para validar entradas de formulário

//=========================================================================================
// 04- includes()
//=========================================================================================
// Verifica se um trecho existe dentro da string

let email = "user@email.com";

console.log(email.includes("@")); // true
console.log(email.includes(".com")); // true

//=========================================================================================
// 05- indexOf()
//=========================================================================================
// Retorna a posição do trecho encontrado
// Se não existir, retorna -1

console.log(email.indexOf("@")); // posição do @
console.log(email.indexOf("xyz")); // -1

//=========================================================================================
// 06- slice()
//=========================================================================================
// Extrai parte da string

let text = "Hello World";

console.log(text.slice(0, 5)); // "Hello"
console.log(text.slice(6));    // "World"

//=========================================================================================
// 07- replace()
//=========================================================================================
// Substitui parte do texto

let sentence = "I like JavaScript";

let updatedSentence = sentence.replace("JavaScript", "Python");
console.log(updatedSentence);

//=========================================================================================
// 08- split()
//=========================================================================================
// Divide a string em array

let data = "apple,banana,orange";

let fruits = data.split(",");
console.log(fruits); // ["apple", "banana", "orange"]

//=========================================================================================
// 09- startsWith() e endsWith()
//=========================================================================================
// Verificam início e final da string

let filename = "report.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.endsWith(".pdf"));     // true

//=========================================================================================
// CONSIDERAÇÕES 
//=========================================================================================
// - Strings são imutáveis (os métodos retornam novos valores)
// - Métodos de string são essenciais para validação de dados
// - Trabalhar bem com texto é fundamental em aplicações reais
// - Strings frequentemente são convertidas para arrays com split()
