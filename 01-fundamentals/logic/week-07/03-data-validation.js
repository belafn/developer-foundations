/* ----------------------------------------------------------------------------------------
   03 - DATA VALIDATION (VALIDAÇÃO DE DADOS)
-----------------------------------------------------------------------------------------*/

/*
Validação de dados é o processo de verificar se as informações recebidas
pelo sistema são válidas antes de processá-las.

Sem validação, o sistema pode:

- quebrar em tempo de execução
- gerar resultados incorretos
- armazenar dados inválidos

Validação é uma prática essencial em:

- APIs
- formulários
- bancos de dados
- sistemas financeiros
*/


//=========================================================================================
// 01 - VALIDAÇÃO BÁSICA
//=========================================================================================

/*
Exemplo simples: verificar se um valor é válido antes de usar.
*/

function calculateDiscount(price, discount) {

    if (price <= 0) {
        console.log("Invalid price");
        return;
    }

    if (discount < 0 || discount > 100) {
        console.log("Invalid discount");
        return;
    }

    const finalPrice = price - (price * discount / 100);

    return finalPrice;
}

console.log(calculateDiscount(100, 10));



//=========================================================================================
// 02 - VALIDAÇÃO DE TIPOS
//=========================================================================================

/*
Podemos usar o operador:

typeof

para verificar o tipo de uma variável.
*/

function printUser(name, age) {

    if (typeof name !== "string") {
        console.log("Name must be a string");
        return;
    }

    if (typeof age !== "number") {
        console.log("Age must be a number");
        return;
    }

    console.log(`${name} is ${age} years old`);

}

printUser("Maria", 25);



//=========================================================================================
// 03 - VALIDAÇÃO DE VALORES
//=========================================================================================

/*
Além do tipo, também devemos validar o valor.
*/

function registerProduct(name, price) {

    if (name.length === 0) {
        console.log("Product name cannot be empty");
        return;
    }

    if (price <= 0) {
        console.log("Price must be greater than zero");
        return;
    }

    return {
        name,
        price
    };
}

console.log(registerProduct("Laptop", 5000));



//=========================================================================================
// 04 - USANDO THROW PARA VALIDAÇÃO
//=========================================================================================

/*
Em sistemas mais robustos, ao invés de apenas imprimir mensagens,
podemos lançar erros usando:

throw
*/

function createUser(name, age) {

    if (typeof name !== "string" || name.length === 0) {
        throw new Error("Invalid name");
    }

    if (typeof age !== "number" || age < 0) {
        throw new Error("Invalid age");
    }

    return {
        name,
        age
    };
}

try {

    const user = createUser("Lucas", 30);

    console.log(user);

} catch (error) {

    console.log("Error:", error.message);

}



//=========================================================================================
// 05 - VALIDAÇÃO DE OBJETOS
//=========================================================================================

/*
Muitas vezes recebemos objetos inteiros como entrada.
Precisamos validar suas propriedades.
*/

function validateProduct(product) {

    if (typeof product.name !== "string") {
        throw new Error("Product name must be a string");
    }

    if (typeof product.price !== "number") {
        throw new Error("Product price must be a number");
    }

    if (product.price <= 0) {
        throw new Error("Product price must be greater than zero");
    }

    return true;
}

const product = {
    name: "Monitor",
    price: 1200
};

validateProduct(product);

console.log("Product is valid");



//=========================================================================================
// 06 - BOAS PRÁTICAS
//=========================================================================================

/*
1) Sempre valide dados de entrada

2) Prefira mensagens claras

3) Utilize funções específicas para validação

4) Evite misturar validação com lógica de negócio
*/



//=========================================================================================
// 07 - DESAFIO
//=========================================================================================

/*
Crie uma função chamada:

createProduct(name, price, stock)

Regras de validação:

1) name deve ser string não vazia
2) price deve ser número maior que 0
3) stock deve ser número maior ou igual a 0

Se alguma regra falhar:
→ lançar erro com throw

Caso contrário:
→ retornar o objeto produto

Exemplo esperado:

createProduct("Keyboard", 300, 50)

resultado:

{
  name: "Keyboard",
  price: 300,
  stock: 50
}
*/


// RESOLUÇÃO

function createProduct(name, price, stock) {

    if (typeof name !== "string" || name.length === 0) {
        throw new Error("Invalid product name");
    }

    if (typeof price !== "number" || price <= 0) {
        throw new Error("Price must be greater than zero");
    }

    if (typeof stock !== "number" || stock < 0) {
        throw new Error("Stock must be zero or greater");
    }

    return {
        name,
        price,
        stock
    };
}


try {

    const product = createProduct("Keyboard", 300, 50);

    console.log(product);

} catch (error) {

    console.log("Error:", error.message);

}