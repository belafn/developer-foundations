/* ----------------------------------------------------------------------------------------
   04 - LAYERED LOGIC (ORGANIZAÇÃO EM CAMADAS)
-----------------------------------------------------------------------------------------*/

/*
Em programas simples é comum misturar tudo:

- dados
- cálculos
- exibição de resultados

Isso funciona em scripts pequenos, mas em sistemas maiores
gera código difícil de manter.

Uma solução comum é separar a lógica em camadas (layers).

Camadas básicas:

1) Data Layer
2) Business Logic
3) Presentation Layer
*/


//=========================================================================================
// 01 - EXEMPLO SEM ORGANIZAÇÃO
//=========================================================================================

/*
Aqui tudo está misturado no mesmo lugar.
*/

const productsMixed = [
    { name: "Laptop", price: 5000 },
    { name: "Mouse", price: 100 },
    { name: "Keyboard", price: 300 }
];

let totalMixed = 0;

for (const product of productsMixed) {
    totalMixed += product.price;
}

console.log("Total:", totalMixed);



/*
Problema:

- dados
- cálculo
- saída

tudo está no mesmo bloco de código.
*/


//=========================================================================================
// 02 - DATA LAYER (CAMADA DE DADOS)
//=========================================================================================

/*
Responsável por armazenar ou fornecer os dados.
*/

const products = [
    { name: "Laptop", price: 5000 },
    { name: "Mouse", price: 100 },
    { name: "Keyboard", price: 300 }
];



//=========================================================================================
// 03 - BUSINESS LOGIC (REGRAS DE NEGÓCIO)
//=========================================================================================

/*
Responsável pelos cálculos e regras do sistema.
*/

function calculateTotal(products) {

    return products.reduce(function(total, product) {
        return total + product.price;
    }, 0);

}



//=========================================================================================
// 04 - PRESENTATION LAYER (SAÍDA)
//=========================================================================================

/*
Responsável por exibir resultados.
*/

function printTotal(products) {

    const total = calculateTotal(products);

    console.log("Total:", total);

}

printTotal(products);



//=========================================================================================
// 05 - VANTAGENS DA SEPARAÇÃO EM CAMADAS
//=========================================================================================

/*
1) Código mais organizado

2) Funções mais reutilizáveis

3) Mais fácil de testar

4) Mais fácil de manter

Exemplo:

A função calculateTotal pode ser usada em:

- API
- interface web
- relatório
- testes
*/



//=========================================================================================
// 06 - EXEMPLO MAIS COMPLETO
//=========================================================================================

function getProductNames(products) {

    return products.map(function(product) {
        return product.name;
    });

}

function printProductNames(products) {

    const names = getProductNames(products);

    console.log("Products:");
    console.log(names);

}

printProductNames(products);



//=========================================================================================
// 07 - DESAFIO
//=========================================================================================

/*
Utilize o padrão de camadas para criar um pequeno sistema
de cálculo de estoque.

Dados:

const inventory = [
    { name: "Laptop", price: 5000, stock: 5 },
    { name: "Mouse", price: 100, stock: 10 },
    { name: "Keyboard", price: 300, stock: 8 }
];

Tarefas:

1) Criar uma função chamada:

calculateInventoryValue(inventory)

Essa função deve calcular:

price * stock de cada produto
e retornar o valor total do estoque.

2) Criar uma função chamada:

printInventoryValue(inventory)

Essa função deve imprimir o resultado no console.

Resultado esperado (aproximado):

Total inventory value: 30900
*/


// RESOLUÇÃO

//=========================================================================================
// DATA LAYER
//=========================================================================================

const inventory = [
    { name: "Laptop", price: 5000, stock: 5 },
    { name: "Mouse", price: 100, stock: 10 },
    { name: "Keyboard", price: 300, stock: 8 }
];



//=========================================================================================
// BUSINESS LOGIC
//=========================================================================================

function calculateInventoryValue(inventory) {

    let total = 0;

    for (const product of inventory) {
        total += product.price * product.stock;
    }

    return total;

}



//=========================================================================================
// PRESENTATION LAYER
//=========================================================================================

function printInventoryValue(inventory) {

    const totalValue = calculateInventoryValue(inventory);

    console.log("Total inventory value:", totalValue);

}

printInventoryValue(inventory);