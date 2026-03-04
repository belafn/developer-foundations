/* =================================================================================================
   IMMUTABILITY - IMUTABILIDADE
================================================================================================= */

/*
OBJETIVO:
Compreender o conceito de imutabilidade em JavaScript
e aplicá-lo corretamente em arrays e objetos.

Tópicos:

- Mutação vs Imutação
- Tipos primitivos vs tipos de referência
- Cópia superficial (shallow copy)
- Spread operator
- Object.assign
- Atualização imutável de objetos
- Atualização imutável de arrays
- Por que isso é importante em sistemas reais
*/


/* ================================================================================================
   01- MUTAÇÃO vs IMUTAÇÃO
================================================================================================= */

/*
Mutação:
Alterar diretamente o valor original.

Imutação:
Criar uma nova estrutura com as alterações,
sem modificar o original.
*/


/* ================================================================================================
   02- TIPOS PRIMITIVOS (IMUTÁVEIS POR NATUREZA)
================================================================================================= */

let name = "Isabela";

let newName = name;

newName = "Maria";

console.log("Original:", name);      // Isabela
console.log("Cópia:", newName);      // Maria

/*
Strings, numbers, boolean, null, undefined e bigint
são imutáveis por natureza.
*/


/* ================================================================================================
   03- TIPOS DE REFERÊNCIA (OBJETOS E ARRAYS)
================================================================================================= */

const user = {
    name: "Isabela",
    role: "Developer"
};

const userCopy = user;

userCopy.role = "Tech Lead";

console.log("Objeto original modificado:", user);

/*
Aqui houve MUTAÇÃO.
Ambas variáveis apontam para o mesmo endereço de memória.
*/


/* ================================================================================================
   04- SHALLOW COPY (CÓPIA SUPERFICIAL)
================================================================================================= */

const originalUser = {
    name: "Carlos",
    role: "Backend",
};

const updatedUser = { ...originalUser, role: "Fullstack" };

console.log("Original:", originalUser);
console.log("Novo objeto:", updatedUser);

/*
Spread (...) cria uma nova referência.
Mas é uma cópia superficial (shallow copy).
*/


/* ================================================================================================
   05- PROBLEMA DO SHALLOW COPY (OBJETOS ANINHADOS)
================================================================================================= */

const company = {
    name: "Tech Corp",
    address: {
        city: "São Paulo",
        state: "SP"
    }
};

const newCompany = { ...company };

newCompany.address.city = "Rio de Janeiro";

console.log("Original afetado:", company.address.city);

/*
Mesmo usando spread, objetos aninhados
continuam compartilhando referência.
*/


/* ================================================================================================
   06- ATUALIZAÇÃO IMUTÁVEL DE OBJETOS ANINHADOS
================================================================================================= */

const updatedCompany = {
    ...company,
    address: {
        ...company.address,
        city: "Belo Horizonte"
    }
};

console.log("Atualização imutável:", updatedCompany);
console.log("Original preservado:", company);


/* ================================================================================================
   07- IMUTABILIDADE COM ARRAYS
================================================================================================= */

const numbers = [1, 2, 3];

// MUTÁVEL
numbers.push(4);

console.log("Mutado:", numbers);

// IMUTÁVEL
const newNumbers = [...numbers, 5];

console.log("Novo array:", newNumbers);


/* ================================================================================================
   08- MÉTODOS QUE MUTAM vs NÃO MUTAM
================================================================================================= */

/*
MUTAM:
- push
- pop
- shift
- unshift
- splice
- sort
- reverse

NÃO MUTAM:
- map
- filter
- reduce
- slice
- concat
*/


/* ================================================================================================
   09- EXEMPLO REALISTA — ATUALIZAÇÃO DE ESTADO
================================================================================================= */

const products = [
    { id: 1, name: "Notebook", stock: 10 },
    { id: 2, name: "Mouse", stock: 20 }
];

// Atualizar estoque do produto id 1 sem mutar o array original

const updatedProducts = products.map(product =>
    product.id === 1
        ? { ...product, stock: product.stock - 1 }
        : product
);

console.log("Original:", products);
console.log("Atualizado:", updatedProducts);


/* ================================================================================================
   10- POR QUE IMUTABILIDADE É IMPORTANTE?
================================================================================================= */

/*
✔ Evita efeitos colaterais inesperados
✔ Facilita debug
✔ Melhora previsibilidade
✔ Essencial para React e gerenciamento de estado
✔ Facilita testes automatizados
✔ Permite otimizações de performance (comparação por referência)
*/


/* ================================================================================================
   11- BOAS PRÁTICAS PROFISSIONAIS
================================================================================================= */

/*
✔ Nunca modifique parâmetros diretamente
✔ Prefira retornar novos objetos
✔ Use const sempre que possível
✔ Documente quando uma função for intencionalmente mutável
✔ Evite mutação em estruturas compartilhadas
*/


/* ================================================================================================
   DESAFIO
================================================================================================= */

/*
1. Crie uma função addProduct que:
   - Receba um array de produtos
   - Receba um novo produto
   - Retorne um novo array sem modificar o original

2. Crie uma função updateStock que:
   - Receba um array
   - Receba um id
   - Receba uma nova quantidade
   - Retorne um novo array atualizado de forma imutável

3. Explique (em comentário) a diferença entre shallow copy e deep copy.

4. Explique por que sort() pode gerar bugs em aplicações reais.
*/

// RESOLUÇÃO

const addProduct = (productList, newProduct) => {
   return [...productList, newProduct];
};

const updateStock = (productList, productId, newStock) => {
   return productList.map(product =>
      product.id === productId
      ? { ...product, stock: newStock }
      : product
   );
};

/*
Shallow Copy:
- Copia apenas o primeiro nível
- Objetos internos continuam referenciados

Deep Copy:
- Copia todos os níveis
- Nenhuma referência compartilhada
*/

/*
sort() é mutável e pode gerar bugs ao alterar o estado original.
Sempre usar cópia antes: [...array].sort(...)
*/