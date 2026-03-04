/* =================================================================================================
   ADVANCED ARRAY METHODS - MÉTODOS AVANÇADOS DE ARRAY
================================================================================================= */

/*
OBJETIVO:
Aprofundar o uso de Array Methods com abordagem funcional e profissional.

Tópicos:

- map (transformação)
- filter (filtragem)
- reduce (agregação)
- some / every (validação)
- find / findIndex (busca)
- sort (ordenção com comparator)
- flat / flatMap
- method chaining
- imutabilidade aplicada a arrays

Abordagem declarativa > abordagem imperativa.
*/


/* ================================================================================================
   BASE DE DADOS PARA EXEMPLOS
================================================================================================= */

const products = [
    { id: 1, name: "Notebook", price: 4500, category: "tech", stock: 10 },
    { id: 2, name: "Mouse", price: 150, category: "tech", stock: 50 },
    { id: 3, name: "Cadeira Gamer", price: 1200, category: "furniture", stock: 5 },
    { id: 4, name: "Teclado Mecânico", price: 600, category: "tech", stock: 0 },
    { id: 5, name: "Mesa Escritório", price: 900, category: "furniture", stock: 8 }
];


/* ================================================================================================
   01- MAP — TRANSFORMAÇÃO DE DADOS
================================================================================================= */

// Retornar apenas nomes dos produtos

const productNames = products.map(product => product.name);

console.log("MAP:", productNames);


/* ================================================================================================
   02- FILTER — FILTRAGEM CONDICIONAL
================================================================================================= */

// Produtos disponíveis em estoque

const availableProducts = products.filter(product => product.stock > 0);

console.log("FILTER:", availableProducts);


/* ================================================================================================
   REDUCE — AGREGAÇÃO DE VALORES
================================================================================================= */

// Valor total potencial do estoque (price * stock)

const totalInventoryValue = products.reduce((accumulator, product) => {
    return accumulator + product.price * product.stock;
}, 0);

console.log("REDUCE:", totalInventoryValue);


/* ================================================================================================
   04- SOME E EVERY — VALIDAÇÃO
================================================================================================= */

// Existe produto sem estoque?

const hasOutOfStock = products.some(product => product.stock === 0);

// Todos possuem preço acima de 100?

const allAbove100 = products.every(product => product.price > 100);

console.log("SOME:", hasOutOfStock);
console.log("EVERY:", allAbove100);


/* ================================================================================================
   05- FIND E FINDINDEX — BUSCA
================================================================================================= */

// Encontrar produto pelo id

const productById = products.find(product => product.id === 3);

// Índice do produto sem estoque

const outOfStockIndex = products.findIndex(product => product.stock === 0);

console.log("FIND:", productById);
console.log("FIND INDEX:", outOfStockIndex);


/* ================================================================================================
   06- SORT — ORDENAÇÃO COM COMPARATOR
================================================================================================= */

/*
IMPORTANTE:
sort() modifica o array original.
Para manter imutabilidade, fazemos cópia com spread.
*/

// Ordenar por preço crescente

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

console.log("SORT:", sortedByPrice);


/* ================================================================================================
   07- FLAT E FLATMAP
================================================================================================= */

const categories = [
    ["tech", "furniture"],
    ["books", "clothing"]
];

const flattenedCategories = categories.flat();

console.log("FLAT:", flattenedCategories);

// flatMap: map + flat em uma única operação

const productTags = products.flatMap(product => [
    product.category,
    product.name.toLowerCase()
]);

console.log("FLATMAP:", productTags);


/* ================================================================================================
   08- METHOD CHAINING (ABORDAGEM DECLARATIVA)
================================================================================================= */

/*
Objetivo:
- Filtrar produtos disponíveis
- Aplicar desconto de 10%
- Ordenar por preço
- Retornar apenas nome e novo preço
*/

const processedProducts = products
    .filter(product => product.stock > 0)
    .map(product => ({
        name: product.name,
        discountedPrice: product.price * 0.9
    }))
    .sort((a, b) => a.discountedPrice - b.discountedPrice);

console.log("CHAINING:", processedProducts);


/* ================================================================================================
   09- IMPERATIVO vs DECLARATIVO
================================================================================================= */

// Imperativo (usando loop)

let techProductsImperative = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].category === "tech") {
        techProductsImperative.push(products[i]);
    }
}

console.log("IMPERATIVE:", techProductsImperative);

// Declarativo (mais legível e profissional)

const techProductsDeclarative = products.filter(product => product.category === "tech");

console.log("DECLARATIVE:", techProductsDeclarative);


/* ================================================================================================
   10- BOAS PRÁTICAS PROFISSIONAIS
================================================================================================= */

/*
✔ Evite mutação desnecessária
✔ Prefira const para arrays que não serão reatribuídos
✔ Use nomes descritivos para callbacks
✔ Sempre forneça valor inicial ao reduce
✔ Evite encadeamentos excessivamente longos sem legibilidade
*/


/* ================================================================================================
   DESAFIO
================================================================================================= */

/*
1. Retorne o valor total apenas dos produtos da categoria "tech".

2. Gere um novo array contendo:
   - name
   - inventoryValue (price * stock)
   Apenas para produtos com estoque maior que 0.

3. Verifique se existe algum produto com preço acima de 5000.

4. Ordene os produtos por estoque (decrescente), sem modificar o array original.

5. Explique (em comentário) por que sort pode ser perigoso em sistemas reais.
*/

// RESOLUÇÃO:

const totalTechValue = products  
   .filter(p => p.category === "tech")
   .reduce((acc, p) => acc + p.price * p.stock, 0);

const inventorySummary = products
   .filter(p => p.stock > 0) 
   .map(p => ({
      name: p.name,
      inventoryValue: p.price * p.stock
   }));
    
const hasExpensiveProduct = products.some(p => p.price > 5000);

const sortedByStockDesc = [...products]
   .sort((a,b) => b.stock - a.stock);

console.log({
   totalTechValue,
   inventorySummary,
   hasExpensiveProduct,
   sortedByStockDesc
});

/*
sort() é mutável.

Ele altera o array original.

Em aplicações reais isso pode causar:

- Estado inconsistente
- Bugs difíceis de rastrear
- Componentes renderizando dados inesperados
- Quebra de previsibilidade

Exemplo clássico:
Um array compartilhado é ordenado em um módulo
e outro módulo passa a receber dados em ordem diferente.

Solução:
Sempre usar cópia antes:
[...array].sort(...)
*/