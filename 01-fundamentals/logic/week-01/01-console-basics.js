/* ----------------------------------------------------------------------------------------
   CONSOLE BÁSICO
-----------------------------------------------------------------------------------------*/
// console.log() é uma ferramenta simples e poderosa usada para exibir mensagens
// ou informações no console durante o desenvolvimento.

// Ele é amplamente utilizado para:
// - verificar se o código está sendo executado
// - inspecionar valores de variáveis
// - acompanhar a execução do programa (debug inicial)

// As mensagens exibidas pelo console.log() aparecem:
// - no console do navegador (DevTools)
// - ou no terminal, dependendo do ambiente de execução

//=========================================================================================
// 01- Exibindo valores literais
//=========================================================================================

console.log("Hello, world!"); // string literal
console.log(10);              // número literal
console.log(true);            // boolean literal

//=========================================================================================
// 02- Exibindo variáveis
//=========================================================================================

let num = 5;
console.log(num); // 5

let name = "Alice";
console.log(name); // Alice

//=========================================================================================
// 03- Concatenação simples no console
//=========================================================================================

console.log("Hello, " + name + "!"); // Hello, Alice!

let city = "Campinas";
let state = "SP";

// É possível exibir múltiplos valores no mesmo console.log()
console.log("city:", city, "state:", state); // city: Campinas state: SP

//=========================================================================================
// 04- Exibindo expressões
//=========================================================================================
// O console.log() também avalia expressões JavaScript

console.log(5 + 3);        // 8
console.log(num * 2);      // 10

//=========================================================================================
// 05- Acompanhando o fluxo de execução
//=========================================================================================
// O console é frequentemente usado para acompanhar mudanças de valores
// durante a execução do código

let value = 10;
console.log("Initial value:", value);

value = value + 5;
console.log("Updated value:", value);

//=========================================================================================
// CONCLUSÃO
//=========================================================================================
// console.log() é uma ferramenta essencial para desenvolvimento em JavaScript.
// Ele permite visualizar valores, testar hipóteses e entender o comportamento
// do código enquanto ele está sendo escrito.