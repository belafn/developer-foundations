/*
===========================================================================================
   DESTRUCTURING — EXTRAINDO DADOS DE OBJETOS E ARRAYS
===========================================================================================

Destructuring permite extrair valores de objetos e arrays
de forma mais limpa e organizada.

Ele torna o código mais legível e é amplamente utilizado
em aplicações modernas (frontend e backend).

Nesta aula você irá praticar:

- Destructuring de objetos
- Renomeação de variáveis
- Valores padrão
- Nested destructuring
- Destructuring em parâmetros de função
*/


//=========================================================================================
// 01- Destructuring básico de objeto
//=========================================================================================

const user = {
   firstName: "Alice",
   lastName: "Johnson",
   age: 30
};

// Forma tradicional
const firstName = user.firstName;
console.log(firstName);

// Com destructuring 
const { age } = user;
console.log(age);

//=========================================================================================
// 02- Extraindo múltiplas propriedades
//=========================================================================================

const { firstName: name, lastName } = user;

console.log(name);
console.log(lastName);

//=========================================================================================
// 03- Renomeando variáveis
//=========================================================================================
// Podemos renomear propriedades durante a extração.

const product = {
   title: "Notebook",
   price: 4500
};

const { title: productName, price: productPrice } = product;

console.log(productName);
console.log(productPrice);

//=========================================================================================
// 04- Valores padrão
//=========================================================================================
// Podemos definir valores padrão caso a propriedade não exista.

const settings = {
   theme: "dark"
};

const { theme, language = "en" } = settings;

console.log(theme);
console.log(language);

//=========================================================================================
// 05- Nested destructuring
//=========================================================================================

const customer = {
   id: 1,
   profile: {
      email: "customer@email.com",
      city: "São Paulo"
   }
};

const { profile: { email, city } } = customer;

console.log(email);
console.log(city);

//=========================================================================================
// 06- Destructuring de arrays
//=========================================================================================

const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log(first);
console.log(second);

//=========================================================================================
// 07- Ignorando valores no array
//=========================================================================================

const [ , , third] = numbers;

console.log(third);

//=========================================================================================
// 08- Destructuring em parâmetros de função
//=========================================================================================
// Muito comum em aplicações reais.

function printUser({ firstName, age }) {
   console.log(`${firstName} is ${age} years old`);
}

printUser(user);

//=========================================================================================
// 09- Combinações com funções
//=========================================================================================

function calculateDiscount({ price, discount = 0 }) {
   return price - discount;
}

const item = {
   price: 200,
   discount: 20
};

console.log(CalculateDiscount(item));

//=========================================================================================
// 10- Desafio Prático
//=========================================================================================

// 1. Crie um objeto chamado "order" contendo:
//    - id
//    - customer (objeto com name e email)
//    - items (array com pelo menos 2 produtos)

const order = {
   id: 1001,
   customer: {
      name: "Isabela Fernandes",
      email: "isabela@email.com"
   },
   items: [
      { name: "Keyboard", price: 200 },
      { name: "Mouse", price: 100}
   ]
};

// 2. Utilize destructuring para:
//    - Extrair o nome do cliente
//    - Extrair o email
//    - Extrair o primeiro item do array

const {
   customer: { name: customerName, email: customerEmail },
   items: [firstItem]
} = order;

console.log(customerName);
console.log(customerEmail);
console.log(firstItem);

// 3. Crie uma função que receba um objeto order
//    e utilize destructuring diretamente no parâmetro.

function printOrderSumary({ id, customer: { name }, items }) {

   console.log("Order Summary");
   console.log(`Order ID: ${id}`);
   console.log(`Customer: ${name}`);
   console.log(`Total items: ${items.length}`);
}

printOrderSummary(order);

