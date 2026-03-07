/* =================================================================================================
   MODULES INTRO - INTRODUÇÃO A MÓDULOS EM JAVASCRIPT
================================================================================================= */

/*
OBJETIVO:
Compreender como organizar código em múltiplos arquivos utilizando
o sistema de módulos do JavaScript moderno (ES Modules).

Tópicos:

- O problema de arquivos muito grandes
- Separação de responsabilidades
- O que são módulos
- Exportações nomeadas (named exports)
- Exportação padrão (default export)
- Importações com alias
- Namespace imports
- Diferença entre tipos de export
- Boas práticas profissionais
*/


/* ================================================================================================
   01 - O PROBLEMA: ARQUIVOS MUITO GRANDES
================================================================================================ */

/*
Projetos iniciantes costumam começar com um único arquivo JS.

Com o crescimento surgem problemas:

- Arquivo gigante
- Código difícil de navegar
- Funções sem organização
- Dificuldade de reutilização
- Conflitos de git em equipe

Exemplo ruim:

main.js
 ├ funções matemáticas
 ├ validações
 ├ formatação
 ├ lógica da aplicação
 └ manipulação de DOM

A solução profissional: **MÓDULOS**.
*/


/* ================================================================================================
   02 - O QUE SÃO MÓDULOS
================================================================================================ */

/*
Um módulo é simplesmente um arquivo JavaScript que:

- possui escopo próprio
- exporta funcionalidades
- importa funcionalidades de outros módulos
- representa uma responsabilidade específica

Exemplo de estrutura:

project/
│
├── math/
│   └── operations.js
│
├── format/
│   └── currency.js
│
├── validation/
│   └── email.js
│
└── app.js
*/


/* ================================================================================================
   03 - NAMED EXPORTS
================================================================================================ */

/*
Arquivo: math/operations.js
*/

export function somar(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function subtrair(a, b) {
    return a - b;
}

/*
Também poderíamos fazer:

function somar() {}
function multiplicar() {}
function subtrair() {}

export { somar, multiplicar, subtrair };
*/


/* ================================================================================================
   04 - IMPORTANDO NAMED EXPORTS
================================================================================================ */

/*
Arquivo: app.js
*/

import { somar, multiplicar } from "./math/operations.js";

const somaResultado = somar(10, 5);
const multiplicacaoResultado = multiplicar(4, 3);

console.log("Soma:", somaResultado);
console.log("Multiplicação:", multiplicacaoResultado);


/* ================================================================================================
   05 - DEFAULT EXPORT
================================================================================================ */

/*
Arquivo: format/currency.js
*/

export default function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2)}`;
}

/*
Importação:

import formatarMoeda from "./format/currency.js";

console.log(formatarMoeda(25));
*/


/* ================================================================================================
   06 - DEFAULT + NAMED EXPORTS
================================================================================================ */

/*
Arquivo: validation/email.js
*/

export default function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

export const dominiosPermitidos = [
    "gmail.com",
    "outlook.com",
    "empresa.com"
];

export function extrairDominio(email) {
    return email.split("@")[1];
}

/*
Importação combinada:

import validarEmail, {
    dominiosPermitidos,
    extrairDominio
} from "./validation/email.js";
*/


/* ================================================================================================
   07 - IMPORT COM ALIAS
================================================================================================ */

/*
Podemos renomear importações para evitar conflito de nomes
ou melhorar legibilidade.
*/

import {
    somar as adicionar,
    multiplicar as vezes
} from "./math/operations.js";

const resultadoAlias1 = adicionar(5, 5);
const resultadoAlias2 = vezes(5, 5);

console.log(resultadoAlias1);
console.log(resultadoAlias2);


/* ================================================================================================
   08 - NAMESPACE IMPORT
================================================================================================ */

/*
Importa TUDO como um objeto.
*/

import * as operacoes from "./math/operations.js";

const namespaceResultado = operacoes.somar(10, 5);

console.log(namespaceResultado);


/* ================================================================================================
   09 - DIFERENÇA ENTRE DEFAULT E NAMED
================================================================================================ */

/*
NAMED EXPORTS

✔ múltiplos por módulo
✔ importados pelo mesmo nome
✔ ideais para utilitários

export function validarCPF() {}
export function validarCNPJ() {}

import { validarCPF, validarCNPJ } from "./validators.js";


DEFAULT EXPORT

✔ apenas um por módulo
✔ importado sem {}
✔ nome pode mudar

export default class Usuario {}

import Usuario from "./usuario.js";
import User from "./usuario.js";
*/


/* ================================================================================================
   10 - COMO OS MÓDULOS FUNCIONAM
================================================================================================ */

/*
1. Escopo isolado
2. Strict mode automático
3. Executado apenas uma vez
4. Carregamento assíncrono no navegador

<script type="module" src="app.js"></script>

5. Imports são somente leitura
*/


/* ================================================================================================
   11 - BOAS PRÁTICAS PROFISSIONAIS
================================================================================================ */

/*
✔ Separe por responsabilidade

math/
format/
validation/
services/
utils/

✔ Evite arquivos genéricos
ruim:
utils.js

bom:
emailValidator.js
dateFormatter.js
priceCalculator.js

✔ Cada módulo deve ter uma responsabilidade clara

✔ Use named exports para utilitários

✔ Use default export para funcionalidade principal

✔ Seja consistente em todo o projeto
*/


/* ================================================================================================
   DESAFIO CONCEITUAL
================================================================================================ */

/*
Cenário:
Você está desenvolvendo um sistema de e-commerce.

Tarefas:

1. Proponha uma estrutura de pastas para:

- cálculo de preços
- formatação de valores
- validação de dados
- carrinho de compras

2. Defina para cada módulo:

- o que seria DEFAULT EXPORT
- o que seriam NAMED EXPORTS

3. No módulo carrinho.js, como você importaria:

- cálculos
- formatações
- validações

4. Responda:

- Como módulos resolvem o problema de arquivos grandes?
- Qual a diferença prática entre named e default export?
- Por que estrutura de pastas consistente é importante?
*/

// RESOLUÇÃO

// 1. Estrutura de pastas proposta:
/*
project/
│
├── cart/
│   └── cart.js
│
├── pricing/
│   └── priceCalculator.js
│
├── format/
│   └── currencyFormatter.js
│
├── validation/
│   └── emailValidator.js
│
└── app.js
*/

// 2. EXPORTAÇÕES

// pricing/priceCalculator.js

export default function calcularPrecoFinal(preco, desconto) {
    return preco - desconto;
}

export function calcularImposto(preco) {
    return preco * 0.1;
}

export function calcularFrete() {
    return 20;
}

/*
default: cálculo principal do preço
named: funções auxiliares
*/

// format/currencyFormatter.js

export default function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2)}`;
}

// validation/emailValidator.js

export default function validarEmail(email) {
    return email.includes("@");
}

export function extrairDominio(email) {
    return email.split("@")[1];
}

/*
default: validação principal
named: utilitário auxiliar
*/

// cart/cart.js

export default function adicionarProduto(produto) {
    console.log("Produto adicionado:", produto);
}

export function removerProduto(id) {
    console.log("Produto removido:", id);
}

// 3. Importações no módulo principal

import adicionarProduto from "./cart/cart.js";

import calcularPrecoFinal, {
    calcularImposto,
    calcularFrete
} from "./pricing/priceCalculator.js";

import formatarMoeda from "./format/currencyFormatter.js";

import validarEmail from "./validation/emailValidator.js";

// exemplo de uso:

const precoBase = 100;

const imposto = calcularImposto(precoBase);
const frete = calcularFrete();

const precoFinal = calcularPrecoFinal(precoBase + imposto + frete, 10);

console.log(formatarMoeda(precoFinal));

console.log(validarEmail("cliente@email.com"));

// 4. Reflexão

// Como módulos resonvem o problema de arquivos grandes?
/*
Os módulos dividem o código em arquivos menores, cada um responsável por uma parte do sistema.
Isso torna o código mais organizado, fácil de manter e reutilizar.
*/

// Diferença entre named export e default export

/*
Named export
- Pode haver vários por arquivo
- Precisa importar com o mesmo nome
*/

export function calcularImposto() {}

import { calcularImposto } from "./arquivo.js";

/* 
Default export
- Apenas um por módulo
- Pode importar com qualquer nome
*/

export default function calcularPreco() {}

import calcularPreco from "./arquivo.js";

// Por que a estrutura de pastas é importante?
/*
A estrutura de pastas:
- Organiza o projeto
- Facilita encontrar objetos
- Melhora a manutenção do código
- Permite que equipes trabalhem melhor no mesmo projeto
*/
