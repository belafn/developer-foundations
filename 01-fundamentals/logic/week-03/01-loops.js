/*
===========================================================================================
   LOOPS (LAÇOS DE REPETIÇÃO)
===========================================================================================
*/

// Em programação, loops são estruturas usadas para repetir um bloco de código
// enquanto uma condição for verdadeira.
// Eles evitam repetição manual de código e permitem trabalhar com volumes maiores de dados.

//=========================================================================================
// 01- Loop for
//=========================================================================================
// O loop for é usado quando sabemos previamente quantas vezes o código deve ser executado.
// Estrutura:
// for (inicialização; condição; incremento) {}

for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}

// Fluxo:
// - inicializa i com 0
// - verifica a condição (i < 5)
// - executa o bloco
// - incrementa i
// - repete até a condição ser falsa

//=========================================================================================
// 02- Loop while
//=========================================================================================
// O loop while executa enquanto a condição for verdadeira.
// É indicado quando NÃO sabemos exatamente quantas repetições serão necessárias.

let counter = 0;

while (counter < 3) {
    console.log("Contador:", counter);
    counter++;
}

// Atenção: se a condição nunca se tornar falsa, o loop será infinito.

//=========================================================================================
// 03- Loop do...while
//=========================================================================================
// O do...while garante que o bloco será executado ao menos uma vez,
// pois a condição é verificada somente após a execução.

let number = 5;

do {
    console.log("Número:", number);
    number++;
} while (number < 5);

// Mesmo com a condição falsa, o código foi executado uma vez.

//=========================================================================================
// 04- Controle de fluxo: break
//=========================================================================================
// O comando break encerra imediatamente a execução do loop.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Quando i é igual a 5, o loop é interrompido.

//=========================================================================================
// 05- Controle de fluxo: continue
//=========================================================================================
// O comando continue pula a iteração atual e segue para a próxima.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// O valor 3 não é exibido.

//=========================================================================================
// 06- Loop for...of
//=========================================================================================
// O for...of é usado para percorrer elementos de estruturas iteráveis,
// como arrays e strings.

let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Esse tipo de loop é mais legível quando o foco é o valor, não o índice.

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Loops permitem automatizar tarefas repetitivas
// - for é ideal quando o número de repetições é conhecido
// - while e do...while são úteis para condições abertas
// - break e continue ajudam a controlar o fluxo
// - for...of melhora a legibilidade ao percorrer coleções
