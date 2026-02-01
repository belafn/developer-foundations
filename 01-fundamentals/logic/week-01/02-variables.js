/*
===========================================================================================
 VARIÁVEIS EM JAVASCRIPT
===========================================================================================
*/
// Variáveis são usadas para armazenar dados.
// Esses dados podem ser acessados e modificados ao longo do programa.
// Toda variável precisa ser declarada usando uma palavra-chave.


// 01- Declaração de variável com let -----------------------------------------------------

let idade; // Declara a variável "idade" sem inicializá-la
console.log(idade); // undefined -> a variável existe, mas não possui valor atribuído


// 02- Atribuição de valor ----------------------------------------------------------------

idade = 25; 
console.log(idade); // 25

// A atribuição de um valor inicial a uma variável é chamada de *inicialização*

// 03- Variável inicializada na declaração ------------------------------------------------

let score = 15; // Declaração + inicialização
console.log(score); // 15


// 04- Reatribuição de valor --------------------------------------------------------------

// Variáveis declaradas com let permitem alteração de valor.

score = 20;
console.log(score); // 20


// 05- Declaração de variável com const ---------------------------------------------------

// const é usada para declarar valores constantes.
// O valor NÃO pode ser alterado após a declaração.

const maxScore = 100; // const exige inicialização imediata
console.log(maxScore); // 100

// 06- Declaração de variável com var(NÃO RECOMENDAVEL) -----------------------------------

// var era amplamente utilizada antes de 2015 (ES6), quando let e const foram introduzidos.

var x = 5;
var y = 6;

// Seu uso não é recomendado, pois não respeita escopo de bloco `{}` (if, for, while)
// Com var também é possível declarar a mesma variável diversas vezes:

var w = 10;
var w = 12; // Valores podem ser sobrescritos, causando bugs silenciosos.


// CONCEITOS RELACIONADOS =================================================================

// 01- Escopo de bloco --------------------------------------------------------------------

// Variáveis declaradas com let e const possuem escopo de bloco.
// Elas existem apenas dentro do bloco `{}` onde foram criadas.

if (true) {
    let valor = 10;
    const limite = 20;
    console.log(valor); // 10
    console.log(limite); // 20
}

// Fora do bloco, as variáveis não existem.
// Esse comportamento evita conflitos de nomes e torna o código mais previsível.

// 02- Tipagem dinâmica ------------------------------------------------------------------

// JavaScript possui tipagem dinâmica.
// O tipo da variável é definido pelo valor atribuído.

let dado = 10;
console.log(dado); //number

// Reatribuição com outro tipo
dado = "dez";
console.log(dado); //string

// A variável permanece a mesma, mas o tipo do valor muda.

// BOAS PRÁTICAS =========================================================================

// - Use const por padrão
// - Use let apenas quando houver necessidade de reatribuição
// - Evite var