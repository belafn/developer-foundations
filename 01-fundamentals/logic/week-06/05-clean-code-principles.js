/* =============================================================================
   CLEAN CODE PRINCIPLES - PRINCÍPIOS PARA UM CÓDIGO LIMPO
============================================================================= */

/*
Objetivo deste arquivo:

Apresentar alguns princípios básicos de Clean Code aplicados em JavaScript.

Clean Code significa escrever código que seja:

- fácil de ler
- fácil de entender
- fácil de manter
- fácil de modificar

Nesta aula veremos:

1. nomes claros para variáveis e funções
2. funções pequenas e com responsabilidade única
3. evitar repetição de código (DRY)
4. evitar funções muito complexas
5. organizar melhor a lógica do programa
*/


/* =============================================================================
   1. NOMES SIGNIFICATIVOS
============================================================================= */

/*
Variáveis e funções devem ter nomes que expliquem claramente
o que representam.

Evite nomes genéricos ou pouco descritivos.
*/

// exemplo ruim
const x = 10;
const y = 5;

function calc(a, b) {
    return a * b;
}


// exemplo melhor
const productPrice = 10;
const productQuantity = 5;

function calculateTotalPrice(price, quantity) {
    return price * quantity;
}



/* =============================================================================
   2. FUNÇÕES PEQUENAS
============================================================================= */

/*
Funções devem ser pequenas e focadas em uma única responsabilidade.

Isso melhora:

- leitura
- reutilização
- manutenção
*/

// exemplo ruim
function processUserData(user) {

    const name = user.name.toUpperCase();
    const age = user.age;

    if (age >= 18) {
        console.log(`${name} is an adult`);
    } else {
        console.log(`${name} is a minor`);
    }

}


// exemplo melhor
function formatUserName(name) {
    return name.toUpperCase();
}

function checkIfAdult(age) {
    return age >= 18;
}

function processUserData(user) {

    const name = formatUserName(user.name);
    const isAdult = checkIfAdult(user.age);

    if (isAdult) {
        console.log(`${name} is an adult`);
    } else {
        console.log(`${name} is a minor`);
    }

}



/* =============================================================================
   3. EVITAR REPETIÇÃO (DRY)
============================================================================= */

/*
DRY significa:

Don't Repeat Yourself

Evite repetir a mesma lógica em vários lugares do código.
*/

// exemplo ruim
const price1 = 50;
const price2 = 30;

const total1 = price1 + (price1 * 0.1);
const total2 = price2 + (price2 * 0.1);


// exemplo melhor
function applyTax(price) {
    const taxRate = 0.1;
    return price + (price * taxRate);
}

const totalPrice1 = applyTax(50);
const totalPrice2 = applyTax(30);



/* =============================================================================
   4. EVITAR FUNÇÕES MUITO COMPLEXAS
============================================================================= */

/*
Funções com muitas responsabilidades ficam difíceis de entender.

Dividir a lógica em funções menores torna o código mais claro.
*/

// exemplo
function calculateAverage(numbers) {

    const total = numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);

    return total / numbers.length;
}



/* =============================================================================
   5. ORGANIZAÇÃO DO CÓDIGO
============================================================================= */

/*
Uma boa organização ajuda outros desenvolvedores a entenderem
rapidamente o que o código faz.

Boas práticas:

- separar lógica em funções
- usar nomes claros
- manter funções curtas
- evitar código duplicado
- manter consistência na estrutura do código
*/


/* =============================================================================
   DESAFIO
============================================================================= */

/*
Refatore o código abaixo aplicando princípios de Clean Code.

Objetivos:

- melhorar nomes de variáveis
- extrair funções
- melhorar legibilidade
*/


// código inicial

function calc(p, q) {

    const r = p * q;

    if (r > 100) {
        console.log("big order");
    } else {
        console.log("small order");
    }

}


// tarefa:

// 1. melhorar os nomes das variáveis
// 2. criar funções auxiliares
// 3. deixar o código mais claro

// RESOLUÇÃO

function calculateOrderTotal(price, quantity) {
    return price * quantity;
}


function classifyOrder(total) {

    if (total > 100) {
        console.log("big order");
    } else {
        console.log("small order");
    }

}


function processOrder(price, quantity) {

    const total = calculateOrderTotal(price, quantity);

    classifyOrder(total);

}

// exemplo de uso

processOrder(20, 3);