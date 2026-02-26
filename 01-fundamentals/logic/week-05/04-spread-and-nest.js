/*
===========================================================================================
   SPREAD & REST — MANIPULAÇÃO E ORGANIZAÇÃO DE DADOS
===========================================================================================

Os operadores spread (...) e rest (...) permitem:

- Copiar objetos e arrays
- Combinar estruturas
- Trabalhar com imutabilidade
- Coletar múltiplos argumentos em funções

São amplamente utilizados em aplicações modernas
e fundamentais para trabalhar com dados de forma segura.
*/


//=========================================================================================
// 01- Spread Operator com Arrays
//=========================================================================================
// O spread permite "espalhar" os elementos de um array.

const numbers = [1, 2, 3];

const newNumbers = [...numbers];

console.log(newNumbers);


//=========================================================================================
// 02- Combinando Arrays
//=========================================================================================

const firstArray = [10, 20];
const secondArray = [30, 40];

const combinedArray = [...firstArray, ...secondArray];

console.log(combinedArray);


//=========================================================================================
// 03- Spread Operator com Objetos
//=========================================================================================
// Permite copiar propriedades de um objeto.

const user = {
    name: "Alice",
    age: 30
};

const copiedUser = { ...user };

console.log(copiedUser);


//=========================================================================================
// 04- Atualizando Objetos de Forma Imutável
//=========================================================================================
// Em vez de alterar diretamente o objeto original,
// criamos uma nova versão com as alterações.

const updatedUser = {
    ...user,
    age: 31
};

console.log(updatedUser);
console.log(user); // permanece inalterado


//=========================================================================================
// 05- Adicionando Novas Propriedades
//=========================================================================================

const userWithRole = {
    ...user,
    role: "Admin"
};

console.log(userWithRole);


//=========================================================================================
// 06- Rest Operator em Arrays
//=========================================================================================
// O rest coleta os elementos restantes.

const [first, ...restNumbers] = [100, 200, 300, 400];

console.log(first);
console.log(restNumbers);


//=========================================================================================
// 07- Rest Operator em Objetos
//=========================================================================================

const { name, ...remainingProperties } = user;

console.log(name);
console.log(remainingProperties);


//=========================================================================================
// 08- Rest Operator em Funções
//=========================================================================================
// Permite receber múltiplos argumentos.

function sum(...values) {

    let total = 0;

    for (const value of values) {
        total += value;
    }

    return total;
}

console.log(sum(10, 20, 30));


//=========================================================================================
// 09- Combinação de Spread e Funções
//=========================================================================================

const prices = [50, 100, 150];

console.log(sum(...prices));


//=========================================================================================
// 10- Desafio Prático
//=========================================================================================

// 1. Crie um objeto chamado "product" contendo:
//    - id
//    - name
//    - price
//    - category

const product - {
    id: 1,
    name: "Laptop",
    price: 4500,
    category: "Electronics"
};


// 2. Crie uma cópia desse objeto alterando apenas o preço.

const updatedProduct = {
    ...product,
    price: 4000
};

console.log(updatedProduct);
console.log(product); // permanece inalterado


// 3. Crie um novo objeto adicionando a propriedade "inStock".

const productWithStock = {
    ...product,
    inStock: true
};

console.log(productWithStock);

// 4. Utilize destructuring com rest para separar:
//    - name
//    - demais propriedades

const { name, ...otherProperties } = product;

console.log(name);
console.log(otherProperties);

// 5. Crie uma função que receba múltiplos produtos
//    utilizando rest como parâmetro.

function registerProducts(...products) {

    console.log("Registered products:");

    for (const item of products) {
        console.log(`- ${item.name} ($${item.price})`);
    }

    return products.length;
}

// Testando a função

const product2 = {
    id: 2,
    name: "Keyboard",
    price: 200,
    category: "Accessories"
};

const product3 = {
    id: 3,
    name: "Mouse",
    price: 100,
    category: "Accessories"
};

console.log("Total registered:", registerProducts(product, product2, product3));