/*
===========================================================================================
   PROBLEM SOLVING — APLICAÇÃO DE FUNÇÕES
===========================================================================================

Este arquivo consolida:

- funções
- parâmetros e return
- arrays
- métodos de array
- condicionais
- organização de código

O objetivo é resolver problemas dividindo responsabilidades
em funções pequenas e reutilizáveis.
*/

//=========================================================================================
// 01- Calculadora Simples
//=========================================================================================
// Criar funções separadas para:
// - soma
// - subtração
// - multiplicação
// - divisão

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log(add(10, 5));
console.log(divide(10, 0));

//=========================================================================================
// 02 - Verificação de Usuário
//=========================================================================================
// Criar função que recebe:
// - username
// - password
// Validar regras simples e retornar mensagem adequada

function validateUser(username, password) {
    if (username.length < 3) {
        return "Username too short";
    }

    if (password.length < 6) {
        return "Password too short";
    }

    return "User validated";
}

console.log(validateUser("Ana", "123456"));

//=========================================================================================
// 03 - Sistema de Notas
//=========================================================================================
// Criar função que recebe array de notas
// Calcular média 
// Retornar "Approved" ou "Failed"

function calculateAverage(grades) {
    let sum = grades.reduce((acc, current) => acc + current, 0);
    return sum / grades.length;
}

function checkApproval(grades) {
    let average = calculateAverage(grades);

    if (average >= 7) {
        return "Approved";
    }

    return "Failed";
}

let studentGrades = [8, 7, 9];
console.log(checkApproval(studentGrades));

//=========================================================================================
// 04 - Busca em lista
//=========================================================================================
// Criar função que recebe:
// - array de produtos
// - nome de produto
// Retornar se o produto existe ou não


function findProduct(products, productName) {
    if (products.includes(productName)) {
        return "Product found";
    }
    return "Product not found";
}

let products = ["Laptop", "Mouse", "Keyboard"];
console.log(findProduct(products, "Mouse"));

//=========================================================================================
// 05 - Separação de responsabilidades
//=========================================================================================
// Demonstrar como dividir um problema em funções menores

function formatMessage(message) {
    return message.toUpperCase();
}

function sendMessage(message) {
    let formatted = formatMessage(message);
    console.log("Sending:", formatted);
}

sendMessage("system ready");

//=========================================================================================
// CONSIDERAÇÕES FINAIS
//=========================================================================================
// - Problemas devem ser divididos em funções pequenas
// - Funções devem ter responsabilidade única
// - Evite repetir lógica
// - Prefira retornar valores ao invés de apenas imprimir
// - Organização é tão importante quanto funcionamento