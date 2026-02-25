/*
===========================================================================================
   OBJETOS — CONCEITOS BÁSICOS
===========================================================================================

Objetos permitem representar entidades do mundo real através de propriedades.

Eles armazenam dados em pares chave: valor.

São fundamentais para estruturar informações em aplicações reais.
*/


//=========================================================================================
// 01- Criação de objeto
//=========================================================================================

// Estrutura básica
// const nome = {
//     propriedade: valor
// }

const product = {
    name: "Laptop",
    price: 2500,
    inStock: true
};

console.log(product);

//=========================================================================================
// 02- Acessando propriedades
//=========================================================================================
// Existem duas formas principais:
//
// - Dot notation
// - Bracket notation

// Dot notation
console.log(product.name)

// Bracket notation
console.log(product["price"]);

//=========================================================================================
// 03- Atualizando propriedades
//=========================================================================================
// Podemos alterar o valor de uma propriedade existente.

product.price = 2200;

console.log(product);

//=========================================================================================
// 04- Adicionando novas propriedades
//=========================================================================================
// Basta atribuir uma nova chave ao objeto

product.category = "Electronics";

console.log(product);

//=========================================================================================
// 05- Removendo propriedades
//=========================================================================================
// Utilizamos o operador delete

delete product.inStock;

console.log(product);

//=========================================================================================
// 06- Object.keys()
//=========================================================================================
// Retorna um array contendo todas as chaves do objeto

const keys = Object.keys(product);

console.log(keys);

//=========================================================================================
// 07- Object.values()
//=========================================================================================
// Retorna um array contendo todos os valores do objeto

const values = Object.values(product);

console.log(values);

//=========================================================================================
// 08- Objects.entries()
//=========================================================================================
// Retorna um array de pares [chave, valor].

const entries = Object.entries(product);

console.log(entries);

//=========================================================================================
// 09- Iterando sobre um objeto
//=========================================================================================
// Podemos utilizar Object.entries() junto com for...of.

for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
}

//=========================================================================================
// 10- Desafio prático
//=========================================================================================
// Crie um objeto chamado "user" contendo:
//
// - firstName
// - lastName
// - age
// - email
//
// depois:
//
// 1. Acesse e imprima o email.
// 2. Atualize a idade.
// 3. Adicione a propriedade "isAdmin".
// 4. Remova a propriedade "email".
// 5. Liste todas as chaves utilizando Object.keys().
//
// Implemente abaixo: 

// Criação do objeto user:

const user = {
    firstName: "Isabela",
    lastName: "Fernandes",
    age: 25,
    email: "isabela@gmail.com"
};

// 1. Acesse e imprima o email

console.log(user.email);

// 2. Atualize a idade

user.age = 27;

console.log(user.age);

// 3. Adicione a propriedade "isAdmin"

user.isAdmin = false;

console.log(user);

// 4. Remova a propriedade "email"

delete user.email;

console.log(user);

// 5. Liste todas as chaves utilizando Object.keys()

const userKeys = Object.keys(user);

console.log(userKeys);
