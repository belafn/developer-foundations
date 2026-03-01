/*
===========================================================================================
   DATA MODELING — ESTRUTURANDO DADOS DE FORMA INTELIGENTE
===========================================================================================

Modelagem de dados é o processo de estruturar informações
de forma organizada, consistente e escalável.

Antes de escrever código, devemos pensar:

- Quais entidades existem?
- Quais propriedades cada entidade possui?
- Como elas se relacionam?
- Quais dados realmente são necessários?

Aqui iremos praticar:

- Definição de entidades
- Organização de propriedades
- Separação de responsabilidades
- Factory functions
- Estruturação consistente
*/


//=========================================================================================
// 01- Identificando Entidades
//=========================================================================================
// Exemplo de cenário: sistema de pedidos (Order System)
//
// Entidades principais:
// - User
// - Product
// - Order
//
// Cada entidade deve ter responsabilidades claras.


//=========================================================================================
// 02- Modelando a Entidade User
//=========================================================================================
// Perguntas importantes:
// - O que define um usuário?
// - Quais dados são essenciais?

const user = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@email.com",
    role: "customer"
};

console.log(user);


//=========================================================================================
// 03- Modelando a Entidade Product
//=========================================================================================

const product = {
    id: 101,
    name: "Laptop",
    price: 4500,
    category: "Electronics",
    inStock: true
};

console.log(product);


//=========================================================================================
// 04- Modelando a Entidade Order
//=========================================================================================
// Um pedido deve conter:
//
// - id
// - user (referência)
// - products (array)
// - totalAmount
// - status

const order = {
    id: 5001,
    userId: user.id,
    products: [
        { productId: product.id, quantity: 1 }
    ],
    totalAmount: 4500,
    status: "pending"
};

console.log(order);


//=========================================================================================
// 05- Separando Dados e Lógica
//=========================================================================================
// Evite misturar lógica diretamente dentro dos objetos.
//
// Em vez disso, crie funções responsáveis por cálculos.

function calculateOrderTotal(products, productList) {

    let total = 0;

    for (const item of products) {
        const foundProduct = productList.find(p => p.id === item.productId);
        total += foundProduct.price * item.quantity;
    }

    return total;
}


//=========================================================================================
// 06- Factory Function
//=========================================================================================
// Factory functions ajudam a criar estruturas padronizadas.

function createProduct(id, name, price, category) {
    return {
        id,
        name,
        price,
        category,
        inStock: true
    };
}

const keyboard = createProduct(102, "Keyboard", 200, "Accessories");

console.log(keyboard);


//=========================================================================================
// 07- Consistência na Estrutura
//=========================================================================================
// Todos os produtos devem seguir o mesmo padrão.

const products = [
    createProduct(201, "Mouse", 150, "Accessories"),
    createProduct(202, "Monitor", 1200, "Electronics"),
    createProduct(203, "Desk", 800, "Furniture")
];

console.log(products);


//=========================================================================================
// 08- Evitando Redundância de Dados
//=========================================================================================
// Em vez de duplicar dados completos dentro do pedido,
// utilize referências (IDs).

const newOrder = {
    id: 6001,
    userId: 1,
    items: [
        { productId: 201, quantity: 2 },
        { productId: 203, quantity: 1 }
    ],
    status: "processing"
};

console.log(newOrder);


//=========================================================================================
// 09- Pensamento Estrutural
//=========================================================================================
// Perguntas importantes:
//
// - Essa estrutura é escalável?
// - Evita duplicação?
// - Está clara?
// - Cada entidade tem responsabilidade definida?
//
// Modelagem correta facilita manutenção futura.


//=========================================================================================
// 10- Desafio Estratégico
//=========================================================================================
//
// 1. Modele um sistema de Blog contendo:
//
//    - Author
//    - Post
//    - Comment
//
// 2. Defina propriedades essenciais para cada entidade.
//
// 3. Crie uma factory function para criar Posts.
//
// 4. Estruture um array de posts com comentários aninhados.
//
// 5. Evite duplicação desnecessária de dados.
//
// Implemente abaixo:
//
//-----------------------------------------------------------------------------------------
// 1- Entidade Author
//-----------------------------------------------------------------------------------------

const authors = [
    {
        id: 1,
        name: "Isabela Ferreira",
        email: "isabela@email.com",
        bio: "Frontend Developer in training"
    }, 
    {
        id: 2,
        name: "Carlos Silva",
        email: "carlos@email.com",
        bio: "Backend Developer"
    }
];

//-----------------------------------------------------------------------------------------
// 2- Factory function para post
//-----------------------------------------------------------------------------------------
// Cada post deve conter:
//
// - id
// - authorId (referência)
// - title
// - content
// - comments (array)

function createPost(id, authorId, title, content) {
    return {
        id,
        authorId,
        title,
        content,
        comments: []
    };
}

//-----------------------------------------------------------------------------------------
// 3- Entidade comment
//-----------------------------------------------------------------------------------------
// Comentários devem conter:
//
// - id
// - authorName (simplificado)
// - message

function createComment(id, authorName, message) {
    return {
        id,
        authorName,
        message
    };
}

//-----------------------------------------------------------------------------------------
// 4- Criando posts
//-----------------------------------------------------------------------------------------

const posts = [
    createPost(
        101,
        1,
        "Understanding JavaScript Objects",
        "Objects are fundamental structures in JavaScript..."
    ),
    createPost(
        102,
        2,
        "Backend Architecture Basics",
        "Designing scalable systems requires planning..."
    )
];

//-----------------------------------------------------------------------------------------
// 5- Adicionando comentários aos posts
//-----------------------------------------------------------------------------------------

posts[0].comments.push(
    createComment(1, "Ana", "Great explanation!"),
    createComment(2, "Lucas", "Very helpful, thanks!")
);
posts[1].comments.push(
    createComment(3, "Maria", "Nice overview of backend concepts.")
);

console.log(posts);


