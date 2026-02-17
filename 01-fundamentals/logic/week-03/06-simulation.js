/* ----------------------------------------------------------------------------------------
   06 - SIMULATION — PRODUCT INVENTORY SYSTEM
-----------------------------------------------------------------------------------------*/
// Objetivo:
// Integrar os principais conceitos da Week 03:
//
// - loops
// - arrays
// - array methods (map, filter, reduce)
// - string methods
// - condicionais
//
// A proposta é simular um pequeno sistema de controle de estoque.

//=========================================================================================
// 01- Base de dados
//=========================================================================================
// Crie um array de objetos representando produtos.
// Cada produto deve conter:
//
// - name (string)
// - price (number)
// - quantity (number)
// - category (string)

const products = [
    {
        name: " Dining chair ",
        price: 290,
        quantity: 8,
        category: "Dining room",
    }, 
    {
        name: "Desk",
        price: 400,
        quantity: 3,
        category: "Office",
    }, 
    {
        name: "Bookcase",
        price: 520,
        quantity: 10,
        category: "Office",
    },
    {
        name: "Coffee table",
        price: 350,
        quantity: 7,
        category: "Living Room",
    },
    {
        name: "Toy storage unit",
        price: 150,
        quantity: 15,
        category: "Kids & Nursery",
    },
    {
        name: "TV stand",
        price: 950,
        quantity: 2,
        category: "Living Room",
    },
    {
        name: "Bed",
        price: 1200,
        quantity: 10,
        category: "Bedroom",
    },
    {
        name: "Sofa",
        price: 2500,
        quantity: 9,
        category: "Living Room",
    },
    {
        name: "Wardrobe",
        price: 1500,
        quantity: 5,
        category: "Bedroom",
    },
    {
        name: "Floor lamp",
        price: 180,
        quantity: 20,
        category: "Lighting",
    }
];


//=========================================================================================
// 02- Normalização de dados
//=========================================================================================
// Percorra os produtos e:
//
// - Remova espaços extras do nome (trim)

    const normalizedProducts = products.map( product => {
        return {
        ... product, // copia todas as propriedades existentes
        name: product.name.trim()
        };
    });

    console.log(normalizedProducts);

// - Converta a categoria para minúsculo (toLowerCase)

const lowerCaseProducts = products.map( product => {
        return {
        ... product, 
        category: product.category.toLowerCase()
        };
    });
    console.log(lowerCaseProducts);

// Utilize forEach() ou outro loop.

products.forEach(product => {
    product.name = product.name.trim();
    product.category = product.category.toLowerCase();
});

console.log(products);


//=========================================================================================
// 03- Cálculo de valor em estoque
//=========================================================================================
// Para cada produto:
//
// - Calcule o valor total (price * quantity)
// - Armazene esse valor em uma nova propriedade: totalValue
//
// Utilize um loop ou map().

const productsWithTotal = products.map(product=> {
    return {
        ...product,
        totalValue: product.price * product.quantity
    };
});

console.log(productsWithTotal);

//=========================================================================================
// 04- Filtro de produtos com baixo estoque
//=========================================================================================
// Crie um novo array contendo apenas produtos com:
//
// quantity <= 5
//
// Utilize filter().

const lowStockProducts = products.filter(product => {
    return product.quantity  <= 5;
});

console.log(lowStockProducts);

//=========================================================================================
// 05- Cálculo do valor total do inventário
//=========================================================================================
// Calcule o valor total de TODOS os produtos somados.
//
// Utilize reduce().

const totalInventoryValue = products.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
}, 0);

console.log("Valor total dos produtos SOMADOS:", totalInventoryValue);

//=========================================================================================
// 06- Busca por categoria
//=========================================================================================
// Crie uma variável searchCategory.
// Filtre os produtos que pertencem a essa categoria.
//
// Utilize includes() para permitir correspondência parcial.

const searchCategory = "living";

const filteredByCategory = products.filter(product =>
    product.category.toLowerCase().includes(searchCategory.toLowerCase())
);

console.log(filteredByCategory);

//=========================================================================================
// 07- Relatório final
//=========================================================================================
// Exiba:
//
// - Lista de todos os produtos
// - Produtos com baixo estoque
// - Valor total do inventário
// - Produtos filtrados por categoria
//
// Organize os console.log de forma clara e estruturada.

console.log("========================================");
console.log("        PRODUCT INVENTORY REPORT        ");
console.log("========================================");

// 01- Lista completa de produtos
console.log("1) ALL PRODUCTS:");
console.log(products);
console.log("\n----------------------------------------\n");

// 02- Produtos com baixo estoque
console.log("2) LOW STOCK PRODUCTS (quantity <= 5):");
console.log(lowStockProducts);
console.log("\n----------------------------------------\n");

// 03- Valor total do inventário
console.log("3) TOTAL INVENTORY VALUE:")
console.log(`$ ${totalInventoryValue}`);
console.log("\n----------------------------------------\n");

// 04- Produtos filtrados por categoria
console.log(`4) PRODUCTS FILTERED BY CATEGORY ("${searchCategory}"):`);

if (filteredByCategory.length > 0) {
    console.log(filteredByCategory);
} else {
    console.log("No products found for this category");
}

console.log("\n----------------------------------------\n");
console.log("END OF REPORT");
console.log("\n----------------------------------------\n");

//=========================================================================================
// 08- EXTRA: Produto com maior valor em estoque
//=========================================================================================
//Proposta: encontrar o produto com maior totalValue.

const productWithHighestValue = products.reduce((highest, product) => {
    const currentTotal = product.price * product.quantity;
    const highestTotal = highest.price * highest.quantity;

    return currentTotal > highestTotal ? product : highest;
});

console.log("HIGHEST VALUE PRODUCT:")
console.log(productWithHighestValue);

// Reduce() começa comparando o primeiro produto com o segundo.
// Sempre mantém o que tiver maior valor total.
// No final, retorna o produto campeão.

//=========================================================================================
// 09- EXTRA: Valor total por categoria (Conteúdo avançado)
//=========================================================================================
// Proposta: agrupar produtos por categoria e calcular o valor total de cada uma.

const inventoryByCategory = products.reduce((acc, product) => {
    const category = product.category;
    const totalValue = product.price * product.quantity;

    if(!acc[category]) {
        acc[category] = 0;
    }

    acc[category] += totalValue;

    return acc;

}, {});

console.log("TOTAL VALUE BY CATEGORY:");
console.log(inventoryByCategory);


//=========================================================================================
// DESAFIO EXTRA
//=========================================================================================
// Implemente uma regra:
//
// - Se o valor total do inventário for maior que 10000,
//   exibir mensagem indicando alto capital parado em estoque.
//
// Utilize condicional para essa verificação.

if (totalInventoryValue > 10000) {
    console.log(`⚠ High capital tied up in inventory: $${totalInventoryValue}`);
} else {
    console.log(`Inventory under control: $${totalInventoryValue}`);
};
//=========================================================================================
// CONCLUSÃO
//=========================================================================================
// Esta simulação integra:
//
// - Estruturas de repetição
// - Manipulação de arrays
// - Métodos fundamentais de array
// - Métodos de string
// - Condições e regras de negócio
//
// O objetivo é consolidar a lógica aplicada em um cenário
// mais próximo de situações reais de desenvolvimento.
