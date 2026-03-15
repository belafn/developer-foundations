/* ----------------------------------------------------------------------------------------
   05 - REFACTORING PRACTICE (PRÁTICA DE REFATORAÇÃO)
-----------------------------------------------------------------------------------------*/

/*
Refatoração significa melhorar o código existente sem alterar seu comportamento.

Objetivos da refatoração:

- melhorar legibilidade
- reduzir duplicação
- organizar responsabilidades
- facilitar manutenção

Importante:

Refatoração NÃO muda o resultado do programa.
Ela apenas melhora a estrutura do código.
*/


//=========================================================================================
// 01 - EXEMPLO DE CÓDIGO COM PROBLEMAS
//=========================================================================================

/*
Problemas comuns:

- código duplicado
- lógica repetida
- baixa reutilização
*/

const product1Price = 100;
const product1Quantity = 2;

const product2Price = 50;
const product2Quantity = 4;

const total1 = product1Price * product1Quantity;
const total2 = product2Price * product2Quantity;

const finalTotal = total1 + total2;

console.log("Final total:", finalTotal);


/*
Problemas:

1) código duplicado
2) difícil de escalar
3) pouca reutilização
*/


//=========================================================================================
// 02 - PRIMEIRA REFATORAÇÃO (EXTRAINDO FUNÇÃO)
//=========================================================================================

/*
Uma das refatorações mais comuns é:

EXTRACT FUNCTION
*/

function calculateItemTotal(price, quantity) {
    return price * quantity;
}

const totalItem1 = calculateItemTotal(product1Price, product1Quantity);
const totalItem2 = calculateItemTotal(product2Price, product2Quantity);

const betterTotal = totalItem1 + totalItem2;

console.log("Better total:", betterTotal);



//=========================================================================================
// 03 - SEGUNDA REFATORAÇÃO (USANDO ARRAY)
//=========================================================================================

/*
Outra melhoria é usar estruturas de dados melhores.
*/

const cart = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 4 }
];

function calculateCartTotal(cart) {

    let total = 0;

    for (const item of cart) {
        total += item.price * item.quantity;
    }

    return total;

}

const cartTotal = calculateCartTotal(cart);

console.log("Cart total:", cartTotal);



//=========================================================================================
// 04 - TERCEIRA REFATORAÇÃO (USANDO REDUCE)
//=========================================================================================

/*
Podemos melhorar ainda mais usando métodos de array.
*/

function calculateCartTotalFunctional(cart) {

    return cart.reduce(function(total, item) {
        return total + item.price * item.quantity;
    }, 0);

}

const functionalTotal = calculateCartTotalFunctional(cart);

console.log("Functional total:", functionalTotal);



//=========================================================================================
// 05 - MELHORANDO NOMES
//=========================================================================================

/*
Nomes claros tornam o código mais fácil de entender.
*/

function calculateOrderTotal(items) {

    return items.reduce(function(total, item) {
        return total + item.price * item.quantity;
    }, 0);

}



//=========================================================================================
// 06 - BOAS PRÁTICAS DE REFATORAÇÃO
//=========================================================================================

/*
1) Extraia funções pequenas

2) Evite duplicação de código

3) Use nomes claros

4) Prefira funções reutilizáveis

5) Refatore gradualmente
*/



//=========================================================================================
// 07 - DESAFIO
//=========================================================================================

/*
Refatore o código abaixo.

Problemas:

- código duplicado
- difícil de escalar

Código original:
*/

/*
const priceA = 200;
const quantityA = 3;

const priceB = 150;
const quantityB = 2;

const totalA = priceA * quantityA;
const totalB = priceB * quantityB;

const orderTotal = totalA + totalB;

console.log("Order total:", orderTotal);
*/

/*
Tarefa:

1) Criar uma função chamada:

calculateItemTotal(price, quantity)

2) Utilizar essa função para calcular os totais.

3) Manter o mesmo resultado final.

Resultado esperado:

Order total: 900
*/


// RESOLUÇÃO

const priceA = 200;
const quantityA = 3;

const priceB = 150;
const quantityB = 2;


// Função reutilizável
function calculateItemTotal(price, quantity) {
    return price * quantity;
}


const totalA = calculateItemTotal(priceA, quantityA);
const totalB = calculateItemTotal(priceB, quantityB);

const orderTotal = totalA + totalB;

console.log("Order total:", orderTotal);