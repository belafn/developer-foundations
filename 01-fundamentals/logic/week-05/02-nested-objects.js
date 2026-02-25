/*
===========================================================================================
   NESTED OBJECTS — OBJETOS ANINHADOS
===========================================================================================

Objetos podem conter outros objetos ou arrays como propriedades.

Estruturas aninhadas (nested) são muito comuns em aplicações reais,
principalmente quando representamos dados mais complexos.

Nesta aula você irá praticar:

- Objetos dentro de objetos
- Arrays dentro de objetos
- Acesso a propriedades profundas
- Atualização de dados aninhados
- Iteração em estruturas complexas
*/

/*
===========================================================================================
   NESTED OBJECTS — OBJETOS ANINHADOS
===========================================================================================

Objetos podem conter outros objetos ou arrays como propriedades.

Estruturas aninhadas (nested) são muito comuns em aplicações reais,
principalmente quando representamos dados mais complexos.

Nesta aula você irá praticar:

- Objetos dentro de objetos
- Arrays dentro de objetos
- Acesso a propriedades profundas
- Atualização de dados aninhados
- Iteração em estruturas complexas
*/


//=========================================================================================
// 01- Objeto com estrutura aninhada
//=========================================================================================
// Um objeto pode conter outro objeto como propriedade.
 
const user = {
    id: 1,
    name: "Alice",
    profile: {
        age: 28,
        email: "alice@email.com"
    }
};

console.log(user);

//=========================================================================================
// 02- Acessando propriedades aninhadas
//=========================================================================================
// Utilizamos múltiplos pontos (dot notation).

console.log(user.profile.email);
console.log(user.profile.age);

//=========================================================================================
// 03- Atualizando valores aninhados
//=========================================================================================
// Podemos alterar propriedades internas normalmente.

user.profile.age = 29;

console.log(user.profile.age);

//=========================================================================================
// 04- Objeto com array interno
//=========================================================================================
// Objetos também podem conter arrays.

const order = {
    orderId: 1001,
    customer: "John",
    items: [
        { name: "Keyboard", price: 200 },
        { name: "Mouse", price: 100 }
    ]
};

console.log(order);

//=========================================================================================
// 05- Acessando dados dentro do array aninhado
//=========================================================================================
// Primeiro acessamos o array, depois o índice.

console.log(order.items[0].name);
console.log(order.items[1].price);

//=========================================================================================
// 06- Adicionando elementos ao array interno
//=========================================================================================
// Podemos usar push() normalmente.

order.items.push({ name: "Monitor", price: 900 });

console.log(order.items);

//=========================================================================================
// 07- Iterando em estruturas aninhadas
//=========================================================================================
// Podemos percorrer o array interno com for...of.

for (const item of order.items) {
    console.log(`${item.name} - $${item.price}`);
}

//=========================================================================================
// 08- Acesso seguro (verificação básica
//=========================================================================================
// É importante verificar se propriedades existem antes de acessá-las.

if (user.profile && user.profile.email) {
    console.log("Email found:", user.profile.email);
}

//=========================================================================================
// 09- Estrutura mais complexa
//=========================================================================================
// Exemplo mais próximo de dados reais.

const company = {
    name: "Tech corp",
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "Lucas", role: "Developer" },
                { name: "Maria", role: "QA Engineer"}
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Ana", role: "Content Strategist" }
            ]
        }
    ]
};

console.log(company)

//=========================================================================================
// 10- Desafio prático
//=========================================================================================
// Utilizando o objeto "company":
//
// 1. Acesse o nome do primeiro funcionário de Engineering.
// 2. Adicione um novo funcionário ao departamento de Marketing.
// 3. Percorra todos os departamentos e imprima:
//
//      Department: Engineering
//      - Lucas (Developer)
//      - Maria (QA Engineer)
//
// 4. Atualize o cargo de um funcionário.
//
// Implemente abaixo:


// 1. Acesse o nome do primeiro funcionário de Engineering

const firstEngineeringEmployee = 
    company.departments[0].employees[0].name;

    console.log(firstEngineeringEmployee);

// 2. Adicione um novo funcionário ao departamento de Marketing

company.departments[1].employees.push({
    name: "Carlos",
    role: "Social Media Manager"
});

console.log(company.departments[1].employees);

// 3. Percorra todos os departamentos e imprima:
//
//      Department: Engineering
//      - Lucas (Developer)
//      - Maria (QA Engineer)

for (const department of company.departments) {
    
    console.log(`Department: ${department.name}`);

    for (const employee of department.employees) {
        console.log(`- ${employee.name} (${employee.role})`);
    }
};

// 4. Atualize o cargo de um funcionário

company.departments[0].employees[1].role = "Senior QA Engineer";

console.log(company.departments[0].employees[1]);

