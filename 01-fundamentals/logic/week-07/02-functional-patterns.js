/* ----------------------------------------------------------------------------------------
   02 - FUNCTIONAL PATTERNS (PADRÕES FUNCIONAIS)
-----------------------------------------------------------------------------------------*/

/*
Programação funcional é um estilo de programação que utiliza funções como
principal forma de estruturar a lógica do programa.

Alguns princípios importantes:

- Funções puras
- Imutabilidade
- Funções de alta ordem
- Composição de funções

Esses padrões ajudam a criar código:

- mais previsível
- mais reutilizável
- mais fácil de testar
*/


//=========================================================================================
// 01 - PURE FUNCTIONS (FUNÇÕES PURAS)
//=========================================================================================

/*
Uma função pura possui duas características:

1) Sempre retorna o mesmo resultado para os mesmos parâmetros
2) Não altera dados externos (sem efeitos colaterais)

Exemplo de função pura:
*/

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));



/*
Exemplo de função NÃO pura:
*/

let total = 0;

function addToTotal(value) {
    total += value;
}

addToTotal(10);
addToTotal(10);

console.log(total);



/*
Problema:

A função depende de um estado externo (variável global).
Isso torna o comportamento menos previsível.
*/



//=========================================================================================
// 02 - IMUTABILIDADE
//=========================================================================================

/*
Imutabilidade significa não modificar dados existentes,
mas sim criar novos valores.

Exemplo ruim (mutação):
*/

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);



/*
Exemplo melhor (imutável):
*/

const originalNumbers = [1, 2, 3];

const newNumbers = [...originalNumbers, 4];

console.log(originalNumbers);
console.log(newNumbers);



//=========================================================================================
// 03 - HIGHER-ORDER FUNCTIONS
//=========================================================================================

/*
Funções de alta ordem são funções que:

- recebem outras funções como parâmetro
OU
- retornam funções

Array methods como map, filter e reduce são exemplos.
*/

const prices = [100, 200, 300];

const withTax = prices.map(function(price) {
    return price * 1.1;
});

console.log(withTax);



//=========================================================================================
// 04 - FUNÇÃO RECEBENDO OUTRA FUNÇÃO
//=========================================================================================

function applyOperation(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y) {
    return x * y;
}

const result = applyOperation(4, 5, multiply);

console.log(result);



//=========================================================================================
// 05 - FUNCTION COMPOSITION
//=========================================================================================

/*
Composição de funções significa combinar várias funções
para formar um processamento maior.
*/

function addTax(price) {
    return price * 1.1;
}

function applyDiscount(price) {
    return price * 0.9;
}

function calculateFinalPrice(price) {
    return applyDiscount(addTax(price));
}

const finalPrice = calculateFinalPrice(100);

console.log(finalPrice);



//=========================================================================================
// 06 - VANTAGENS DOS PADRÕES FUNCIONAIS
//=========================================================================================

/*
1) Código mais previsível

2) Menos efeitos colaterais

3) Maior reutilização de funções

4) Mais fácil de testar

Esses princípios são muito utilizados em:

- React
- Node.js
- bibliotecas modernas de JavaScript
*/



//=========================================================================================
// 07 - DESAFIO
//=========================================================================================

/*
Você possui o seguinte array de produtos:

const products = [
    { name: "Laptop", price: 5000 },
    { name: "Mouse", price: 100 },
    { name: "Keyboard", price: 300 }
];

Tarefas:

1) Crie uma função pura chamada:

addTax(price)

que adiciona 10% de imposto.

2) Utilize map para criar um novo array contendo
os preços com imposto aplicado.

3) Imprima o resultado no console.

Resultado esperado (aproximado):

[5500, 110, 330]
*/


// RESOLUÇÃO

const products = [
    { name: "Laptop", price: 5000 },
    { name: "Mouse", price: 100 },
    { name: "Keyboard", price: 300 }
];


// Função pura para adicionar 10% de imposto
function addTax(price) {
    return price * 1.1;
}


// Criando novo array com os preços atualizados
const pricesWithTax = products.map(function(product) {
    return addTax(product.price);
});


// Exibindo resultado
console.log(pricesWithTax);

